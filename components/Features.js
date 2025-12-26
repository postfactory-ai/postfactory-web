import { Image, Zap, Brain, BarChart, Shield, Users } from 'lucide-react'

const features = [
  {
    icon: <Image className="h-8 w-8" />,
    title: "AI Image Generation",
    description: "Create unique, brand-aligned images for your posts using AI. No design skills needed.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Smart Caption Writing",
    description: "GPT-4 powered captions that match your brand voice and engage your audience.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Hashtag Optimization",
    description: "Get trending and relevant hashtags to maximize your post's reach and visibility.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: "Performance Analytics",
    description: "Track which posts perform best and get AI-powered suggestions for improvement.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Brand Consistency",
    description: "Maintain consistent branding across all your social media platforms automatically.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Team Collaboration",
    description: "Work with your team, assign roles, and streamline your content creation workflow.",
    color: "from-yellow-500 to-amber-500"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for
            <span className="block gradient-text">Social Media Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From idea to published post in minutes. Our AI handles the heavy lifting so you can focus on strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Demo section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">See It in Action</h3>
            <p className="text-xl mb-8 opacity-90">
              Watch how PostFactory AI transforms a simple idea into a complete social media post in under 60 seconds.
            </p>
            <div className="bg-black/20 rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl font-semibold">Demo Video Coming Soon</p>
                  <p className="opacity-80">(Placeholder for product demo)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
