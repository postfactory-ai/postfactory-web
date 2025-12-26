import { Twitter, Linkedin, Instagram, Github, Mail, Heart } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Use Cases', href: '#' },
    { label: 'API', href: '#' },
    { label: 'Status', href: '#' }
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Tutorials', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Community', href: '#' }
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Partners', href: '#' }
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
    { label: 'Security', href: '#' }
  ]
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <div className="text-2xl font-bold">PF</div>
              </div>
              <div className="ml-3">
                <div className="text-2xl font-bold">PostFactory<span className="text-primary-400">.AI</span></div>
                <div className="text-gray-400">AI-Powered Content Factory</div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Transforming social media content creation with artificial intelligence. 
              Generate stunning posts in seconds, not hours.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="font-bold mb-2">Stay in the loop</h4>
              <p className="text-gray-400 text-sm mb-4">Get AI content tips and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                />
                <button className="bg-gradient-to-r from-primary-600 to-secondary-600 px-4 py-2 rounded-r-lg font-medium hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-bold text-lg mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PostFactory AI. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookies</a>
              <div className="flex items-center text-gray-400 text-sm">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> by Kanka Enterprises
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
