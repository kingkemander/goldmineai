import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
      <head>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P483DNW2');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N1MK19PS4R"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N1MK19PS4R');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P483DNW2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}</body>
    </html>
  )
}

