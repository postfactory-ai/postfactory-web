'use client'

import { Check, X, HelpCircle } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for trying out PostFactory AI",
    features: [
      "10 AI-generated posts per month",
      "Basic image generation",
      "Standard caption writing",
      "Community support",
      "1 social media account"
    ],
    limitations: [
      "No scheduling",
      "Watermarked images",
      "Limited hashtag suggestions"
    ],
    buttonText: "Get Started",
    popular: false,
    color: "border-gray-200"
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "Best for individual creators & small businesses",
    features: [
      "100 AI-generated posts per month",
      "HD image generation",
      "Advanced caption writing",
      "Priority support",
      "5 social media accounts",
      "Basic scheduling",
      "Analytics dashboard",
      "Brand voice training"
    ],
    limitations: [],
    buttonText: "Start Free Trial",
    popular: true,
    color: "border-primary-500"
  },
  {
    name: "Team",
    price: "$99",
    period: "per month",
    description: "For agencies & growing teams",
    features: [
      "500 AI-generated posts per month",
      "4K image generation",
      "Multi-language support",
      "24/7 priority support",
      "Unlimited social accounts",
      "Advanced scheduling",
      "Team collaboration",
      "Custom AI model training",
      "API access",
      "White-label options"
    ],
    limitations: [],
    buttonText: "Contact Sales",
    popular: false,
    color: "border-secondary-500"
  }
]

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent
            <span className="block gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include our core AI features.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-12">
            <button
              className={`px-6 py-2 rounded-full font-medium ${billingPeriod === 'monthly' ? 'bg-white shadow' : 'text-gray-600'}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full font-medium ${billingPeriod === 'yearly' ? 'bg-white shadow' : 'text-gray-600'}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly <span className="text-primary-600 font-bold">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl border-2 ${plan.color} shadow-soft relative card-hover ${plan.popular ? 'transform scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full font-bold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-gray-500 ml-2">/{plan.period}</span>
                    )}
                  </div>
                  {billingPeriod === 'yearly' && plan.price !== "Free" && (
                    <div className="text-green-600 font-medium mt-2">
                      ${Math.round(parseInt(plan.price.replace('$', '')) * 12 * 0.8)} billed yearly
                    </div>
                  )}
                </div>

                <button className={`w-full py-3 rounded-full font-bold mb-8 ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}>
                  {plan.buttonText}
                </button>

                {/* Features */}
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{limitation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              },
              {
                q: "Do you offer custom plans for enterprises?",
                a: "Absolutely! Contact our sales team for custom pricing, volume discounts, and enterprise features."
              },
              {
                q: "How accurate is the AI content generation?",
                a: "Our AI is trained on millions of successful social media posts and continuously improves. Most users achieve 90%+ satisfaction with generated content."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
