'use client'

import { useState, useEffect } from 'react'

export default function SpotlightEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 仅在桌面端启用
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-opacity duration-300"
      style={{
        zIndex: 1,
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.08), transparent 80%)`
      }}
    />
  )
}

