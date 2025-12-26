'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Rocket, Globe, ChevronDown } from 'lucide-react'

// Dil çevirileri
const translations = {
  en: {
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    testimonials: "Testimonials",
    getStarted: "Get Started Free",
    joinWaitlist: "Join Waitlist",
    language: "English"
  },
  tr: {
    features: "Özellikler",
    howItWorks: "Nasıl Çalışır",
    pricing: "Fiyatlandırma",
    testimonials: "Müşteri Yorumları",
    getStarted: "Ücretsiz Başla",
    joinWaitlist: "Waitlist'e Katıl",
    language: "Türkçe"
  },
  es: {
    features: "Características",
    howItWorks: "Cómo Funciona",
    pricing: "Precios",
    testimonials: "Testimonios",
    getStarted: "Comienza Gratis",
    joinWaitlist: "Únete a la Lista",
    language: "Español"
  },
  de: {
    features: "Funktionen",
    howItWorks: "So Funktioniert's",
    pricing: "Preise",
    testimonials: "Erfahrungen",
    getStarted: "Kostenlos Starten",
    joinWaitlist: "Warteliste",
    language: "Deutsch"
  }
}

// Dil bayrakları ve kodları
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [language, setLanguage] = useState('en')
  const [t, setT] = useState(translations.en)

  // Dil değiştiğinde çevirileri güncelle
  useEffect(() => {
    setT(translations[language])
    
    // Dil değişikliğini localStorage'a kaydet (sonraki ziyaretler için)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language)
    }
    
    // Dil değişti mesajı (isteğe bağlı, kaldırabilirsin)
    console.log(`Language changed to: ${languages.find(l => l.code === language)?.name}`)
  }, [language])

  // Sayfa yüklendiğinde kayıtlı dili yükle
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('preferred-language')
      if (savedLang && translations[savedLang]) {
        setLanguage(savedLang)
      }
    }
  }, [])

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode)
    setIsLanguageOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-2xl font-bold gradient-text">
              PostFactory<span className="text-secondary-600">.AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">
              {t.features}
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 font-medium">
              {t.howItWorks}
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium">
              {t.pricing}
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">
              {t.testimonials}
            </a>
            
            {/* Dil Seçici - Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Globe className="h-5 w-5 text-gray-500" />
                <span className="font-medium">
                  {languages.find(l => l.code === language)?.flag} {languages.find(l => l.code === language)?.name}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center w-full px-4 py-2 hover:bg-gray-50 ${
                        language === lang.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg mr-3">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-primary-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Butonları */}
            <a 
              href="https://forms.gle/YOUR_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all font-medium"
            >
              {t.getStarted}
            </a>
            
            <a 
              href="https://forms.gle/YOUR_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              {t.joinWaitlist}
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                {t.features}
              </a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                {t.howItWorks}
              </a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                {t.pricing}
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
                {t.testimonials}
              </a>
              
              {/* Dil Seçici - Mobile */}
              <div className="px-3 py-2 border-t">
                <div className="font-medium text-gray-500 mb-2 flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Select Language
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center justify-center p-2 rounded-lg border ${
                        language === lang.code 
                          ? 'bg-primary-50 border-primary-500 text-primary-600' 
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg mr-2">{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Butonları */}
              <a 
                href="https://forms.gle/YOUR_FORM_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                {t.joinWaitlist}
              </a>
              
              <a 
                href="https://forms.gle/YOUR_FORM_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-2 btn-primary text-center"
              >
                {t.getStarted}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
