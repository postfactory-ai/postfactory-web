'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ChevronDown, HelpCircle, Zap, Globe, CreditCard, Shield, Smartphone, Users } from 'lucide-react'

export default function FAQ() {
  const { t, language } = useLanguage()
  const [openIndex, setOpenIndex] = useState(null)

  // Translation fallback mekanizması
  const getTranslation = (key, fallback) => {
    if (!t || typeof t !== 'object') return fallback
    return t[key] || fallback
  }

  // FAQ verileri - Context'ten al veya fallback kullan
  const faqData = [
    {
      question: getTranslation('faqQuestion1', 'What is PostFactory and how does it work?'),
      answer: getTranslation('faqAnswer1', 'PostFactory is an AI-powered platform that automatically generates social media content including text, images, and videos using advanced AI models.'),
      icon: HelpCircle,
      category: 'general'
    },
    {
      question: getTranslation('faqQuestion2', 'Which social media platforms do you support?'),
      answer: getTranslation('faqAnswer2', 'We support Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and more. Each platform has optimized templates and formats.'),
      icon: Globe,
      category: 'platforms'
    },
    {
      question: getTranslation('faqQuestion3', 'How long does it take to generate content?'),
      answer: getTranslation('faqAnswer3', 'Simple posts take 30 seconds, complex content 2-3 minutes. Bulk mode allows generating 50+ posts simultaneously.'),
      icon: Zap,
      category: 'technical'
    },
    {
      question: getTranslation('faqQuestion4', 'Is there a free trial available?'),
      answer: getTranslation('faqAnswer4', 'Yes! All plans include a 14-day free trial with full access to all features, no credit card required.'),
      icon: CreditCard,
      category: 'pricing'
    },
    {
      question: getTranslation('faqQuestion5', 'Who owns the copyright of generated content?'),
      answer: getTranslation('faqAnswer5', 'You own 100% of the content you create. We never claim ownership of any content generated on our platform.'),
      icon: Shield,
      category: 'legal'
    },
    {
      question: getTranslation('faqQuestion6', 'Do you have a mobile app?'),
      answer: getTranslation('faqAnswer6', 'Our web app is fully responsive on all devices. Native iOS and Android apps are coming in late 2024.'),
      icon: Smartphone,
      category: 'technical'
    },
    {
      question: getTranslation('faqQuestion7', 'Can I collaborate with my team?'),
      answer: getTranslation('faqAnswer7', 'Yes! Team features allow multiple users to collaborate, approve content, and manage campaigns together.'),
      icon: Users,
      category: 'collaboration'
    },
    {
      question: getTranslation('faqQuestion8', 'What AI models do you use?'),
      answer: getTranslation('faqAnswer8', 'We use GPT-4 for text, DALL-E 3 for images, and custom models for video generation. All models are regularly updated.'),
      icon: Zap,
      category: 'technical'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
            <HelpCircle className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">
              {getTranslation('faqBadge', 'FAQ')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation('faqTitle', 'Frequently Asked Questions')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation('faqSubtitle', 'Find answers to common questions about PostFactory. Can\'t find what you\'re looking for? Contact our support team.')}
          </p>
        </div>

        {/* FAQ Listesi */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const Icon = faq.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-start justify-between focus:outline-none hover:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg mt-1 ${
                      faq.category === 'general' ? 'bg-blue-100 text-blue-600' :
                      faq.category === 'pricing' ? 'bg-green-100 text-green-600' :
                      faq.category === 'technical' ? 'bg-purple-100 text-purple-600' :
                      'bg-orange-100 text-orange-600'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <div className={`text-gray-600 transition-all duration-300 ${
                        openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 mt-2 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Expanded Content */}
                <div
                  className={`px-6 transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-96 opacity-100 pb-6'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="pl-14 border-t border-gray-100 pt-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {getTranslation('faqCtaTitle', 'Still have questions?')}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {getTranslation('faqCtaText', 'Our support team is here to help you 24/7. Get in touch and we\'ll respond within 2 hours.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@postfactory.ai"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              {getTranslation('faqEmailButton', 'Contact Support')}
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              {getTranslation('faqPricingButton', 'View Pricing')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
