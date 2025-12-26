import { Target, Wand2, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: <Target className="h-8 w-8" />,
    step: "1",
    title: "Describe Your Idea",
    description: "Tell us what you want to post about. A product launch, a blog article, or just daily content.",
    color: "border-primary-500 text-primary-600"
  },
  {
    icon: <Wand2 className="h-8 w-8" />,
    step: "2",
    title: "AI Magic Happens",
    description: "Our AI generates images, writes captions, suggests hashtags, and optimizes for each platform.",
    color: "border-secondary-500 text-secondary-600"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    step: "3",
    title: "Review & Customize",
    description: "Edit anything you like. Change the image, tweak the caption, or adjust the hashtags.",
    color: "border-green-500 text-green-600"
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    step: "4",
    title: "Publish & Schedule",
    description: "Post immediately or schedule for later. Track performance and optimize over time.",
    color: "border-purple-500 text-purple-600"
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
            <span className="block gradient-text">Simple & Powerful</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps from idea to published post. No technical skills required.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-green-500 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className={`bg-white rounded-2xl p-8 border-2 ${item.color} shadow-soft relative z-10 card-hover`}>
                  <div className="flex items-start mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${item.color} flex items-center justify-center mr-4`}>
                      <span className="text-2xl font-bold">{item.step}</span>
                    </div>
                    <div className={`p-3 rounded-lg ${item.color.replace('border', 'bg').replace('text', 'bg')} bg-opacity-10`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Social Media?</h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers, creators, and businesses who save hours every week with PostFactory AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
