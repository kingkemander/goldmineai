'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Pickaxe, Menu, X } from 'lucide-react'

export default function GoldMineNavbar() {
  const externalUrl = 'https://goldmineai.digworldai.com/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 监听滚动，增强玻璃拟态效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 平滑滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  // GTM 追踪
  const trackNavClick = (buttonId: string, action: string) => {
    console.log(`GTM Event: nav_click, Button ID: ${buttonId}, Action: ${action}`)
  }

  const navLinks = [
    { label: 'How it Works', target: 'features' },
    { label: 'Use Cases', target: 'social-proof' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'FAQ', target: 'faq' }
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-950/95 backdrop-blur-md' : 'bg-slate-950/80 backdrop-blur-sm'
        } border-b border-white/10`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Pickaxe className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-bold text-white text-lg hidden sm:block">
                GoldMine AI
              </span>
            </button>

            {/* Navigation Links - Center (Desktop Only) */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => {
                    scrollToSection(link.target)
                    trackNavClick(`nav-link-${link.target}`, 'scroll')
                  }}
                  className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Actions - Right */}
            <div className="flex items-center gap-3">
              {/* Login Button (Desktop) */}
              <button
                id="nav-login"
                onClick={() => {
                  trackNavClick('nav-login', 'login')
                  window.open(externalUrl, '_blank', 'noopener')
                }}
                className="hidden sm:block text-slate-300 hover:text-white transition-colors text-sm font-medium px-4 py-2"
              >
                Login
              </button>

              {/* Primary CTA */}
              <button
                id="nav-cta-primary"
                onClick={() => {
                  trackNavClick('nav-cta-primary', 'external')
                  window.open(externalUrl, '_blank', 'noopener')
                }}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-semibold px-4 py-2 rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 text-sm shadow-lg shadow-amber-500/50 hover:shadow-amber-500/80"
              >
                Start Mining
              </button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: '64px' }} // Below navbar
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col p-8">
              {/* Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.target}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      scrollToSection(link.target)
                      trackNavClick(`nav-mobile-${link.target}`, 'scroll')
                    }}
                    className="block text-2xl font-semibold text-white hover:text-amber-400 transition-colors text-left w-full"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto space-y-4"
              >
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    trackNavClick('nav-mobile-login', 'login')
                    window.open(externalUrl, '_blank', 'noopener')
                  }}
                  className="w-full py-3 text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    trackNavClick('nav-mobile-cta', 'external')
                    window.open(externalUrl, '_blank', 'noopener')
                  }}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 font-bold rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg shadow-amber-500/50"
                >
                  Start Mining
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

