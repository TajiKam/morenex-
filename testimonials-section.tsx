"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lily M.",
      text: "Delivered a fully branded Shopify store that looked professional and was ready to launch in very short time.",
      rating: 5,
    },
    {
      name: "Shiko Essie",
      text: "Did a full store audit and optimized my UX. She's been key to my growth.",
      rating: 5,
    },
    {
      name: "Anna",
      text: "On a monthly retainer. Clear communication, proactive team, so reliable.",
      rating: 5,
    },
    {
      name: "Karatzia",
      text: "Email open rates through the roof! Big chunk of my revenue now comes from emails.",
      rating: 5,
    },
    {
      name: "Benson",
      text: "First time store owner. I've learned a lot and grown so much with their support.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Client <span className="text-purple-400">Testimonials</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-black p-8 rounded-lg border border-purple-900/20 relative">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-xl text-gray-300 text-center mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <p className="text-purple-300 text-center font-semibold text-lg">— {testimonials[currentIndex].name}</p>

            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
