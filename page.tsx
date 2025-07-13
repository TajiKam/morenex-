import HeroSection from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyPartnerSection } from "@/components/why-partner-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyPartnerSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  )
}
