import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import { LanguageProvider } from './../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PostFactory AI - AI-Powered Social Media Content',
  description: 'Generate stunning social media posts in seconds with AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
