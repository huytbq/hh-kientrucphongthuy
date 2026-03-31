import type { Metadata, Viewport } from 'next'
import { Lora, Josefin_Sans, Be_Vietnam_Pro } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import { siteMetadata, SITE_URL } from '@/lib/metadata'
import { BRAND } from '@/lib/constants'

/* ── Google Fonts via next/font ── */
const lora = Lora({
  variable: '--font-lora-var',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-var',
  subsets: ['latin'],
  weight: ['300', '600', '700'],
  display: 'swap',
})

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-body-var',
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1C3B2A',
}

export const metadata: Metadata = siteMetadata

/* ── JSON-LD LocalBusiness Schema ── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BRAND.name,
  description:
    'Tư vấn kiến trúc phong thủy khoa học cho nhà ở và kinh doanh tại Việt Nam.',
  url: SITE_URL,
  telephone: BRAND.phone,
  email: BRAND.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hà Nội',
    addressCountry: 'VN',
  },
  areaServed: 'VN',
  priceRange: 'từ 3.000.000đ',
  sameAs: [BRAND.zalo],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [lora.variable, josefinSans.variable, beVietnamPro.variable].join(' ')

  return (
    <html lang="vi" className={`h-full ${fontVars}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
