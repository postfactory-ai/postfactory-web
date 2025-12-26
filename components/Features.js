import { Image, Zap, Brain, BarChart, Shield, Users } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const features = [
  {
    icon: <Image className="h-8 w-8" />,
    title_en: "AI Image Generation",
    title_tr: "AI Görsel Üretimi",
    title_es: "Generación de Imágenes con IA",
    title_de: "KI-Bildgenerierung",
    description_en: "Create unique, brand-aligned images for your posts using AI. No design skills needed.",
    description_tr: "AI kullanarak benzersiz, markanıza uyumlu görseller oluşturun. Tasarım becerisi gerekmez.",
    description_es: "Crea imágenes únicas y alineadas con tu marca para tus publicaciones usando IA. Sin necesidad de habilidades de diseño.",
    description_de: "Erstelle einzigartige, markenkonforme Bilder für deine Beiträge mit KI. Keine Designkenntnisse erforderlich.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title_en: "Smart Caption Writing",
    title_tr: "Akıllı Başlık Yazımı",
    title_es: "Escritura Inteligente de Subtítulos",
    title_de: "Intelligente Beschreibungserstellung",
    description_en: "GPT-4 powered captions that match your brand voice and engage your audience.",
    description_tr: "Marka sesinize uyan ve kitlenizi etkileyen GPT-4 destekli başlıklar.",
    description_es: "Subtítulos impulsados por GPT-4 que coinciden con la voz de tu marca y atraen a tu audiencia.",
    description_de: "GPT-4-gestützte Beschreibungen, die zu Ihrer Markenstimme passen und Ihr Publikum ansprechen.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title_en: "Hashtag Optimization",
    title_tr: "Hashtag Optimizasyonu",
    title_es: "Optimización de Hashtags",
    title_de: "Hashtag-Optimierung",
    description_en: "Get trending and relevant hashtags to maximize your post's reach and visibility.",
    description_tr: "Gönderinizin erişimini ve görünürlüğünü maksimize etmek için trend ve ilgili hashtag'ler alın.",
    description_es: "Obtén hashtags tendencia y relevantes para maximizar el alcance y la visibilidad de tu publicación.",
    description_de: "Erhalte trendige und relevante Hashtags, um die Reichweite und Sichtbarkeit deines Beitrags zu maximieren.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title_en: "Performance Analytics",
    title_tr: "Performans Analitiği",
    title_es: "Análisis de Rendimiento",
    title_de: "Leistungsanalytik",
    description_en: "Track which posts perform best and get AI-powered suggestions for improvement.",
    description_tr: "Hangi gönderilerin en iyi performans gösterdiğini takip edin ve AI destekli iyileştirme önerileri alın.",
    description_es: "Rastrea qué publicaciones funcionan mejor y obtén sugerencias de mejora impulsadas por IA.",
    description_de: "Verfolge, welche Beiträge am besten abschneiden, und erhalte KI-gestützte Verbesserungsvorschläge.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title_en: "Brand Consistency",
    title_tr: "Marka Tutarlılığı",
    title_es: "Consistencia de Marca",
    title_de: "Markenkonsistenz",
    description_en: "Maintain consistent branding across all your social media platforms automatically.",
    description_tr: "Tüm sosyal medya platformlarınızda otomatik olarak tutarlı markalaşmayı koruyun.",
    description_es: "Mantén una marca consistente en todas tus plataformas de redes sociales automáticamente.",
    description_de: "Automatisch konsistentes Branding über all deine Social-Media-Plattformen hinweg beibehalten.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title_en: "Team Collaboration",
    title_tr: "Ekip İşbirliği",
    title_es: "Colaboración en Equipo",
    title_de: "Teamzusammenarbeit",
    description_en: "Work with your team, assign roles, and streamline your content creation workflow.",
    description_tr: "Ekibinizle çalışın, roller atayın ve içerik oluşturma iş akışınızı kolaylaştırın.",
    description_es: "Trabaja con tu equipo, asigna roles y agiliza tu flujo de trabajo de creación de contenido.",
    description_de: "Arbeite mit deinem Team, weise Rollen zu und optimiere deinen Content-Erstellungs-Workflow.",
    color: "from-yellow-500 to-amber-500"
  }
]

export default function Features() {
  const { language, t } = useLanguage()

  const getFeatureTitle = (feature) => {
    switch(language) {
      case 'tr': return feature.title_tr
      case 'es': return feature.title_es
      case 'de': return feature.title_de
      default: return feature.title_en
    }
  }

  const getFeatureDescription = (feature) => {
    switch(language) {
      case 'tr': return feature.description_tr
      case 'es': return feature.description_es
      case 'de': return feature.description_de
      default: return feature.description_en
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.featuresTitle1}
            <span className="block gradient-text">{t.featuresTitle2}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-soft card-hover border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{getFeatureTitle(feature)}</h3>
              <p className="text-gray-600">{getFeatureDescription(feature)}</p>
            </div>
          ))}
        </div>

        {/* Demo section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">
              {language === 'tr' ? 'Nasıl Çalıştığını Görün' : 
               language === 'es' ? 'Véalo en Acción' :
               language === 'de' ? 'In Aktion Sehen' : 
               'See It in Action'}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {language === 'tr' ? 'PostFactory AI\'nın basit bir fikri 60 saniyede nasıl tam bir sosyal medya gönderisine dönüştürdüğünü izleyin.' :
               language === 'es' ? 'Observa cómo PostFactory AI transforma una simple idea en una publicación completa de redes sociales en menos de 60 segundos.' :
               language === 'de' ? 'Sehen Sie, wie PostFactory AI eine einfache Idee in weniger als 60 Sekunden in einen vollständigen Social-Media-Beitrag verwandelt.' :
               'Watch how PostFactory AI transforms a simple idea into a complete social media post in under 60 seconds.'}
            </p>
            <div className="bg-black/20 rounded-2xl p-8">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-xl font-semibold">
                    {language === 'tr' ? 'Demo Videosu Yakında' :
                     language === 'es' ? 'Video Demo Próximamente' :
                     language === 'de' ? 'Demo-Video Kommt Bald' :
                     'Demo Video Coming Soon'}
                  </p>
                  <p className="opacity-80">
                    {language === 'tr' ? '(Ürün demo için yer tutucu)' :
                     language === 'es' ? '(Marcador de posición para demo del producto)' :
                     language === 'de' ? '(Platzhalter für Produktdemo)' :
                     '(Placeholder for product demo)'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
