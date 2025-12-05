import Link from 'next/link'
import { Pickaxe } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - GoldMine AI',
  description: 'GoldMine AI Terms of Service - Legal terms and conditions for using our platform',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Pickaxe className="w-6 h-6 text-amber-400" />
            <span className="text-xl font-bold">GoldMine AI</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-slate-400 mb-8">Last updated: December 5, 2025</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using GoldMine AI ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service. We reserve the right to modify these Terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
            <p>
              GoldMine AI is a SaaS idea validation platform that uses artificial intelligence to analyze public discussions on social media platforms (Reddit, Twitter, Facebook, etc.) to identify market opportunities and validate business ideas. The Service provides:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>AI-powered market research and opportunity detection</li>
              <li>Pain score analysis and market insights</li>
              <li>Competitor analysis and trend tracking</li>
              <li>Email alerts and reporting features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Eligibility</h2>
            <p>
              You must be at least 18 years old to use this Service. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Account Registration</h2>
            <div className="space-y-4">
              <p>To use certain features, you must create an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
              <p className="text-amber-400 font-semibold">You may not share your account with others or create multiple accounts.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Subscription Plans and Payments</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">5.1 Pricing</h3>
                <p>We offer Monthly, Yearly, and Lifetime subscription plans. Pricing is subject to change with 30 days' notice to existing subscribers.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">5.2 Payment</h3>
                <p>All fees are in USD and must be paid in advance. We accept payment via credit card and other methods as displayed during checkout. You authorize us to charge your payment method automatically for recurring subscriptions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">5.3 Refunds</h3>
                <p>We offer a 7-day money-back guarantee for new subscribers. After this period, payments are non-refundable except as required by law or at our sole discretion.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">5.4 Cancellation</h3>
                <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No refunds will be provided for partial subscription periods.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Acceptable Use</h2>
            <p className="mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Use automated tools (bots, scrapers) to access the Service</li>
              <li>Resell, redistribute, or sublicense access to the Service</li>
              <li>Upload viruses, malware, or other malicious code</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">7.1 Our Rights</h3>
                <p>All content, features, and functionality of the Service (including but not limited to software, text, images, logos, and algorithms) are owned by GoldMine AI and protected by copyright, trademark, and other intellectual property laws.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">7.2 Your License</h3>
                <p>We grant you a limited, non-exclusive, non-transferable license to access and use the Service for your personal or business purposes, subject to these Terms.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">7.3 Data Rights</h3>
                <p>The market insights and data provided by our Service are derived from publicly available sources. You may use this data for your own business purposes but may not resell or redistribute it without our written permission.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Data and Privacy</h2>
            <p>
              Your use of the Service is also governed by our <Link href="/privacy" className="text-amber-400 hover:underline">Privacy Policy</Link>. We collect, use, and protect your data as described in that policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h2>
            <div className="p-4 bg-amber-900/20 border border-amber-700/50 rounded-lg space-y-2">
              <p className="font-semibold text-amber-400">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
              <p>We do not guarantee that:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The Service will be uninterrupted, secure, or error-free</li>
                <li>Results obtained from the Service will be accurate or reliable</li>
                <li>Any market opportunities identified will be profitable</li>
                <li>Defects will be corrected</li>
              </ul>
              <p className="font-semibold">USE THE SERVICE AT YOUR OWN RISK. WE ARE NOT RESPONSIBLE FOR BUSINESS DECISIONS MADE BASED ON OUR DATA.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
            <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg space-y-2">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOLDMINE AI SHALL NOT BE LIABLE FOR:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages resulting from your use or inability to use the Service</li>
              </ul>
              <p className="font-semibold mt-2">OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless GoldMine AI, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
            <p className="mb-4">We may suspend or terminate your access to the Service at any time, with or without cause or notice, including for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Non-payment of fees</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="mt-4">Upon termination, your right to use the Service will immediately cease. Provisions that should survive termination (including disclaimers, limitations of liability, and dispute resolution) will remain in effect.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Dispute Resolution</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">13.1 Informal Resolution</h3>
                <p>Before filing a claim, you agree to contact us at <a href="mailto:contact@digwordai.com" className="text-amber-400 hover:underline">contact@digwordai.com</a> to attempt informal resolution.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">13.2 Arbitration</h3>
                <p>Any disputes not resolved informally will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, rather than in court. You waive your right to a jury trial.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-400 mb-2">13.3 Class Action Waiver</h3>
                <p>You agree to resolve disputes on an individual basis only, not as part of a class action or representative proceeding.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">14. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">15. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email or by posting a notice on our website. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">16. Miscellaneous</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and GoldMine AI.</li>
              <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in effect.</li>
              <li><strong>Waiver:</strong> Our failure to enforce any right or provision does not constitute a waiver.</li>
              <li><strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign them freely.</li>
              <li><strong>No Agency:</strong> These Terms do not create any agency, partnership, or joint venture.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
            <p>
              For questions about these Terms or to report violations, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
              <p className="font-semibold text-amber-400">GoldMine AI</p>
              <p>Email: <a href="mailto:contact@digwordai.com" className="text-amber-400 hover:underline">contact@digwordai.com</a></p>
            </div>
          </section>

          <div className="p-6 bg-slate-900/80 border-2 border-amber-500/30 rounded-xl mt-8">
            <p className="text-center font-semibold text-amber-400">
              By using GoldMine AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800 mt-12">
        <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; 2025 GoldMine AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

