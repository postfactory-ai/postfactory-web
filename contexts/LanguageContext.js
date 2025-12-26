'use client'

import { createContext, useContext, useState, useEffect } from 'react'

// Dil çevirileri (tüm site için)
const translations = {
  en: {
    // Navbar
    features: "Features",
    howItWorks: "How It Works",
    pricing: "Pricing",
    testimonials: "Testimonials",
    getStarted: "Get Started Free",
    joinWaitlist: "Join Waitlist",
    
    // Hero
    heroTitle1: "Create Stunning Social Media Posts",
    heroTitle2: "in Seconds with AI",
    heroSubtitle: "PostFactory AI generates eye-catching images, writes engaging captions, and suggests perfect hashtags—all in one click. Save hours every week!",
    emailPlaceholder: "Enter your work email",
    startTrial: "Start Free Trial",
    freeTrialNote: "Try free for 14 days • No credit card required",
    
    // Features
    featuresTitle1: "Everything You Need for",
    featuresTitle2: "Social Media Success",
    featuresSubtitle: "From idea to published post in minutes. Our AI handles the heavy lifting so you can focus on strategy.",
    
    // How It Works
    howItWorksTitle1: "How It Works",
    howItWorksTitle2: "Simple & Powerful",
    howItWorksSubtitle: "Four simple steps from idea to published post. No technical skills required.",
    
    // Testimonials
    testimonialsTitle1: "Loved by Marketers",
    testimonialsTitle2: "& Creators Worldwide",
    testimonialsSubtitle: "See what our customers say about transforming their social media workflow.",
    
    // Pricing
    pricingTitle1: "Simple, Transparent",
    pricingTitle2: "Pricing",
    pricingSubtitle: "Choose the plan that fits your needs. All plans include our core AI features.",
    
    // CTA
    ctaTitle: "Ready to Transform Your Social Media Game?",
    ctaSubtitle: "Join thousands of marketers who save 10+ hours per week with AI-powered content creation.",
    
    // Footer
    copyright: "All rights reserved.",
    madeWith: "Made with",
    by: "by Kanka Enterprises"
  },
  
  tr: {
    // Navbar
    features: "Özellikler",
    howItWorks: "Nasıl Çalışır",
    pricing: "Fiyatlandırma",
    testimonials: "Müşteri Yorumları",
    getStarted: "Ücretsiz Başla",
    joinWaitlist: "Waitlist'e Katıl",
    
    // Hero
    heroTitle1: "Saniyeler İçinde Muhteşem",
    heroTitle2: "Sosyal Medya Gönderileri Oluşturun",
    heroSubtitle: "PostFactory AI, göz alıcı görseller oluşturur, etkileyici başlıklar yazar ve mükemmel hashtag'ler önerir—hepsi tek tıkla. Haftalarca saat kazanın!",
    emailPlaceholder: "İş e-posta adresiniz",
    startTrial: "Ücretsiz Deneyin",
    freeTrialNote: "14 gün ücretsiz deneyin • Kredi kartı gerekmez",
    
    // Features
    featuresTitle1: "Sosyal Medya Başarısı İçin",
    featuresTitle2: "İhtiyacınız Olan Her Şey",
    featuresSubtitle: "Fikirden yayınlanan gönderiye dakikalar içinde. AI'mız ağır işleri halleder, siz stratejiye odaklanırsınız.",
    
    // How It Works
    howItWorksTitle1: "Nasıl Çalışır",
    howItWorksTitle2: "Basit & Güçlü",
    howItWorksSubtitle: "Fikirden yayınlanan gönderiye dört basit adım. Teknik beceri gerekmez.",
    
    // Testimonials
    testimonialsTitle1: "Dünya Çapında Pazarlamacılar",
    testimonialsTitle2: "& İçerik Üreticileri Tarafından Sevilen",
    testimonialsSubtitle: "Müşterilerimizin sosyal medya iş akışlarını nasıl dönüştürdüğümüz hakkında söylediklerini görün.",
    
    // Pricing
    pricingTitle1: "Basit, Şeffaf",
    pricingTitle2: "Fiyatlandırma",
    pricingSubtitle: "İhtiyaçlarınıza uygun planı seçin. Tüm planlar temel AI özelliklerimizi içerir.",
    
    // CTA
    ctaTitle: "Sosyal Medya Oyununuzu Dönüştürmeye Hazır mısınız?",
    ctaSubtitle: "AI destekli içerik oluşturma ile haftada 10+ saat kazanan binlerce pazarlamacıya katılın.",
    
    // Footer
    copyright: "Tüm hakları saklıdır.",
    madeWith: "ile yapıldı",
    by: "Kanka Enterprises"
  },
  
  es: {
    // Navbar
    features: "Características",
    howItWorks: "Cómo Funciona",
    pricing: "Precios",
    testimonials: "Testimonios",
    getStarted: "Comienza Gratis",
    joinWaitlist: "Únete a la Lista",
    
    // Hero
    heroTitle1: "Crea Publicaciones Impactantes",
    heroTitle2: "en Segundos con IA",
    heroSubtitle: "PostFactory AI genera imágenes llamativas, escribe subtítulos atractivos y sugiere hashtags perfectos—todo con un clic. ¡Ahorra horas cada semana!",
    emailPlaceholder: "Ingresa tu email laboral",
    startTrial: "Comienza Prueba Gratis",
    freeTrialNote: "Prueba gratis por 14 días • Sin tarjeta de crédito",
    
    // Features
    featuresTitle1: "Todo lo que Necesitas para",
    featuresTitle2: "el Éxito en Redes Sociales",
    featuresSubtitle: "De idea a publicación en minutos. Nuestra IA maneja el trabajo pesado para que te centres en la estrategia.",
    
    // How It Works
    howItWorksTitle1: "Cómo Funciona",
    howItWorksTitle2: "Simple y Poderoso",
    howItWorksSubtitle: "Cuatro simples pasos desde la idea hasta la publicación. Sin habilidades técnicas requeridas.",
    
    // Testimonials
    testimonialsTitle1: "Amado por Marketeros",
    testimonialsTitle2: "y Creadores Mundialmente",
    testimonialsSubtitle: "Mira lo que dicen nuestros clientes sobre transformar su flujo de trabajo en redes sociales.",
    
    // Pricing
    pricingTitle1: "Simple, Transparente",
    pricingTitle2: "Precios",
    pricingSubtitle: "Elige el plan que se adapte a tus necesidades. Todos los planes incluyen nuestras funciones principales de IA.",
    
    // CTA
    ctaTitle: "¿Listo para Transformar tu Juego en Redes Sociales?",
    ctaSubtitle: "Únete a miles de marketeros que ahorran 10+ horas por semana con creación de contenido impulsada por IA.",
    
    // Footer
    copyright: "Todos los derechos reservados.",
    madeWith: "Hecho con",
    by: "por Kanka Enterprises"
  },
  
  de: {
    // Navbar
    features: "Funktionen",
    howItWorks: "So Funktioniert's",
    pricing: "Preise",
    testimonials: "Erfahrungen",
    getStarted: "Kostenlos Starten",
    joinWaitlist: "Warteliste",
    
    // Hero
    heroTitle1: "Erstelle Beeindruckende Social Media Posts",
    heroTitle2: "in Sekunden mit KI",
    heroSubtitle: "PostFactory AI generiert augenblicke Bilder, schreibt fesselnde Beschreibungen und schlägt perfekte Hashtags vor—alles mit einem Klick. Spare Wochenstunden!",
    emailPlaceholder: "Gebe deine Geschäfts-E-Mail ein",
    startTrial: "Kostenlos Testen",
    freeTrialNote: "14 Tage kostenlos testen • Keine Kreditkarte erforderlich",
    
    // Features
    featuresTitle1: "Alles was du brauchst für",
    featuresTitle2: "Social Media Erfolg",
    featuresSubtitle: "Von der Idee zum veröffentlichten Post in Minuten. Unsere KI übernimmt die schwere Arbeit, damit du dich auf die Strategie konzentrieren kannst.",
    
    // How It Works
    howItWorksTitle1: "So Funktioniert's",
    howItWorksTitle2: "Einfach & Leistungsstark",
    howItWorksSubtitle: "Vier einfache Schritte von der Idee zum veröffentlichten Post. Keine technischen Fähigkeiten erforderlich.",
    
    // Testimonials
    testimonialsTitle1: "Geliebt von Marketern",
    testimonialsTitle2: "& Creators Weltweit",
    testimonialsSubtitle: "Sieh, was unsere Kunden über die Transformation ihres Social Media Workflows sagen.",
    
    // Pricing
    pricingTitle1: "Einfache, Transparente",
    pricingTitle2: "Preise",
    pricingSubtitle: "Wähle den Plan, der deinen Bedürfnissen entspricht. Alle Pläne enthalten unsere Kern-KI-Funktionen.",
    
    // CTA
    ctaTitle: "Bereit, dein Social Media Spiel zu Verändern?",
    ctaSubtitle: "Schließe dich Tausenden von Marketern an, die mit KI-gestützter Inhaltserstellung 10+ Stunden pro Woche sparen.",
    
    // Footer
    copyright: "Alle Rechte vorbehalten.",
    madeWith: "Gemacht mit",
    by: "von Kanka Enterprises"
  }
}

// Dil seçenekleri
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [t, setT] = useState(translations.en)

  useEffect(() => {
    // LocalStorage'dan dili yükle
    const savedLang = localStorage.getItem('preferred-language')
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang)
      setT(translations[savedLang])
    }
  }, [])

  useEffect(() => {
    // Dili güncelle ve kaydet
    setT(translations[language])
    localStorage.setItem('preferred-language', language)
  }, [language])

  const changeLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguage(langCode)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
