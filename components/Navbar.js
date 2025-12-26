'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Globe, ChevronDown, Sparkles } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { language, t, changeLanguage, languages } = useLanguage()

  useEffect(() => {
    const savedLang = localStorage.getItem('postfactory-language')
    if (!savedLang) {
      localStorage.setItem('postfactory-language', 'en')
      changeLanguage('en')
    } else if (savedLang !== language) {
      changeLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    if (language) {
      localStorage.setItem('postfactory-language', language)
    }
  }, [language])

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsLanguageOpen(false)
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    
    if (window.location.hash) {
      window.history.replaceState(null, null, ' ')
    }
    
    setIsMenuOpen(false)
  }

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    {/* BURASI ÇOK ÖNEMLİ: top-0 YAPILDI */}
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-4 group cursor-pointer focus:outline-none"
            aria-label="Ana sayfaya dön"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative h-12 w-12 rounded-xl bg-gradient-to-br from-gray-900 to-black p-2.5 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <path
                    d="M20,50 Q50,30 80,50 Q50,70 20,50"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    className="transition-all duration-500 group-hover:stroke-[2.5px] opacity-90"
                  />
                  <path
                    d="M30,30 L50,50 L70,30"
                    fill="none"
                    stroke="url(#gradient2)"
                    strokeWidth="1.5"
                    className="transition-all duration-500 group-hover:stroke-[2px] opacity-80"
                  />
                  
                  <circle cx="20" cy="50" r="5" fill="url(#nodeGradient)" className="transition-all duration-300 group-hover:r-6" />
                  <circle cx="50" cy="30" r="4" fill="url(#nodeGradient)" className="transition-all duration-300 group-hover:r-5" />
                  <circle cx="80" cy="50" r="5" fill="url(#nodeGradient)" className="transition-all duration-300 group-hover:r-6" />
                  <circle cx="50" cy="70" r="4" fill="url(#nodeGradient)" className="transition-all duration-300 group-hover:r-5" />
                  
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    className="font-bold"
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '28px',
                      fill: 'url(#textGradient)',
                      fontWeight: '800',
                      letterSpacing: '-1px'
                    }}
                  >
                    PF
                  </text>
                  
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </radialGradient>
                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#E5E7EB" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="absolute -bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="flex flex-col text-left">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
                PostFactory
              </span>
              <span className="text-xs font-medium text-gray-500 tracking-widest uppercase mt-0.5">
                AI Content Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <button 
                onClick={(e) => handleNavClick(e, 'features')}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors relative group"
              >
                {t.features}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
              
              <button 
                onClick={(e) => handleNavClick(e, 'how-it-works')}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors relative group"
              >
                {t.howItWorks}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
              
              <button 
                onClick={(e) => handleNavClick(e, 'pricing')}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors relative group"
              >
                {t.pricing}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
              
              <button 
                onClick={(e) => handleNavClick(e, 'testimonials')}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm uppercase tracking-wide transition-colors relative group"
              >
                {t.testimonials}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            <div className="relative ml-4">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border border-gray-300/50 transition-all duration-300 hover:border-gray-400 shadow-sm"
              >
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="font-medium text-sm text-gray-700">
                  {languages.find(l => l.code === language)?.flag} 
                  <span className="ml-1.5">{languages.find(l => l.code === language)?.name}</span>
                </span>
                <ChevronDown className={`h-3 w-3 text-gray-500 transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 backdrop-blur-sm">
                  <div className="px-3 py-2 border-b border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {language === 'tr' ? 'Dil Seçiniz' : 'Select Language'}
                    </span>
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center w-full px-4 py-3 hover:bg-gray-50/80 transition-colors ${
                        language === lang.code ? 'bg-blue-50/50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg mr-3">{lang.flag}</span>
                      <div className="flex flex-col items-start">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-xs text-gray-500 mt-0.5">{lang.nativeName}</span>
                      </div>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-600">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SADECE GET STARTED - WAITLIST YOK */}
            <a 
              href="#pricing"
              className="px-8 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group relative overflow-hidden flex items-center"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="relative z-10">{t.getStarted}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu - WAITLIST YOK */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg rounded-b-2xl mt-2">
            <div className="px-4 pt-4 pb-6 space-y-1">
              <div className="space-y-2 mb-4">
                <button 
                  onClick={(e) => handleNavClick(e, 'features')}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                >
                  {t.features}
                </button>
                <button 
                  onClick={(e) => handleNavClick(e, 'how-it-works')}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                >
                  {t.howItWorks}
                </button>
                <button 
                  onClick={(e) => handleNavClick(e, 'pricing')}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                >
                  {t.pricing}
                </button>
                <button 
                  onClick={(e) => handleNavClick(e, 'testimonials')}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                >
                  {t.testimonials}
                </button>
              </div>

              <div className="px-4 py-4 border-t border-gray-100">
                <div className="flex items-center text-gray-500 mb-3">
                  <Globe className="h-5 w-5 mr-2" />
                  <span className="font-medium text-sm">
                    {language === 'tr' ? 'Dil Seçin' : 'Select Language'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`flex items-center justify-center p-3 rounded-xl border transition-all ${
                        language === lang.code 
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-600 shadow-sm' 
                          : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xl mr-3">{lang.flag}</span>
                      <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">{lang.name}</span>
                        <span className="text-xs text-gray-500 mt-0.5">{lang.nativeName}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* SADECE GET STARTED - WAITLIST YOK */}
              <div className="pt-4 border-t border-gray-100">
                <a 
                  href="#pricing"
                  className="block w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-md flex items-center justify-center"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  {t.getStarted}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
