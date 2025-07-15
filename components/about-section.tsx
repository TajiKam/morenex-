
"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function AboutSection() {
  const [isFounderOpen, setIsFounderOpen] = useState(false)

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            About <span className="text-purple-400">Morenex Virtual Solutions</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Running an e-commerce store is exciting but also overwhelming. Between product uploads, managing
              inventory, customer service, fixing slow websites and chasing abandoned carts, it's easy to feel stuck and
              stretched thin. That's where Morenex Virtual Solutions comes in.
            </p>

            <p>
              We specialize in supporting e-commerce store owners with the backend systems that drive real growth. From
              done-for-you Shopify setups to custom websites on your platform of choice to email marketing automation, virtual assistance, website
              optimization and customized packages—we handle the heavy lifting behind the scenes so you don't have to.
            </p>

            <p className="text-xl font-semibold text-purple-300 text-center">
              Our goal is simple: To help you run a smoother, smarter and more profitable online business without
              burnout.
            </p>
          </div>

          {/* Founder Section as Accordion */}
          <div className="mt-12">
            <button
              onClick={() => setIsFounderOpen(!isFounderOpen)}
              className="w-full bg-gray-800 p-6 rounded-lg border border-purple-900/20 hover:border-purple-500/50 transition-colors flex items-center justify-between"
            >
              <h3 className="text-2xl font-bold text-white">
                Meet the <span className="text-purple-400">Founder</span>
              </h3>
              {isFounderOpen ? (
                <ChevronUp className="w-6 h-6 text-purple-400" />
              ) : (
                <ChevronDown className="w-6 h-6 text-purple-400" />
              )}
            </button>

            {isFounderOpen && (
              <div className="mt-4 bg-gray-800 p-8 rounded-lg border border-purple-900/20">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-52 h-52 bg-white rounded-full p-2 mx-auto mb-4">
                      <img
                        src="/morenex founder.png"
                        alt="Founder of Morenex"
                        className="w-full h-full object-cover object-top rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      <strong className="text-purple-300">Hi, I'm Moureen</strong> ; your behind the scenes powerhouse.
                      I'm the one you call when you're tired of juggling backend tasks, overwhelmed with marketing and
                      ready to finally scale your business with systems that work.
                    </p>

                    <p>
                      I have a background in Sociology and Economics, but my real education came from navigating life
                      with the grit of someone constantly in survival mode. In that chapter of my life, I started
                      teaching myself digital skills out of necessity - I wanted freedom, income and a way to build
                      something bigger than just making it through the day.
                    </p>

                    <p>
                      That's how I discovered the world of eCommerce and I fell in love with the systems behind
                      successful online businesses. I quickly realized just how stressed and stretched most business
                      owners were trying to do it all alone. That's when it clicked ; I could be the strategic support
                      they didn't even know they needed.
                    </p>

                    <p>
                      Today, I run a boutique digital support agency, working with global brands to simplify and scale
                      their operations. When I'm not optimizing stores or crafting email flows, I'm deep-diving into AI
                      tools, learning new ways to grow online businesses, journaling my goals or spoiling my cat, Luna.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
