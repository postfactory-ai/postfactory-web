'use client'

import { Star, Quote } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const testimonials = [
  {
    name: "Sarah Johnson",
    role_en: "Social Media Manager @TechStartup",
    role_tr: "Sosyal Medya Yöneticisi @TechStartup",
    role_es: "Gerente de Redes Sociales @TechStartup",
    role_de: "Social Media Manager @TechStartup",
    content_en: "PostFactory AI cut our content creation time by 70%. What used to take 3 hours now takes 30 minutes.",
    content_tr: "PostFactory AI içerik oluşturma süremizi %70 kısalttı. Eskiden 3 saat süren iş şimdi 30 dakika sürüyor.",
    content_es: "PostFactory AI redujo nuestro tiempo de creación de contenido en un 70%. Lo que solía tomar 3 horas ahora toma 30 minutos.",
    content_de: "PostFactory AI hat unsere Content-Erstellungszeit um 70% reduziert. Was früher 3 Stunden dauerte, dauert jetzt 30 Minuten.",
    avatar: "SJ",
    rating: 5,
    color: "bg-gradient-to-r from-primary-100 to-primary-200"
  },
  {
    name: "Michael Chen",
    role_en: "E-commerce Founder",
    role_tr: "E-ticaret Kurucusu",
    role_es: "Fundador de E-commerce",
    role_de: "E-Commerce-Gründer",
    content_en: "The AI-generated images are stunning. Our Instagram engagement increased by 300% in the first month.",
    content_tr: "AI tarafından oluşturulan görseller muhteşem. Instagram etkileşimimiz ilk ay %300 arttı.",
    content_es: "Las imágenes generadas por IA son impresionantes. Nuestro engagement en Instagram aumentó un 300% en el primer mes.",
    content_de: "Die KI-generierten Bilder sind atemberaubend. Unser Instagram-Engagement stieg im ersten Monat um 300%.",
    avatar: "MC",
    rating: 5,
    color: "bg-gradient-to-r from-secondary-100 to-pink-100"
  },
  {
    name: "Alex Rodriguez",
    role_en: "Digital Marketing Agency Director",
    role_tr: "Dijital Pazarlama Ajansı Direktörü",
    role_es: "Director de Agencia de Marketing Digital",
    role_de: "Direktor Digital Marketing Agentur",
    content_en: "We manage 20+ client accounts. PostFactory AI has become our secret weapon for scaling content production.",
    content_tr: "20+ müşteri hesabı yönetiyoruz. PostFactory AI, içerik üretimimizi ölçeklendirmek için gizli silahımız oldu.",
    content_es: "Gestionamos más de 20 cuentas de clientes. PostFactory AI se ha convertido en nuestra arma secreta para escalar la producción de contenido.",
    content_de: "Wir verwalten 20+ Kundenkonten. PostFactory AI ist zu unserer Geheimwaffe für die Skalierung der Content-Produktion geworden.",
    avatar: "AR",
    rating: 5,
    color: "bg-gradient-to-r from-green-100 to-emerald-100"
  },
  {
    name: "Emma Wilson",
    role_en: "Content Creator",
    role_tr: "İçerik Üreticisi",
    role_es: "Creadora de Contenido",
    role_de: "Content Creator",
    content_en: "As a solo creator, this tool is a game-changer. I can now focus on strategy instead of execution.",
    content_tr: "Tek başıma içerik üreten biri olarak, bu araç bir oyun değiştirici. Artık uygulama yerine stratejiye odaklanabiliyorum.",
    content_es: "Como creadora independiente, esta herramienta cambia las reglas del juego. Ahora puedo centrarme en la estrategia en lugar de la ejecución.",
    content_de: "Als Solo-Creator ist dieses Tool ein Game-Changer. Ich kann mich jetzt auf die Strategie konzentrieren, anstatt auf die Ausführung.",
    avatar: "EW",
    rating: 5,
    color: "bg-gradient-to-r from-purple-100 to-violet-100"
  }
]

export default function Testimonials() {
  const { language, t } = useLanguage()

  const getTestimonialRole = (testimonial) => {
    switch(language) {
      case 'tr': return testimonial.role_tr
      case 'es': return testimonial.role_es
      case 'de': return testimonial.role_de
      default: return testimonial.role_en
    }
  }

  const getTestimonialContent = (testimonial) => {
    switch(language) {
      case 'tr': return testimonial.content_tr
      case 'es': return testimonial.content_es
      case 'de': return testimonial.content_de
      default: return testimonial.content_en
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4" />
            <span className="font-semibold">
              {language === 'tr' ? '500+ İçerik Üreticisi ve İşletme Tarafından Güvenilen' :
               language === 'es' ? 'Confiado por 500+ Creadores y Negocios' :
               language === 'de' ? 'Vertraut von 500+ Creators und Unternehmen' :
               'Trusted by 500+ Creators & Businesses'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.testimonialsTitle1}
            <span className="block gradient-text">{t.testimonialsTitle2}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.testimonialsSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 shadow-soft card-hover"
            >
              <Quote className="h-10 w-10 text-primary-300 mb-6" />
              
              <p className="text-lg text-gray-700 mb-6 italic">"{getTestimonialContent(testimonial)}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`${testimonial.color} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                    <span className="font-bold text-gray-800">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{getTestimonialRole(testimonial)}</p>
                  </div>
                </div>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-primary-100">
                {language === 'tr' ? 'Oluşturulan Gönderi' :
                 language === 'es' ? 'Publicaciones Generadas' :
                 language === 'de' ? 'Generierte Beiträge' :
                 'Posts Generated'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-primary-100">
                {language === 'tr' ? 'Aktif Kullanıcı' :
                 language === 'es' ? 'Usuarios Activos' :
                 language === 'de' ? 'Aktive Nutzer' :
                 'Active Users'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-primary-100">
                {language === 'tr' ? 'Memnuniyet Oranı' :
                 language === 'es' ? 'Tasa de Satisfacción' :
                 language === 'de' ? 'Zufriedenheitsrate' :
                 'Satisfaction Rate'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-primary-100">
                {language === 'tr' ? 'Ort. Puan' :
                 language === 'es' ? 'Puntuación Promedio' :
                 language === 'de' ? 'Durchschnittsbewertung' :
                 'Avg. Rating'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
