import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Social Media Manager @TechStartup",
    content: "PostFactory AI cut our content creation time by 70%. What used to take 3 hours now takes 30 minutes.",
    avatar: "SJ",
    rating: 5,
    color: "bg-gradient-to-r from-primary-100 to-primary-200"
  },
  {
    name: "Michael Chen",
    role: "E-commerce Founder",
    content: "The AI-generated images are stunning. Our Instagram engagement increased by 300% in the first month.",
    avatar: "MC",
    rating: 5,
    color: "bg-gradient-to-r from-secondary-100 to-pink-100"
  },
  {
    name: "Alex Rodriguez",
    role: "Digital Marketing Agency Director",
    content: "We manage 20+ client accounts. PostFactory AI has become our secret weapon for scaling content production.",
    avatar: "AR",
    rating: 5,
    color: "bg-gradient-to-r from-green-100 to-emerald-100"
  },
  {
    name: "Emma Wilson",
    role: "Content Creator",
    content: "As a solo creator, this tool is a game-changer. I can now focus on strategy instead of execution.",
    avatar: "EW",
    rating: 5,
    color: "bg-gradient-to-r from-purple-100 to-violet-100"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4" />
            <span className="font-semibold">Trusted by 500+ Creators & Businesses</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by Marketers
            <span className="block gradient-text">& Creators Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about transforming their social media workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-soft card-hover"
            >
              <Quote className="h-10 w-10 text-primary-300 mb-6" />
              
              <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <span className="font-bold text-gray-800">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-primary-100">Posts Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-100">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-primary-100">Avg. Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
