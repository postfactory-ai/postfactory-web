'use client'

import { Target, Wand2, Rocket, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const steps = [
  {
    icon: <Target className="h-8 w-8" />,
    step: "1",
    title_en: "Describe Your Idea",
    title_tr: "Fikrinizi Tanımlayın",
    title_es: "Describe tu Idea",
    title_de: "Beschreibe deine Idee",
    description_en: "Tell us what you want to post about. A product launch, a blog article, or just daily content.",
    description_tr: "Ne hakkında gönderi paylaşmak istediğinizi söyleyin. Bir ürün lansmanı, blog yazısı veya sadece günlük içerik.",
    description_es: "Dinos de qué quieres publicar. Un lanzamiento de producto, un artículo de blog o simplemente contenido diario.",
    description_de: "Teile uns mit, worüber du posten möchtest. Ein Produktlaunch, ein Blogartikel oder einfach täglicher Content.",
    color: "border-primary-500 text-primary-600"
  },
  {
    icon: <Wand2 className="h-8 w-8" />,
    step: "2",
    title_en: "AI Magic Happens",
    title_tr: "AI Sihri Gerçekleşir",
    title_es: "Ocurre la Magia de la IA",
    title_de: "KI-Magie Geschieht",
    description_en: "Our AI generates images, writes captions, suggests hashtags, and optimizes for each platform.",
    description_tr: "AI'mız görseller oluşturur, başlıklar yazar, hashtag'ler önerir ve her platform için optimize eder.",
    description_es: "Nuestra IA genera imágenes, escribe subtítulos, sugiere hashtags y optimiza para cada plataforma.",
    description_de: "Unsere KI generiert Bilder, schreibt Beschreibungen, schlägt Hashtags vor und optimiert für jede Plattform.",
    color: "border-secondary-500 text-secondary-600"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    step: "3",
    title_en: "Review & Customize",
    title_tr: "İncele & Özelleştir",
    title_es: "Revisa y Personaliza",
    title_de: "Überprüfen & Anpassen",
    description_en: "Edit anything you like. Change the image, tweak the caption, or adjust the hashtags.",
    description_tr: "Beğendiğiniz her şeyi düzenleyin. Görseli değiştirin, başlığı düzenleyin veya hashtag'leri ayarlayın.",
    description_es: "Edita lo que quieras. Cambia la imagen, ajusta el subtítulo o modifica los hashtags.",
    description_de: "Bearbeite alles, was dir gefällt. Ändere das Bild, passe die Beschreibung an oder passe die Hashtags an.",
    color: "border-green-500 text-green-600"
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    step: "4",
    title_en: "Publish & Schedule",
    title_tr: "Yayınla & Planla",
    title_es: "Publica y Programa",
    title_de: "Veröffentlichen & Planen",
    description_en: "Post immediately or schedule for later. Track performance and optimize over time.",
    description_tr: "Hemen yayınlayın veya sonrası için planlayın. Performansı takip edin ve zamanla optimize edin.",
    description_es: "Publica inmediatamente o programa para más tarde. Rastrea el rendimiento y optimiza con el tiempo.",
    description_de: "Sofort posten oder für später planen. Leistung verfolgen und im Laufe der Zeit optimieren.",
    color: "border-purple-500 text-purple-600"
  }
]

export default function HowItWorks() {
  const { language, t } = useLanguage()

  const getStepTitle = (step) => {
    switch(language) {
      case 'tr': return step.title_tr
      case 'es': return step.title_es
      case 'de': return step.title_de
      default: return step.title_en
    }
  }

  const getStepDescription = (step) => {
    switch(language) {
      case 'tr': return step.description_tr
      case 'es': return step.description_es
      case 'de': return step.description_de
      default: return step.description_en
    }
  }

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.howItWorksTitle1}
            <span className="block gradient-text">{t.howItWorksTitle2}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.howItWorksSubtitle}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-green-500 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                <div className={`bg-white rounded-2xl p-8 border-2 ${item.color} shadow-soft relative z-10 card-hover`}>
                  <div className="flex items-start mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${item.color} flex items-center justify-center mr-4`}>
                      <span className="text-2xl font-bold">{item.step}</span>
                    </div>
                    <div className={`p-3 rounded-lg ${item.color.replace('border', 'bg').replace('text', 'bg')} bg-opacity-10`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{getStepTitle(item)}</h3>
                  <p className="text-gray-600">{getStepDescription(item)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-6">
            {language === 'tr' ? 'Sosyal Medyanızı Dönüştürmeye Hazır mısınız?' :
             language === 'es' ? '¿Listo para Transformar tus Redes Sociales?' :
             language === 'de' ? 'Bereit, deine Social Media zu Transformieren?' :
             'Ready to Transform Your Social Media?'}
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {language === 'tr' ? 'PostFactory AI ile haftalarca saat kazanan binlerce pazarlamacı, içerik üreticisi ve işletmeye katılın.' :
             language === 'es' ? 'Únete a miles de marketers, creadores y empresas que ahorran horas cada semana con PostFactory AI.' :
             language === 'de' ? 'Schließe dich Tausenden von Marketern, Creators und Unternehmen an, die mit PostFactory AI wöchentlich Stunden sparen.' :
             'Join thousands of marketers, creators, and businesses who save hours every week with PostFactory AI.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.gle/YOUR_FORM_LINK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary px-8"
            >
              {t.getStarted}
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-50 transition-all"
            >
              {language === 'tr' ? 'Demo Talep Edin' :
               language === 'es' ? 'Solicitar Demo' :
               language === 'de' ? 'Demo Anfordern' :
               'Book a Demo'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
