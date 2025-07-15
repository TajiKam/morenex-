"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src="/morenex logo.png"
              alt="Morenex Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="text-xl font-bold text-white">
              MORENEX <span className="text-purple-400">VIRTUAL SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
            <Button className="bg-purple-600 hover:bg-purple-700">Book a Call</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-900/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Why Us
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <Button className="bg-purple-600 hover:bg-purple-700 w-fit">Book a Call</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
