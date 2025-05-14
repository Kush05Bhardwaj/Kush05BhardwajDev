"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled 
        ? "backdrop-blur-md bg-zinc-900/80 shadow-md py-3" 
        : "backdrop-blur-sm bg-zinc-900/50 py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link 
          href="#home" 
          className="font-heading text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Kush05Bhardwaj.dev
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-zinc-800/80",
                pathname === item.href || (pathname === "/" && item.href === "#home")
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 border-b-2 border-cyan-500"
                  : "text-gray-300 hover:text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/50 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-1 py-3 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-zinc-800/80",
                  pathname === item.href || (pathname === "/" && item.href === "#home")
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 border-l-2 border-cyan-500 bg-zinc-800/30"
                    : "text-gray-300 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
