"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const roles = [
    "Mern Stack Developer",
    "AI Enthusiast",
  ]

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % roles.length
      const fullText = roles[currentIndex]

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 80 : 150)

      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        // Pause before starting to type the next word
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, roles, typingSpeed])

  return (
    <section id="home" className="py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-xl animate-fade-in-up">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-4xl">👋</span>
          <h1 className="text-3xl sm:text-4xl font-bold">Hi, I'm Kushagra Bhardwaj,</h1>
        </div>
        <div className="mb-4">
          <div className="h-14 sm:h-16">
            <span className="inline-block text-2xl sm:text-4xl font-bold text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              {displayText}
              <span className="animate-cursor">|</span>
            </span>
          </div>
        </div>
        <p className="text-gray-300 mb-8 max-w-md">
          I'm obsessed with Coding with a passion for building beautiful and functional user experiences.
        </p>
        <div className="flex gap-4">
          <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-md">
            <Link href="#contact">Let's Connect →</Link>
          </Button>
            <Button
            asChild
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-600/10"
            >
            <Link href="/Kush_Bhardwaj_CV.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Link>
            </Button>
        </div>
        <div className="mt-8 pt-6 border-t border-zinc-800/30">
          <div className="flex gap-4 mt-3">
            <a href="https://www.linkedin.com/in/kush2012bhardwaj/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover-lift transition-all-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/Kush05Bhardwaj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-300 hover:text-purple-400 hover-lift transition-all-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://x.com/Kush05Bhardwaj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-300 hover:text-blue-400 hover-lift transition-all-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
      </div>
      </div>
      <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] shadow-lg shadow-indigo-500/30">
          <Image
            src="/KB.jpg?height=300&width=300"
            alt="Developer avatar"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
