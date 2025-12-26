'use client'

import { useState } from 'react'
import { Menu, X, Rocket, Globe } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    // For now, just change the state
    // Later we'll implement full i18n
    alert(`Language changed to ${lang === 'en' ? 'English' : 'Türkçe'}. Full translation coming soon!`)
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
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 font-medium">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium">Testimonials</a>
            
            {/* Language Switcher */}
            <div className="flex items-center border-l border-gray-300 pl-6">
              <Globe className="h-5 w-5 text-gray-500 mr-2" />
              <select 
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-gray-700 cursor-pointer"
              >
                <option value="en">🇺🇸 English</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="es">🇪🇸 Español</option>
                <option value="de">🇩🇪 Deutsch</option>
              </select>
            </div>

            <a 
              href="https://forms.gle/YOUR_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all font-medium"
            >
              Get Started Free
            </a>
            
            <a 
              href="https://forms.gle/YOUR_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Join Waitlist
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
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">How It Works</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Pricing</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Testimonials</a>
              
              {/* Language Switcher Mobile */}
              <div className="px-3 py-2">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-500 mr-2" />
                  <select 
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-transparent border-none focus:outline-none text-gray-700 w-full py-1"
                  >
                    <option value="en">🇺🇸 English</option>
                    <option value="tr">🇹🇷 Türkçe</option>
                    <option value="es">🇪🇸 Español</option>
                    <option value="de">🇩🇪 Deutsch</option>
                  </select>
                </div>
              </div>

              <a 
                href="https://forms.gle/YOUR_FORM_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Join Waitlist
              </a>
              
              <a 
                href="https://forms.gle/YOUR_FORM_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-2 btn-primary text-center"
              >
                Get Started Free
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
