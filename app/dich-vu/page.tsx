import type { Metadata } from 'next'
import { Home, Compass, Building2, Star, Layers, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Dịch Vụ',
  description:
    'Các dịch vụ tư vấn và thiết kế kiến trúc phong thủy chuyên nghiệp của Kiến Trúc Phong Thủy HH.',
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Home,
  Compass,
  Building2,
  Star,
  Layers,
  RefreshCw,
}

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-deep pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">Dịch Vụ</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            Giải Pháp Phong Thủy Toàn Diện
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Đội ngũ chuyên gia HH sẵn sàng đồng hành từ tư vấn đến thiết kế
            và giám sát thi công, đảm bảo không gian sống đúng chuẩn phong thủy.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon]
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl p-8 border border-forest/5 hover:border-gold/30 hover:shadow-xl hover:shadow-forest/5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold-pale flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    {Icon && <Icon size={26} className="text-gold" />}
                  </div>
                  <h2 className="text-forest font-bold text-lg mb-3">{service.title}</h2>
                  <p className="text-forest/60 text-sm leading-relaxed mb-5">{service.desc}</p>
                  <Link
                    href="/lien-he"
                    className="text-gold text-sm font-semibold hover:underline"
                  >
                    Tư vấn ngay →
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
