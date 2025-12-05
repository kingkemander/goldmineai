import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoldMine AI - AI-Powered Opportunity Mining',
  description: '24/7 AI 监听 Reddit & Twitter，自动挖掘高付费意愿的 SaaS 商机',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}

