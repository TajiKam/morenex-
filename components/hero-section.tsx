"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with city skyline effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-black"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent">
          MORENEX VIRTUAL SOLUTIONS
        </h1>

        <p className="text-2xl md:text-3xl mb-8 font-script text-purple-300 italic">
          Your All-in-One Partner for E-commerce Success
        </p>

        <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
          From optimized websites to automated email flows, we help you convert more customers and scale sustainably.
          Virtual solutions that drive real results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg"
            onClick={scrollToContact}
          >
            Let's Work Together
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg bg-transparent"
            onClick={scrollToServices}
          >
            See Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
