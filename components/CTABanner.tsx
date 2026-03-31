import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section className="bg-gold-pale border-t-2 border-gold py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left: heading + desc */}
          <div className="text-center lg:text-left max-w-xl">
            <h2
              className="text-3xl sm:text-4xl text-forest font-semibold leading-snug mb-4"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Sẵn Sàng Thay Đổi<br />Không Gian Sống?
            </h2>
            <p
              className="text-forest/60 text-sm leading-7"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
            >
              Liên hệ ngay để được tư vấn phong thủy miễn phí. Chuyên gia HH
              sẽ lắng nghe và đưa ra giải pháp phù hợp nhất cho không gian của bạn.
            </p>
          </div>

          {/* Right: phone + buttons */}
          <div className="flex flex-col items-center gap-5 shrink-0">
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
              className="text-forest text-4xl font-bold leading-none hover:text-gold transition-colors duration-150"
              style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700 }}
            >
              {BRAND.phone}
            </a>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/lien-he"
                className="inline-flex items-center justify-center gap-2 bg-forest text-white text-sm font-semibold px-6 py-3 hover:bg-forest-mid transition-colors duration-150"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Đặt Lịch Tư Vấn
                <ArrowRight size={15} />
              </Link>
              <a
                href={BRAND.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-forest text-forest text-sm font-semibold px-6 py-3 hover:bg-forest/8 transition-colors duration-150"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Nhắn Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
