"use client"

import { Button } from "@/components/ui/button"

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready to Elevate Your E-commerce Game?</h2>

        <p className="text-xl md:text-2xl mb-12 text-purple-200">
          Let's build, optimize, and scale your store — together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            onClick={scrollToContact}
          >
            Book a Free Discovery Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg bg-transparent"
            onClick={scrollToContact}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
