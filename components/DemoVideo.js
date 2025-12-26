'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Play, Zap, Clock, CheckCircle2, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function DemoVideo() {
  const { language } = useLanguage()
  const [isPlaying, setIsPlaying] = useState(false)

  const texts = {
    en: {
      title: 'See It in Action',
      subtitle: 'Watch how PostFactory AI transforms a simple idea into a complete social media post in under 60 seconds.',
      cta: 'Watch Demo Video',
      step1: '1. Enter your idea',
      step2: '2. AI generates content',
      step3: '3. Customize & edit',
      step4: '4. Export & share',
      feature1: '60-second generation',
      feature2: 'AI-powered editing',
      feature3: 'Multi-platform ready',
      stats1: 'Under 60 seconds',
      stats2: '5+ content types',
      stats3: '10+ platforms'
    },
    tr: {
      title: 'Canlı Demo İzleyin',
      subtitle: 'PostFactory AI\'nın basit bir fikri 60 saniyeden kısa sürede nasıl tam bir sosyal medya gönderisine dönüştürdüğünü görün.',
      cta: 'Demo Videosunu İzle',
      step1: '1. Fikrini gir',
      step2: '2. AI içerik oluşturur',
      step3: '3. Özelleştir & düzenle',
      step4: '4. Dışa aktar & paylaş',
      feature1: '60 saniyelik üretim',
      feature2: 'AI destekli düzenleme',
      feature3: 'Çoklu platform hazır',
      stats1: '60 saniyeden az',
      stats2: '5+ içerik türü',
      stats3: '10+ platform'
    },
    es: {
      title: 'Véalo en Acción',
      subtitle: 'Vea cómo PostFactory AI transforma una idea simple en una publicación completa de redes sociales en menos de 60 segundos.',
      cta: 'Ver Video Demo',
      step1: '1. Ingresa tu idea',
      step2: '2. IA genera contenido',
      step3: '3. Personaliza & edita',
      step4: '4. Exporta & comparte',
      feature1: 'Generación 60 segundos',
      feature2: 'Edición con IA',
      feature3: 'Listo múltiples plataformas',
      stats1: 'Menos de 60 segundos',
      stats2: '5+ tipos contenido',
      stats3: '10+ plataformas'
    },
    de: {
      title: 'Live Demo Ansehen',
      subtitle: 'Sehen Sie, wie PostFactory AI eine einfache Idee in unter 60 Sekunden in einen kompletten Social-Media-Beitrag verwandelt.',
      cta: 'Demo Video Ansehen',
      step1: '1. Idee eingeben',
      step2: '2. KI generiert Inhalt',
      step3: '3. Anpassen & bearbeiten',
      step4: '4. Exportieren & teilen',
      feature1: '60-Sekunden-Generierung',
      feature2: 'KI-gestütztes Editing',
      feature3: 'Multi-Plattform bereit',
      stats1: 'Unter 60 Sekunden',
      stats2: '5+ Inhaltstypen',
      stats3: '10+ Plattformen'
    }
  }

  const t = texts[language] || texts.en

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-4">
            <Zap className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-600">
              {language === 'tr' ? 'CANLI DEMO' : 'LIVE DEMO'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Sol taraf - Video Player */}
          <div className="relative">
            {/* Video Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black">
              {/* Video Placeholder - Gerçek video ekleyince buraya */}
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                {!isPlaying ? (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group relative"
                    aria-label="Play video"
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <div className="relative h-24 w-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-12 w-12 text-white ml-1" fill="white" />
                    </div>
                  </button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="text-2xl font-bold mb-4">🎬 Demo Video Playing</div>
                      <p className="text-gray-300">
                        {language === 'tr' 
                          ? 'Buraya gerçek demo videonuzu ekleyin' 
                          : 'Add your actual demo video here'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Overlay Stats */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-green-400 mr-2" />
                    <span className="font-bold">{t.stats1}</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="font-bold">{t.stats2}</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="font-bold">{t.stats3}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video İndirme/Demo Butonu */}
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white font-semibold rounded-full hover:scale-105 transition-transform"
              >
                <Play className="h-4 w-4 mr-2" />
                {t.cta}
              </a>
            </div>
          </div>

          {/* Sağ taraf - Süreç Adımları */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {language === 'tr' 
                ? '4 Adımda Mükemmel İçerik' 
                : 'Perfect Content in 4 Steps'}
            </h3>

            {/* Süreç Adımları */}
            <div className="space-y-6">
              {[
                { step: t.step1, desc: language === 'tr' ? 'Bir fikir, anahtar kelime veya konu girin' : 'Enter an idea, keyword, or topic' },
                { step: t.step2, desc: language === 'tr' ? 'AI metin, görsel ve hashtag oluşturur' : 'AI generates text, image, and hashtags' },
                { step: t.step3, desc: language === 'tr' ? 'Renkler, yazı tipleri, filtrelerle özelleştir' : 'Customize with colors, fonts, filters' },
                { step: t.step4, desc: language === 'tr' ? 'Tüm platformlar için optimize edilmiş çıktı' : 'Optimized output for all platforms' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                      index === 0 ? 'bg-blue-100 text-blue-600' :
                      index === 1 ? 'bg-purple-100 text-purple-600' :
                      index === 2 ? 'bg-pink-100 text-pink-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      <div className="font-bold text-lg">{index + 1}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.step}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Özellikler */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-center">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{t.feature1}</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-center">
                <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{t.feature2}</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-center">
                <CheckCircle2 className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{t.feature3}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Embed Instructions */}
        <div className="mt-16 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <Zap className="h-5 w-5 text-blue-600 mr-2" />
            {language === 'tr' ? 'Video Nasıl Eklenir?' : 'How to Add Your Video?'}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">1. YouTube/Vimeo</div>
              <code className="text-xs text-gray-600">
                {`<iframe src="https://youtube.com/embed/VIDEO_ID" />`}
              </code>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">2. Loom/Demo</div>
              <code className="text-xs text-gray-600">
                {`<video src="/demo-video.mp4" controls />`}
              </code>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">3. Screen Recording</div>
              <code className="text-xs text-gray-600">
                OBS, QuickTime, Screencast
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
