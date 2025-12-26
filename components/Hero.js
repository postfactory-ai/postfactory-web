'use client'

import { ArrowRight, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const [email, setEmail] = useState('')
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Google Forms'a yönlendir
    window.open('https://forms.gle/YOUR_FORM_LINK', '_blank')
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-800 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">AI-Powered Content Generation</span>
            <Zap className="h-4 w-4" />
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {t.heroTitle1}
            <span className="block gradient-text">{t.heroTitle2}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            {t.heroSubtitle}
          </p>

          {/* Email capture */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="flex-grow px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {t.startTrial}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {t.freeTrialNote}
            </p>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700">10,000+</div>
              <div className="text-gray-600">Posts Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700">98%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-700">4.9/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  )
}
