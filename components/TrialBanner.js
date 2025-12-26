// components/TrialBanner.js - TAM KOD
'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { X, Rocket, Sparkles, Clock, Shield, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TrialBanner() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
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
      description: 'No credit card required • Cancel anytime • Full access to all features',
      button: 'START FREE TRIAL',
      close: 'Close',
      badge: 'LIMITED TIME',
      feature1: 'No Credit Card',
      feature2: 'Cancel Anytime',
      feature3: 'All Features',
      ctaMobile: 'GET STARTED'
    },
    tr: {
      title: '🚀 14 GÜN ÜCRETSİZ DENEME',
      description: 'Kredi kartı gerekmez • İstediğin zaman iptal • Tüm özelliklere tam erişim',
      button: 'ÜCRETSİZ DENEMEYE BAŞLA',
      close: 'Kapat',
      badge: 'SINIRLI SÜRE',
      feature1: 'Kart Gerekmez',
      feature2: 'İstediğin İptal',
      feature3: 'Tüm Özellikler',
      ctaMobile: 'HEMEN BAŞLA'
    },
    es: {
      title: '🚀 PRUEBA GRATUITA 14 DÍAS',
      description: 'Sin tarjeta de crédito • Cancela cuando quieras • Acceso completo',
      button: 'COMENZAR PRUEBA GRATIS',
      close: 'Cerrar',
      badge: 'TIEMPO LIMITADO',
      feature1: 'Sin Tarjeta',
      feature2: 'Cancela',
      feature3: 'Todas Features',
      ctaMobile: 'COMENZAR'
    },
    de: {
      title: '🚀 14 TAGE KOSTENLOSE TESTVERSION',
      description: 'Keine Kreditkarte • Jederzeit kündbar • Vollzugriff auf alle Funktionen',
      button: 'KOSTENLOS TESTEN',
      close: 'Schließen',
      badge: 'BEGRENZTE ZEIT',
      feature1: 'Keine Karte',
      feature2: 'Jederzeit Stopp',
      feature3: 'Alle Features',
      ctaMobile: 'STARTEN'
    }
  }

  const t = texts[language] || texts.en

  if (!isVisible && !isMobile) return null

  return (
    <>
      {isVisible && (
        <div className={`fixed z-50 w-full transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0'}`}>
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-8xl mx-auto">
              <div className="py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="hidden sm:flex items-center justify-center h-10 w-10 bg-white/20 rounded-xl backdrop-blur-sm">
                      <Rocket className="h-5 w-5 text-white animate-pulse" />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm">
                        <Clock className="h-3 w-3 mr-1.5" />
                        <span className="text-xs font-bold tracking-wider">{t.badge}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <h3 className="font-bold text-sm sm:text-base tracking-tight">{t.title}</h3>
                        <div className="hidden lg:flex items-center space-x-4">
                          <div className="flex items-center text-white/90">
                            <CheckCircle className="h-3 w-3 mr-1.5" />
                            <span className="text-xs">{t.feature1}</span>
                          </div>
                          <div className="flex items-center text-white/90">
                            <CheckCircle className="h-3 w-3 mr-1.5" />
                            <span className="text-xs">{t.feature2}</span>
                          </div>
                          <div className="flex items-center text-white/90">
                            <CheckCircle className="h-3 w-3 mr-1.5" />
                            <span className="text-xs">{t.feature3}</span>
                          </div>
                        </div>
                        <p className="text-white/90 text-xs sm:text-sm hidden md:block">{t.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <a
                      href="#pricing"
                      className="hidden sm:inline-flex items-center px-5 py-2 bg-white text-gray-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span className="text-sm">{t.button}</span>
                    </a>

                    <button
                      onClick={() => setIsVisible(false)}
                      className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
                      aria-label={t.close}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          {isMobile && (
            <div className="md:hidden bg-gradient-to-r from-blue-700 to-purple-700 text-white py-2 px-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Rocket className="h-5 w-5 animate-bounce" />
                  <div>
                    <p className="font-bold text-sm">{t.title}</p>
                    <p className="text-xs opacity-90">{t.description}</p>
                  </div>
                </div>
                <a
                  href="#pricing"
                  className="px-4 py-1.5 bg-white text-blue-700 font-bold rounded-full text-sm"
                >
                  {t.ctaMobile}
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {!isVisible && isMobile && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <a
            href="#pricing"
            className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl"
          >
            <div className="relative">
              <Rocket className="h-7 w-7" />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </a>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        body {
          padding-top: ${isVisible ? (isMobile ? '70px' : '60px') : '0px'};
          transition: padding-top 0.3s ease;
        }
      `}</style>
    </>
  )
}
