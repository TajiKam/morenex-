import { ShoppingBag, Briefcase, BarChart3, Heart, DollarSign, TrendingUp } from "lucide-react"

export function WhyPartnerSection() {
  const reasons = [
    {
      icon: ShoppingBag,
      title: "We understand E-commerce inside out",
      description: "Deep expertise in online retail operations",
    },
    {
      icon: Briefcase,
      title: "Done-for-you services that save you time",
      description: "Complete solutions without the hassle",
    },
    {
      icon: BarChart3,
      title: "Data-driven, Strategy-led Execution",
      description: "Every decision backed by analytics",
    },
    {
      icon: Heart,
      title: "We treat your business like our own",
      description: "Your success is our success",
    },
    {
      icon: DollarSign,
      title: "Flexible & affordable for Startups and Growing brands",
      description: "Solutions that scale with your budget",
    },
    {
      icon: TrendingUp,
      title: "Proven results",
      description: "Clients have seen up to 42% increase in conversions",
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Why Partner <span className="text-purple-400">With Us</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg border border-purple-900/20 hover:border-purple-500/50 transition-colors"
            >
              <reason.icon className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-purple-300">
            📈 Clients have seen up to 42% increase in conversions after working with us.
          </p>
        </div>
      </div>
    </section>
  )
}
