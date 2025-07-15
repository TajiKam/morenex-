import { Mail, Users, Globe, Zap, Package } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "E-commerce Virtual Assistance",
      description:
        "Day-to-day operations, general store maintenance, inventory & orders, customer service, SEO product descriptions, backend store health checks",
    },
    {
      icon: Mail,
      title: "Email Marketing & Automation",
      description:
        "Campaign strategy & copywriting, automation flows, email design, segmentation & lead magnet ideas, tracking & performance optimization",
    },
    {
      icon: Globe,
      title: "Done-for-You Store Setup",
      description:
        "Customized e-commerce website creation from scratch, tailored to your brand for clarity,conversion and growth. Domain & payment setup, mobile responsiveness, app/plugin integrations, handover with training",
    },
    {
      icon: Zap,
      title: "Website Optimization & Redesign",
      description:
        "Store speed & performance, UX improvement & redesign, checkout optimization, product page tuning, on-page SEO",
    },
    {
      icon: Package,
      title: "Customized Packages",
      description:
        "Monthly retainers or one-off projects, service bundles tailored to business goals & stage, strategy-focused, scalable, flexible packages",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Our <span className="text-purple-400">Services</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg border border-purple-900/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
