'use client'

import { Rocket, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Email submission logic would go here
    console.log('Email submitted:', email)
    alert('Thank you! We\'ll be in touch soon.')
    setEmail('')
  }

  const benefits = [
    "14-day free trial, no credit card needed",
    "Generate your first 10 posts for free",
    "Cancel anytime, no questions asked",
    "Priority onboarding support",
    "Access to all features during trial"
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <Rocket className="h-16 w-16 mx-auto mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your
                <span className="block">Social Media Game?</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Join thousands of marketers who save 10+ hours per week with AI-powered content creation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Start Your Free Trial Today</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-300 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signup form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get Started in 60 Seconds</h3>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your work email"
                      className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-primary-600 font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
                    >
                      Start Free Trial
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </form>
                <p className="text-center text-white/80 mt-6 text-sm">
                  By signing up, you agree to our Terms and Privacy Policy.
                </p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-center text-white/80 mb-6">Trusted by teams at</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                <div className="text-xl font-bold">STARTUP</div>
                <div className="text-xl font-bold">AGENCY</div>
                <div className="text-xl font-bold">ECOMMERCE</div>
                <div className="text-xl font-bold">CREATOR</div>
                <div className="text-xl font-bold">ENTERPRISE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
