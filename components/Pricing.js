'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Check, Sparkles, Zap, Shield, Users, Globe, Cloud, Lock, Star } from 'lucide-react'

export default function Pricing() {
  const { t, language } = useLanguage()

  // Fiyatlar (dil değişince güncellenir)
  const pricingData = {
    basic: {
      name: t.basicPlan || 'Basic',
      price: language === 'tr' ? '99₺' : '$9',
      period: t.month || '/month',
      description: t.basicDescription || 'Perfect for individuals',
      features: [
        t.basicFeature1 || '10 AI-generated posts per month',
        t.basicFeature2 || 'Basic templates',
        t.basicFeature3 || 'Standard resolution exports',
        t.basicFeature4 || 'Email support',
        t.basicFeature5 || '1 social media platform'
      ],
      icon: Sparkles,
      color: 'from-blue-500 to-cyan-500',
      badge: t.popular || 'Popular'
    },
    pro: {
      name: t.proPlan || 'Pro',
      price: language === 'tr' ? '299₺' : '$29',
      period: t.month || '/month',
      description: t.proDescription || 'Best for small teams',
      features: [
        t.proFeature1 || '100 AI-generated posts per month',
        t.proFeature2 || 'Advanced templates + Custom',
        t.proFeature3 || 'HD exports + No watermark',
        t.proFeature4 || 'Priority support',
        t.proFeature5 || '5 social media platforms',
        t.proFeature6 || 'Analytics dashboard',
        t.proFeature7 || 'Brand kit integration'
      ],
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      badge: t.recommended || 'Recommended'
    },
    enterprise: {
      name: t.enterprisePlan || 'Enterprise',
      price: language === 'tr' ? 'Özel' : 'Custom',
      period: '',
      description: t.enterpriseDescription || 'For large organizations',
      features: [
        t.enterpriseFeature1 || 'Unlimited AI generations',
        t.enterpriseFeature2 || 'Custom AI model training',
        t.enterpriseFeature3 || 'Dedicated account manager',
        t.enterpriseFeature4 || 'API access',
        t.enterpriseFeature5 || 'On-premise deployment',
        t.enterpriseFeature6 || 'SLA 99.9% uptime',
        t.enterpriseFeature7 || 'White-label solution',
        t.enterpriseFeature8 || 'Team collaboration tools'
      ],
      icon: Shield,
      color: 'from-gray-900 to-gray-700',
      badge: t.enterprise || 'Enterprise'
    }
  }

  // Dil'e göre para birimi formatı
  const currencyFormat = language === 'tr' ? '₺' : '$'
  const periodText = language === 'tr' ? 'aylık' : 'monthly'

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mb-4">
            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600">
              {t.pricingBadge || 'Transparent Pricing'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.pricingTitle || 'Simple, Transparent Pricing'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.pricingSubtitle || 'Choose the perfect plan for your content creation needs. No hidden fees, cancel anytime.'}
          </p>
        </div>

        {/* Fiyatlandırma Tabloları */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(pricingData).map(([key, plan]) => {
            const Icon = plan.icon
            return (
              <div 
                key={key}
                className={`relative rounded-2xl p-8 bg-white border-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                  key === 'pro' 
                    ? 'border-purple-500 shadow-xl shadow-purple-500/10' 
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold text-white ${
                    key === 'pro' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                      : key === 'basic'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                      : 'bg-gradient-to-r from-gray-800 to-gray-900'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-6`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xl text-gray-500 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    {key === 'enterprise' 
                      ? (language === 'tr' ? 'Kişiye özel fiyatlandırma' : 'Custom pricing based on needs')
                      : `${periodText} • ${language === 'tr' ? 'Vergiler hariç' : 'Excluding taxes'}`
                    }
                  </p>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                  key === 'pro'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30'
                    : 'bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:shadow-lg hover:shadow-gray-900/30'
                }`}>
                  {key === 'enterprise' 
                    ? (language === 'tr' ? 'İletişime Geçin' : 'Contact Sales')
                    : (language === 'tr' ? 'Başlayın' : 'Get Started')
                  }
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {language === 'tr' ? 'Neler dahil:' : 'Everything included:'}
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra Info */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Globe className="h-4 w-4 mr-2" />
                    {language === 'tr' 
                      ? 'Dünya çapında sunucular' 
                      : 'Global servers'
                    }
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <Lock className="h-4 w-4 mr-2" />
                    {language === 'tr' 
                      ? 'Bankalar seviyesinde güvenlik' 
                      : 'Bank-level security'
                    }
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Karşılaştırma Tablosu */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            {language === 'tr' ? 'Plan Karşılaştırması' : 'Plan Comparison'}
          </h3>
          <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold text-gray-900">
                    {language === 'tr' ? 'Özellikler' : 'Features'}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-blue-600">
                    {t.basicPlan || 'Basic'}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-purple-600">
                    {t.proPlan || 'Pro'}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-900">
                    {t.enterprisePlan || 'Enterprise'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: t.compareFeature1 || 'AI Post Generation', basic: '10/month', pro: '100/month', enterprise: 'Unlimited' },
                  { feature: t.compareFeature2 || 'Export Quality', basic: 'Standard', pro: 'HD + No Watermark', enterprise: '4K + Custom' },
                  { feature: t.compareFeature3 || 'Social Platforms', basic: '1', pro: '5', enterprise: 'All' },
                  { feature: t.compareFeature4 || 'Support', basic: 'Email', pro: 'Priority', enterprise: '24/7 Dedicated' },
                  { feature: t.compareFeature5 || 'Team Members', basic: '1', pro: '5', enterprise: 'Unlimited' },
                  { feature: t.compareFeature6 || 'Custom Branding', basic: '✗', pro: '✓', enterprise: 'White-label' }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : ''}>
                    <td className="py-4 px-6 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.basic}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.pro}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <Star className="h-5 w-5 text-green-600 mr-3" />
            <div className="text-left">
              <p className="font-semibold text-gray-900">
                {language === 'tr' 
                  ? '14 günlük ücretsiz deneme' 
                  : '14-day free trial'
                }
              </p>
              <p className="text-sm text-gray-600">
                {language === 'tr'
                  ? 'Tüm planlar 14 gün ücretsiz. İstediğiniz zaman iptal edin.'
                  : 'All plans include 14-day free trial. Cancel anytime.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
