'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { X, Rocket, Sparkles, Clock, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TrialBanner() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    checkMobile()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const texts = {
    en: {
      title: '🚀 14-DAY FREE TRIAL',
      description: 'No credit card • Cancel anytime • All features',
      button: 'START FREE TRIAL',
      close: 'Close',
      badge: 'LIMITED TIME'
    },
    tr: {
      title: '🚀 14 GÜN ÜCRETSİZ DENEME',
      description: 'Kredi kartı gerekmez • İstediğin iptal • Tüm özellikler',
      button: 'ÜCRETSİZ BAŞLA',
      close: 'Kapat',
      badge: 'SINIRLI SÜRE'
    },
    es: {
      title: '🚀 PRUEBA GRATIS 14 DÍAS',
      description: 'Sin tarjeta • Cancela cuando • Todas features',
      button: 'COMENZAR GRATIS',
      close: 'Cerrar',
      badge: 'TIEMPO LIMITADO'
    },
    de: {
      title: '🚀 14 TAGE KOSTENLOS',
      description: 'Keine Karte • Jederzeit Stopp • Alle Features',
      button: 'KOSTENLOS TESTEN',
      close: 'Schließen',
      badge: 'BEGRENZTE ZEIT'
    }
  }

  const t = texts[language] || texts.en

  if (!isVisible && !isMobile) return null

  return (
    <>
      {isVisible && (
<div className={`fixed z-30 w-full ${isScrolled ? 'top-0' : 'top-0'}`}>
  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg">
            <div className="max-w-8xl mx-auto px-4 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:flex items-center h-8 w-8 bg-white/20 rounded-lg">
                    <Rocket className="h-4 w-4 mx-auto text-white" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                    <div className="flex items-center px-2 py-1 bg-white/20 rounded-full">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="text-xs font-bold">{t.badge}</span>
                    </div>
                    <h3 className="font-bold text-sm">{t.title}</h3>
                    <p className="text-white/90 text-xs hidden md:block">{t.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="#pricing"
                    className="hidden sm:inline-flex items-center px-4 py-1.5 bg-white text-gray-900 font-bold rounded-full text-sm"
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    {t.button}
                  </a>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-white/20 rounded-full"
                    aria-label={t.close}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isVisible && isMobile && (
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="#pricing"
            className="flex items-center justify-center h-14 w-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl"
          >
            <Rocket className="h-6 w-6" />
          </a>
        </div>
      )}

      {/* BODY PADDING KALDIRILDI */}
    </>
  )
}
