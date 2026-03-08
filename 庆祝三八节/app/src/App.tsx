import { useEffect, useState } from 'react'
import './App.css'
import { Heart, Sparkles, Gift, Flower2, Stars } from 'lucide-react'

interface Petal {
  id: number
  left: string
  delay: string
  duration: string
  emoji: string
}

function App() {
  const [petals, setPetals] = useState<Petal[]>([])
  const [showMessage, setShowMessage] = useState(false)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const messages = [
    "妈妈，您是我生命中最美的花",
    "感谢您无私的爱与付出",
    "您的笑容是我最大的幸福",
    "愿您永远健康美丽",
    "三八妇女节快乐！"
  ]

  useEffect(() => {
    // 生成飘落的花瓣
    const newPetals: Petal[] = []
    const petalEmojis = ['🌸', '🌺', '🌷', '💮', '🏵️', '💕', '✨']
    for (let i = 0; i < 30; i++) {
      newPetals.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${8 + Math.random() * 10}s`,
        emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)]
      })
    }
    setPetals(newPetals)

    // 显示第一条消息
    setTimeout(() => setShowMessage(true), 500)

    // 轮播消息
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
    }, 4000)

    return () => clearInterval(messageInterval)
  }, [])

  const scrollToLetter = () => {
    document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* 飘落的花瓣 */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          {petal.emoji}
        </div>
      ))}

      {/* 主内容区 */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            {/* 装饰星星 */}
            <div className="flex justify-center gap-4 mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Stars className="w-8 h-8 text-pink-400 animate-pulse" />
              <Sparkles className="w-10 h-10 text-pink-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
              <Stars className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>

            {/* 主标题 */}
            <h1 
              className="text-5xl md:text-7xl font-bold mb-4 fade-in-up shimmer-text text-shadow"
              style={{ animationDelay: '0.4s' }}
            >
              亲爱的妈妈
            </h1>

            {/* 副标题 */}
            <div 
              className="flex items-center justify-center gap-3 mb-8 fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Heart className="w-6 h-6 text-rose-500 heart-beat" fill="#f43f5e" />
              <span className="text-2xl md:text-3xl text-pink-700 font-medium">
                三八妇女节快乐
              </span>
              <Heart className="w-6 h-6 text-rose-500 heart-beat" fill="#f43f5e" style={{ animationDelay: '0.2s' }} />
            </div>

            {/* 轮播消息 */}
            <div 
              className="h-16 mb-10 fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              {showMessage && (
                <p className="text-xl md:text-2xl text-pink-600 font-light transition-all duration-1000">
                  {messages[currentMessageIndex]}
                </p>
              )}
            </div>

            {/* 主花朵图片 */}
            <div 
              className="relative mb-10 fade-in-up flower-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="relative inline-block">
                <img 
                  src="/hero-flower.jpg" 
                  alt="康乃馨"
                  className="w-72 h-48 md:w-96 md:h-56 object-cover rounded-3xl shadow-2xl glow-effect"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                  <Heart className="w-8 h-8 text-rose-500 heart-beat" fill="#f43f5e" />
                </div>
              </div>
            </div>

            {/* 按钮 */}
            <button
              onClick={scrollToLetter}
              className="fade-in-up px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-500 text-white text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
              style={{ animationDelay: '1.2s' }}
            >
              <Gift className="w-5 h-5" />
              打开我的祝福
              <Sparkles className="w-5 h-5" />
            </button>
          </div>

          {/* 向下滚动提示 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-2 border-pink-400 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* 感恩卡片区域 */}
        <section id="love-letter" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-3xl w-full">
            {/* 信封样式卡片 */}
            <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl hover-lift relative overflow-hidden">
              {/* 装饰背景 */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200 to-rose-200 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

              {/* 卡片内容 */}
              <div className="relative z-10">
                {/* 标题 */}
                <div className="text-center mb-8">
                  <Flower2 className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-2">
                    致我最爱的妈妈
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full"></div>
                </div>

                {/* 信件内容 */}
                <div className="space-y-6 text-lg text-pink-800 leading-relaxed">
                  <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-pink-600 first-letter:float-left first-letter:mr-2">
                    亲爱的妈妈，在这个特别的日子里，我想对您说声：谢谢您！
                  </p>
                  <p>
                    感谢您用无尽的爱滋养我成长，感谢您在我跌倒时给予我温暖的怀抱，感谢您在我迷茫时为我指引方向。
                  </p>
                  <p>
                    您的付出如春雨般细腻无声，您的关怀如阳光般温暖人心。您是我生命中最美的风景，是我心中永远的女神。
                  </p>
                  <p>
                    愿岁月温柔待您，愿健康与幸福永远伴随您左右。妈妈，我爱您！
                  </p>
                </div>

                {/* 签名 */}
                <div className="text-right mt-10">
                  <p className="text-pink-600 font-medium">爱您的孩子</p>
                  <p className="text-pink-500 text-sm mt-1">2026年3月8日</p>
                </div>

                {/* 装饰花朵 */}
                <div className="flex justify-center gap-4 mt-8">
                  <span className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>🌸</span>
                  <span className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌺</span>
                  <span className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌷</span>
                  <span className="text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>💐</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 祝福卡片网格 */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">
              送给您的祝福
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '💕', title: '健康快乐', desc: '愿您身体健康，笑容常在' },
                { icon: '✨', title: '青春永驻', desc: '愿您永远年轻美丽' },
                { icon: '🌈', title: '幸福美满', desc: '愿幸福时刻围绕着您' },
                { icon: '🌟', title: '心想事成', desc: '愿您的梦想都能实现' },
                { icon: '🎀', title: '平安喜乐', desc: '愿每一天都充满欢乐' },
                { icon: '💖', title: '爱意满满', desc: '愿您被世界温柔以待' },
              ].map((card, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 text-center hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-pink-700 mb-2">{card.title}</h3>
                  <p className="text-pink-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 底部花朵展示 */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src="/carnations.jpg" 
              alt="康乃馨花束"
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl mb-8"
            />
            <div className="flex items-center justify-center gap-2 text-2xl text-pink-700 font-medium">
              <Heart className="w-6 h-6 text-rose-500 heart-beat" fill="#f43f5e" />
              <span>妈妈，您辛苦了</span>
              <Heart className="w-6 h-6 text-rose-500 heart-beat" fill="#f43f5e" />
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="py-8 text-center text-pink-600">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            祝您三八妇女节快乐
            <Sparkles className="w-4 h-4" />
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
