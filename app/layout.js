import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PostFactory - AI Content Studio',
  description: 'AI-powered social media content factory',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {/* NAVBAR YOK BURADA - page.js'de var */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
