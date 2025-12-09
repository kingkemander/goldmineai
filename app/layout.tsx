import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GoldMine AI - Find Profitable SaaS Ideas & Validate Markets Instantly',
  description: 'The #1 AI Market Research tool for Indie Hackers. Stop guessing what to build. Discover high-pain, high-demand Micro-SaaS opportunities from Reddit & Twitter automatically.',
  keywords: ['SaaS Ideas', 'Market Research Tool', 'Idea Validation', 'Micro-SaaS', 'Indie Hacker Tools', 'Reddit Marketing', 'Business Opportunities'],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'GoldMine AI - Stop Guessing. Start Mining.',
    description: 'Discover your next profitable SaaS idea with AI-powered market research.',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

