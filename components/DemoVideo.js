'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { Play, Zap, Clock, CheckCircle2, Sparkles, FileText, Image, Hash, Download, RefreshCw, Settings } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DemoVideo() {
  const { language } = useLanguage()
  const [demoStep, setDemoStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState(null)

  const texts = {
    en: {
      title: 'See It in Action',
      subtitle: 'Watch how PostFactory AI transforms a simple idea into a complete social media post in under 60 seconds.',
      cta: 'Try Interactive Demo',
      step1: '1. Enter Idea',
      step2: '2. AI Generates',
      step3: '3. Customize',
      step4: '4. Export',
      feature1: '60-Second AI Magic',
      feature2: 'Smart Templates',
      feature3: 'One-Click Export',
      generateBtn: 'Generate with AI',
      customizeBtn: 'Customize Design',
      exportBtn: 'Download Now',
      ideaPlaceholder: 'Enter your idea...',
      aiThinking: 'AI is thinking...',
      generating: 'Generating content...',
      ready: 'Ready to export!'
    },
    tr: {
      title: 'Canlı Demo İzleyin',
      subtitle: 'PostFactory AI\'nın basit bir fikri 60 saniyeden kısa sürede tam bir sosyal medya gönderisine dönüştürdüğünü görün.',
      cta: 'Interaktif Demoyu Dene',
      step1: '1. Fikir Gir',
      step2: '2. AI Üretir',
      step3: '3. Özelleştir',
      step4: '4. Dışa Aktar',
      feature1: '60 Saniye AI Sihri',
      feature2: 'Akıllı Şablonlar',
      feature3: 'Tek Tıkla Aktar',
      generateBtn: 'AI ile Üret',
      customizeBtn: 'Tasarımı Özelleştir',
      exportBtn: 'Hemen İndir',
      ideaPlaceholder: 'Fikrini yaz...',
      aiThinking: 'AI düşünüyor...',
      generating: 'İçerik oluşturuluyor...',
      ready: 'Dışa aktarmaya hazır!'
    }
  }

  const t = texts[language] || texts.en

  // Demo adımları
  const demoSteps = [
    {
      title: t.step1,
      description: language === 'tr' ? 'Bir fikir veya konu girin' : 'Enter an idea or topic',
      icon: FileText,
      color: 'blue'
    },
    {
      title: t.step2,
      description: language === 'tr' ? 'AI metin, görsel ve hashtag üretir' : 'AI generates text, image & hashtags',
      icon: Sparkles,
      color: 'purple'
    },
    {
      title: t.step3,
      description: language === 'tr' ? 'Tasarımı özelleştir ve düzenle' : 'Customize design & edit',
      icon: Settings,
      color: 'pink'
    },
    {
      title: t.step4,
      description: language === 'tr' ? 'Tüm platformlar için indir' : 'Download for all platforms',
      icon: Download,
      color: 'green'
    }
  ]

  // AI üretim simülasyonu
  const simulateAIGeneration = () => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setDemoStep(1)
    
    const ideas = [
      language === 'tr' 
        ? 'Yaz ayları için sağlıklı smoothie tarifi' 
        : 'Healthy smoothie recipe for summer',
      language === 'tr' 
        ? 'Yeni başlayanlar için fitness ipuçları' 
        : 'Fitness tips for beginners',
      language === 'tr' 
        ? 'Evde ofis düzeni nasıl kurulur?' 
        : 'How to set up a home office'
    ]
    
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)]
    
    // Adım 1: Fikir girildi
    setTimeout(() => {
      setGeneratedContent({
        idea: randomIdea,
        text: '',
        hashtags: [],
        image: null
      })
      setDemoStep(2)
      
      // Adım 2: AI üretiyor
      setTimeout(() => {
        setGeneratedContent(prev => ({
          ...prev,
          text: language === 'tr' 
            ? `🍹 ${randomIdea}\n\nMalzemeler:\n• 1 muz\n• 1 bardak yaban mersini\n• 1 yemek kaşığı bal\n• 1 su bardağı badem sütü\n\nKarıştır ve keyfini çıkar! 🥤`
            : `🍹 ${randomIdea}\n\nIngredients:\n• 1 banana\n• 1 cup blueberries\n• 1 tbsp honey\n• 1 cup almond milk\n\nBlend and enjoy! 🥤`,
          hashtags: language === 'tr' 
            ? ['#sağlıklıyaşam', '#smoothie', '#tarif', '#yaz', '#fit']
            : ['#healthy', '#smoothie', '#recipe', '#summer', '#fit'],
          image: 'generated'
        }))
        setDemoStep(3)
        
        // Adım 3: Hazır
        setTimeout(() => {
          setDemoStep(4)
          setIsAnimating(false)
        }, 1500)
      }, 2000)
    }, 1000)
  }

  // Reset demo
  const resetDemo = () => {
    setDemoStep(0)
    setGeneratedContent(null)
    setIsAnimating(false)
  }

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mb-4">
            <Zap className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-600">
              {language === 'tr' ? 'INTERAKTİF DEMO' : 'INTERACTIVE DEMO'}
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
          {/* Sol taraf - Interaktif Demo */}
          <div className="relative">
            {/* Demo Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              {/* Demo Header */}
              <div className="bg-gradient-to-r from-gray-900 to-black text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium">
                    {language === 'tr' ? 'PostFactory AI Demo' : 'PostFactory AI Demo'}
                  </div>
                  <div className="h-3 w-12 bg-gray-700 rounded"></div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                {/* Input Area */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {language === 'tr' ? 'Fikrini Gir:' : 'Enter Your Idea:'}
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder={t.ideaPlaceholder}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      value={generatedContent?.idea || ''}
                      readOnly
                    />
                    <button
                      onClick={simulateAIGeneration}
                      disabled={isAnimating}
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center"
                    >
                      {isAnimating ? (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                          {t.generating}
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4 mr-2" />
                          {t.generateBtn}
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* AI Output Preview */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gradient-to-br from-gray-50 to-white">
                  {!generatedContent ? (
                    <div className="text-center py-12">
                      <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500">
                        {language === 'tr' 
                          ? '"AI ile Üret" butonuna tıkla ve sihri gör!' 
                          : 'Click "Generate with AI" to see the magic!'}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Generated Text */}
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <div className="flex items-center mb-2">
                          <FileText className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-semibold text-gray-900">
                            {language === 'tr' ? 'AI Metin' : 'AI Text'}
                          </span>
                        </div>
                        <p className="text-gray-700 whitespace-pre-line">
                          {generatedContent.text}
                        </p>
                      </div>

                      {/* Hashtags */}
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <div className="flex items-center mb-2">
                          <Hash className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="font-semibold text-gray-900">
                            {language === 'tr' ? 'Hashtag\'ler' : 'Hashtags'}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {generatedContent.hashtags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Generated Image Placeholder */}
                      <div className="p-4 bg-white rounded-xl border border-gray-200">
                        <div className="flex items-center mb-2">
                          <Image className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-semibold text-gray-900">
                            {language === 'tr' ? 'AI Görsel' : 'AI Image'}
                          </span>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Sparkles className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                            <p className="text-gray-600">
                              {language === 'tr' 
                                ? 'AI tarafından oluşturulmuş görsel' 
                                : 'Image generated by AI'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Demo Controls */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={resetDemo}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    {language === 'tr' ? 'Sıfırla' : 'Reset'}
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    {demoStep >= 3 && (
                      <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center">
                        <Settings className="h-4 w-4 mr-2" />
                        {t.customizeBtn}
                      </button>
                    )}
                    {demoStep >= 4 && (
                      <button className="px-6 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center">
                        <Download className="h-4 w-4 mr-2" />
                        {t.exportBtn}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-white rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-purple-600">60s</div>
                <div className="text-sm text-gray-600">{language === 'tr' ? 'Ortalama Süre' : 'Avg Time'}</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">{language === 'tr' ? 'İçerik Türü' : 'Content Types'}</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-gray-200">
                <div className="text-2xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600">{language === 'tr' ? 'Platform' : 'Platforms'}</div>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Süreç */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {language === 'tr' 
                ? 'AI İle İçerik Üretim Süreci' 
                : 'AI Content Generation Process'}
            </h3>

            {/* Süreç Adımları */}
            <div className="space-y-6">
              {demoSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = demoStep >= index + 1
                const isCurrent = demoStep === index + 1
                
                return (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? isCurrent
                          ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg'
                          : 'bg-gradient-to-r from-gray-50 to-white border border-gray-200'
                        : 'bg-gray-50/50 border border-gray-200'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                        isActive
                          ? step.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                            step.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                            step.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                            'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {isActive ? (
                          <Icon className="h-6 w-6" />
                        ) : (
                          <div className="font-bold text-lg text-gray-400">{index + 1}</div>
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-bold text-lg mb-1 ${
                        isActive ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {step.title}
                        {isCurrent && (
                          <span className="ml-2 px-2 py-0.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full animate-pulse">
                            {language === 'tr' ? 'Şu an' : 'Live'}
                          </span>
                        )}
                      </h4>
                      <p className={isActive ? 'text-gray-600' : 'text-gray-400'}>
                        {step.description}
                      </p>
                    </div>
                    {isActive && (
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Özellik Kartları */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{t.feature1}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {language === 'tr' ? 'Işık hızında' : 'Lightning fast'}
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <Sparkles className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{t.feature2}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {language === 'tr' ? 'Akıllı tasarım' : 'Smart design'}
                </div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <Download className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">{t.feature3}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {language === 'tr' ? 'Hemen kullan' : 'Ready to use'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
