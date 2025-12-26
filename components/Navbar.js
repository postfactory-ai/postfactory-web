'use client'

import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Examples</a>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Blog</a>
            <button className="btn-primary">
              Get Started Free
            </button>
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium">Login</a>
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
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Features</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Examples</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">Login</a>
              <button className="w-full mt-2 btn-primary">
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
