"use client"

import { useEffect, useState, useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import BestWorks from "@/components/best-works"
import WorkExperience from "@/components/work-experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import FloatingIcons from "@/components/floating-icons"
import About from "@/components/about"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Scroll animation observer
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Optional: stop observing after the element has been revealed
            // scrollObserver.unobserve(entry.target);
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '0px',
        threshold: 0.1, // When 10% of the element is visible
      }
    );
    
    // Target all elements with the reveal-on-scroll class
    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    scrollElements.forEach((el) => scrollObserver.observe(el));
    
    return () => {
      if (scrollElements) {
        scrollElements.forEach((el) => scrollObserver.unobserve(el));
      }
    };
  }, []);

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-zinc-900 relative overflow-hidden">
      {/* Background Elements - Lower z-index */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      
      {/* Floating icons - Middle z-index */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <FloatingIcons />
      </div>

      {/* Main Content - Higher z-index */}
      <div className="relative z-20">
        <Navbar />
        <div className="container mx-auto space-y-responsive py-6 md:py-8">
          {/* Hero section */}
          <Hero />

          {[
            { Component: About, delay: 0.15 },
            { Component: TechStack, delay: 0.2 },
            { Component: BestWorks, delay: 0.3 },
            { Component: Testimonials, delay: 0.4 },
            { Component: WorkExperience, delay: 0.5 },
          ].map(({ Component, delay }, index) => (
            <div
              key={index}
              className="animate-fade-in-up reveal-on-scroll glass-card p-4 sm:p-6 hover-lift"
              style={{ animationDelay: `${delay}s`, animationFillMode: 'both' }}
            >
              <Component />
            </div>
          ))}
          
          {/* Contact section */}
          <div 
            className="animate-fade-in-up reveal-on-scroll glass-card hover-lift"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            <Contact />
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </main>
  )
}
