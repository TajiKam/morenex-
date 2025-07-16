"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Get In <span className="text-purple-400">Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <form method="POST" action="https://formspree.io/f/mjkovlrl" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                Business/Website URL
              </label>
              <Input
                id="website"
                name="website"
                type="url"
                className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                What do you need help with? *
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              >
                <option value="">Select a service</option>
                <option value="email-marketing">Email Marketing & Automation</option>
                <option value="virtual-assistance">E-commerce Virtual Assistance</option>
                <option value="store-setup">Done-for-You Store Setup</option>
                <option value="optimization">Website Optimization & Redesign</option>
                <option value="custom-package">Customized Package</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                className="bg-gray-900 border-gray-700 text-white focus:border-purple-500"
                placeholder="Tell us about your project and goals..."
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
