"use client"

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Use non-null assertion for TypeScript
    const context = ctx as CanvasRenderingContext2D

    let width = window.innerWidth
    let height = window.innerHeight

    // Set canvas size
    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    // Initialize
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      directionChange: number

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.opacity = Math.random() * 0.5 + 0.1
        this.directionChange = Math.random() * 0.01

        // Create a gradient of blues and purples
        const colors = [
          'rgba(99, 102, 241, opacity)', // indigo-500
          'rgba(59, 130, 246, opacity)', // blue-500
          'rgba(14, 165, 233, opacity)', // sky-500
          'rgba(79, 70, 229, opacity)',  // indigo-600
          'rgba(124, 58, 237, opacity)', // violet-600
          'rgba(168, 85, 247, opacity)', // purple-500
        ]
        
        this.color = colors[Math.floor(Math.random() * colors.length)]
          .replace('opacity', this.opacity.toString())
      }

      update() {
        // Add some subtle direction changes
        this.speedX += (Math.random() - 0.5) * this.directionChange
        this.speedY += (Math.random() - 0.5) * this.directionChange
        
        // Limit maximum speed
        this.speedX = Math.max(-0.7, Math.min(0.7, this.speedX))
        this.speedY = Math.max(-0.7, Math.min(0.7, this.speedY))
        
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    const particleCount = Math.min(100, Math.floor(width * height / 10000))
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connection lines
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            // Linear gradient opacity based on distance
            const opacity = 0.2 * (1 - distance / maxDistance)
            
            context.beginPath()
            context.moveTo(particles[i].x, particles[i].y)
            context.lineTo(particles[j].x, particles[j].y)
            context.strokeStyle = `rgba(120, 120, 250, ${opacity})`
            context.lineWidth = 0.5
            context.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      context.clearRect(0, 0, width, height)

      // Create a subtle gradient background
      const gradient = context.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, 'rgba(23, 24, 33, 1)')   // Dark blue-gray
      gradient.addColorStop(1, 'rgba(15, 16, 22, 1)')   // Darker blue-gray
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw(context)
      })

      // Draw connections
      drawConnections()

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full"
      style={{ 
        background: 'rgb(24, 24, 27)',
      }}
    />
  )
} 