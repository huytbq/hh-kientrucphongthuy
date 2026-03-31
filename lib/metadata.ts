import type { Metadata } from 'next'

export const SITE_URL = 'https://phongthuyHH.vn'

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Kiến Trúc Phong Thủy HH | Tư Vấn Chuyên Nghiệp Toàn Quốc',
    template: '%s | Kiến Trúc Phong Thủy HH',
  },
  description:
    'Tư vấn kiến trúc phong thủy khoa học cho nhà ở và kinh doanh. Báo cáo chi tiết, hỗ trợ trọn đời. 500+ công trình, 15+ năm kinh nghiệm.',
  keywords: [
    'phong thủy',
    'kiến trúc phong thủy',
    'tư vấn phong thủy nhà ở',
    'phong thủy kinh doanh',
    'hướng nhà theo tuổi',
    'thiết kế phong thủy',
    'kiến trúc sư phong thủy',
    'phong thủy Hà Nội',
    'phong thủy HCM',
    'phong thủy HH',
  ],
  authors: [{ name: 'Kiến Trúc Phong Thủy HH', url: SITE_URL }],
  creator: 'Kiến Trúc Phong Thủy HH',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: 'Kiến Trúc Phong Thủy HH',
    title: 'Kiến Trúc Phong Thủy HH | Tư Vấn Chuyên Nghiệp Toàn Quốc',
    description:
      'Tư vấn kiến trúc phong thủy khoa học cho nhà ở và kinh doanh. 500+ công trình, 15+ năm kinh nghiệm.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kiến Trúc Phong Thủy HH',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiến Trúc Phong Thủy HH | Tư Vấn Chuyên Nghiệp Toàn Quốc',
    description:
      'Tư vấn kiến trúc phong thủy khoa học cho nhà ở và kinh doanh. 500+ công trình, 15+ năm kinh nghiệm.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
  },
}
