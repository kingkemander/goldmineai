'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Pickaxe, 
  Radar, 
  TrendingUp, 
  Zap, 
  Target, 
  Shield,
  X,
  Loader2,
  Check,
  ChevronDown
} from 'lucide-react'
import ParticlesBackground from '@/components/ParticlesBackground'
import SpotlightEffect from '@/components/SpotlightEffect'
import GridBackground from '@/components/GridBackground'
import GoldMineNavbar from '@/components/GoldMineNavbar'

export default function GoldMineLanding() {
  const [showModal, setShowModal] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handlePlanClick = (plan: string, buttonId: string) => {
    console.log(`GTM Event: button_click, Button ID: ${buttonId}, Plan: ${plan}`)
    setSelectedPlan(plan)
    setShowModal(true)
    setSuccess(false)
  }

  const handlePayment = async () => {
    console.log(`GTM Event: conversion_purchase_attempt, Plan: ${selectedPlan}, Email: ${email}`)
    setLoading(true)
    
    // 模拟支付处理
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setLoading(false)
    setSuccess(true)
    
    console.log('🎉 Conversion Simulation Complete')
  }

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$9.9',
      period: '/month',
      description: 'Perfect for testing the waters',
      features: [
        '10 AI-curated opportunities/day',
        'Basic pain score analysis',
        'Email digest',
        '7-day history'
      ],
      buttonId: 'btn-plan-monthly',
      popular: false
    },
    {
      id: 'yearly',
      name: 'Pro (Yearly)',
      price: '$99',
      period: '/year',
      description: 'Best value for serious builders',
      features: [
        'Unlimited opportunities',
        'Advanced competitor analysis',
        'Real-time alerts',
        'Custom filters & webhooks',
        'Priority support'
      ],
      buttonId: 'btn-plan-yearly',
      popular: true,
      badge: 'Best Value'
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: '$199',
      period: 'one-time',
      description: 'Lock in forever access',
      features: [
        'Everything in Pro',
        'Lifetime updates',
        'API access',
        'White-label reports',
        'Early access to new features'
      ],
      buttonId: 'btn-plan-lifetime',
      popular: false
    }
  ]

  const faqs = [
    {
      q: '数据从哪里来？',
      a: '我们的 AI 每天抓取 Reddit (200+ subreddits) 和 Twitter 上的公开讨论，使用 NLP 识别真实的用户痛点和未被满足的需求。'
    },
    {
      q: '和手动刷 Reddit 有什么区别？',
      a: '我们过滤掉 99% 的噪音（抱怨、spam、低质量内容），只显示"有人愿意付费解决"的真实商机。每个机会都配备痛点评分、竞品分析和市场潜力评估。'
    },
    {
      q: '可以退款吗？',
      a: '支持 14 天无理由退款。如果你觉得没有发现任何有价值的商机，全额退款。'
    },
    {
      q: '适合非技术人员吗？',
      a: '绝对适合！我们的报告用简单易懂的语言呈现，无需技术背景也能理解市场机会。'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background Effects - Lowest Layer */}
      <GridBackground />
      <ParticlesBackground />
      <SpotlightEffect />
      
      {/* Navigation Bar */}
      <GoldMineNavbar />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-slate-950 to-slate-950" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <Pickaxe className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-300">AI-Powered Opportunity Mining</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
              Stop Guessing.
              <br />
              Start Mining.
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
              24/7 AI 监听 Reddit & Twitter，自动挖掘高付费意愿的 SaaS 商机
            </p>

            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              告别盲目开发。在写第一行代码前，用数据验证你的 Micro-SaaS 想法。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                id="hero-cta-primary"
                onClick={() => {
                  console.log('GTM Event: button_click, Button ID: hero-cta-primary')
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold rounded-xl hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/50 hover:shadow-amber-500/80 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Start Free Trial
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>

              <button
                id="hero-cta-secondary"
                onClick={() => {
                  console.log('GTM Event: button_click, Button ID: hero-cta-secondary')
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 hover:border-amber-500/50 transition-all duration-300"
              >
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div>
              <div className="text-3xl font-bold text-amber-400">200+</div>
              <div className="text-sm text-slate-400">Subreddits Monitored</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">10K+</div>
              <div className="text-sm text-slate-400">Signals Analyzed Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400">99%</div>
              <div className="text-sm text-slate-400">Noise Filtered</div>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Social Proof */}
        <section id="social-proof" className="py-16 border-y border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-slate-500 mb-8">Trusted by indie builders featured on</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold">Product Hunt</div>
            <div className="text-2xl font-bold">Indie Hackers</div>
            <div className="text-2xl font-bold">Hacker News</div>
            <div className="text-2xl font-bold">Twitter</div>
          </div>
        </div>
      </section>

        {/* Features Grid */}
        <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Developers Love Us
            </h2>
            <p className="text-xl text-slate-400">
              从噪音中提取黄金信号
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Radar,
                title: 'AI Signal Filtering',
                description: '告别无休止刷帖。AI 自动过滤 99% 无效吐槽，只呈现真实"求购"信号。',
                gradient: 'from-amber-500 to-yellow-600'
              },
              {
                icon: Target,
                title: 'Pain Score Analysis',
                description: '每个商机配备 1-10 分痛点强度评分，附带原始讨论链接和用户画像。',
                gradient: 'from-orange-500 to-amber-600'
              },
              {
                icon: TrendingUp,
                title: 'Real-time Heat Map',
                description: '实时热度趋势图，看到商机从萌芽到爆发的完整曲线。',
                gradient: 'from-yellow-500 to-amber-600'
              },
              {
                icon: Shield,
                title: 'Competitor透视',
                description: '自动分析现有竞品的优缺点，找到差异化切入点。',
                gradient: 'from-amber-600 to-orange-500'
              },
              {
                icon: Zap,
                title: 'First Mover Advantage',
                description: '每日 Top 3 高潜商机邮件推送，快人一步发现下一个爆款。',
                gradient: 'from-yellow-600 to-amber-500'
              },
              {
                icon: Pickaxe,
                title: 'Data-Backed Validation',
                description: '拒绝盲目开发。用数据驱动的市场洞察验证你的想法。',
                gradient: 'from-amber-500 to-yellow-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-400">
              选择最适合你的方案，随时可以升级
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-amber-500/10 to-slate-900 border-amber-500 scale-105 shadow-2xl shadow-amber-500/20'
                    : 'bg-slate-900/50 border-slate-800 hover:border-amber-500/30'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 text-sm font-bold rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-5xl font-bold text-amber-400">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-slate-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  id={plan.buttonId}
                  onClick={() => handlePlanClick(plan.name, plan.buttonId)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 hover:from-amber-400 hover:to-yellow-500 shadow-lg shadow-amber-500/50'
                      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  id={`faq-item-${index}`}
                  onClick={() => {
                    console.log(`GTM Event: faq_click, FAQ Index: ${index}`)
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-slate-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Pickaxe className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-bold">GoldMine AI</span>
          </div>
          <p className="text-slate-500 mb-4">
            AI-Powered Opportunity Mining for Indie Builders
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-600">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      </main>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => !success && setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 max-w-md w-full relative"
            >
              {!success ? (
                <>
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="text-center mb-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl mb-4">
                      <Pickaxe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Setup your GoldMine account</h3>
                    <p className="text-slate-400">Selected: <span className="text-amber-400 font-semibold">{selectedPlan}</span></p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      onClick={handlePayment}
                      disabled={loading || !email}
                      className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold rounded-xl hover:from-amber-400 hover:to-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-amber-500/50 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Proceed to Payment'
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      This is a demo. No real payment will be processed.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="inline-flex p-4 bg-green-500/20 rounded-full mb-4"
                  >
                    <Check className="w-12 h-12 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">🎉 Success!</h3>
                  <p className="text-slate-400 mb-6">
                    Thanks! You've been added to the priority waitlist. We are preparing your data.
                  </p>
                  <button
                    onClick={() => {
                      setShowModal(false)
                      setSuccess(false)
                      setEmail('')
                    }}
                    className="px-6 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

