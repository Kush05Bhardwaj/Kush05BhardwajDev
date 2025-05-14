"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { 
  Code, 
  Database, 
  FileCode, 
  Globe, 
  Layout, 
  Laptop, 
  Server, 
  Smartphone, 
  Terminal, 
  Zap,
  BracesIcon,
  Hash,
  Braces,
  Binary,
  Bug,
  Brackets,
  FolderGit,
  FolderTree,
  Component,
  GitBranch
} from "lucide-react"

type FloatingIcon = {
  id: number
  icon: React.ReactNode
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  floatSpeed: number
  floatOffset: number
  floatPhase: number
  rotation: number
  rotationSpeed: number
  opacity: number
  color: string
  pulseSpeed: number
  pulsePhase: number
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    // Available colors - matching the hero section gradient
    const colors = [
      "text-cyan-400",
      "text-blue-500",
      "text-purple-500",
      "text-indigo-500",
      "text-blue-400",
      "text-cyan-500",
    ]

    // Create initial icons
    const initialIcons: FloatingIcon[] = Array.from({ length: 20 }).map((_, index) => {
      const iconComponents = [
        <Code key={`code-${index}`} />,
        <Database key={`db-${index}`} />,
        <FileCode key={`file-${index}`} />,
        <Globe key={`globe-${index}`} />,
        <Layout key={`layout-${index}`} />,
        <Laptop key={`laptop-${index}`} />,
        <Server key={`server-${index}`} />,
        <Smartphone key={`phone-${index}`} />,
        <Terminal key={`terminal-${index}`} />,
        <Zap key={`zap-${index}`} />,
        <BracesIcon key={`braces-${index}`} />,
        <Hash key={`hash-${index}`} />,
        <Braces key={`curly-${index}`} />,
        <Binary key={`binary-${index}`} />,
        <Bug key={`bug-${index}`} />,
        <Brackets key={`brackets-${index}`} />,
        <FolderGit key={`folder-git-${index}`} />,
        <FolderTree key={`folder-tree-${index}`} />,
        <Component key={`component-${index}`} />,
        <GitBranch key={`git-branch-${index}`} />
      ]

      const floatSpeed = Math.random() * 4 + 3; // 3-7 seconds
      const rotationSpeed = Math.random() * 5 + 3; // 3-8 seconds

      return {
        id: index,
        icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
        x: Math.random() * 100, // Starting position X
        y: Math.random() * 100, // Starting position Y
        size: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.2, // Random X direction and speed
        speedY: (Math.random() - 0.5) * 0.2, // Random Y direction and speed
        floatSpeed: floatSpeed, // Speed of up/down floating (seconds)
        floatOffset: (Math.random() * 15 + 5) * (Math.random() > 0.5 ? 1 : -1), // Float distance in pixels
        floatPhase: Math.random() * 100, // Random starting phase
        rotation: Math.random() * 360,
        rotationSpeed: rotationSpeed, // Rotation animation speed in seconds
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 3 + 2, // Speed of pulse/shine (seconds)
        pulsePhase: Math.random() * 100, // Random starting phase
      }
    })

    setIcons(initialIcons)
    
    // Animation function to move icons
    const animateIcons = () => {
      setIcons(prevIcons => 
        prevIcons.map(icon => {
          let newX = icon.x + icon.speedX;
          let newY = icon.y + icon.speedY;
          
          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newX = Math.max(0, Math.min(100, newX));
            icon.speedX = -icon.speedX;
          }
          
          if (newY <= 0 || newY >= 100) {
            newY = Math.max(0, Math.min(100, newY));
            icon.speedY = -icon.speedY;
          }
          
          return {
            ...icon,
            x: newX,
            y: newY
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animateIcons);
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animateIcons);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [])

  return (
    <div className="w-full h-full">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className={`absolute ${icon.color} animate-glow`}
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            opacity: icon.opacity,
            "--float-offset": `${icon.floatOffset}px`,
            "--rotation-mid": `${icon.rotation / 2}deg`,
            "--rotation-end": `${icon.rotation}deg`,
            animation: `
              float ${icon.floatSpeed}s ease-in-out infinite,
              glow ${icon.pulseSpeed}s ease-in-out infinite
            `,
            animationDelay: `${icon.floatPhase}s, ${icon.pulsePhase}s`,
          } as React.CSSProperties}
        >
          {icon.icon}
        </div>
      ))}
    </div>
  )
}
