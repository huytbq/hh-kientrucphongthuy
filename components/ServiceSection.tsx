'use client'

import Link from 'next/link'

const SERVICES = [
  {
    num: '01',
    title: 'Phong Thủy Nhà Ở',
    desc: 'Phân tích năng lượng không gian sống, bố trí nội thất và hướng nhà theo mệnh chủ nhân, mang lại sức khỏe và thịnh vượng bền vững.',
    bullets: ['Khảo sát thực địa', 'Tư vấn hướng nhà', 'Báo cáo văn bản'],
    price: 'Từ 3,000,000đ',
    gradient: 'linear-gradient(135deg, #1C3B2A, #2A5240)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24L24 8L42 24" stroke="#C8A951" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 20V40H38V20" stroke="#C8A951" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="18" y="28" width="12" height="12" stroke="#C8A951" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    svgBg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 160L160 60L270 160" stroke="#C8A951" strokeWidth="1.5"/>
        <path d="M80 140V170H240V140" stroke="#C8A951" strokeWidth="1.5"/>
        <rect x="140" y="120" width="40" height="50" stroke="#C8A951" strokeWidth="1.5"/>
        <path d="M270 160L340 90L410 160" stroke="#C8A951" strokeWidth="1"/>
        <path d="M290 148V170H390V148" stroke="#C8A951" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Phong Thủy Kinh Doanh',
    desc: 'Tối ưu hóa văn phòng, mặt bằng thương mại theo nguyên lý tài lộc, thu hút khách hàng và nâng cao hiệu suất kinh doanh.',
    bullets: ['Văn phòng & cửa hàng', 'Bố trí tài lộc', 'Màu sắc thương hiệu'],
    price: 'Từ 5,000,000đ',
    gradient: 'linear-gradient(135deg, #1C2E3B, #1C3B3B)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="28" rx="1" stroke="#C8A951" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 14V10C14 8.9 14.9 8 16 8H32C33.1 8 34 8.9 34 10V14" stroke="#C8A951" strokeWidth="2.5" strokeLinecap="round"/>
        <rect x="14" y="24" width="6" height="8" stroke="#C8A951" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="28" y="24" width="6" height="8" stroke="#C8A951" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="6" y1="22" x2="42" y2="22" stroke="#C8A951" strokeWidth="1.5"/>
      </svg>
    ),
    svgBg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="60" width="80" height="140" stroke="#C8A951" strokeWidth="1.5"/>
        <rect x="160" y="40" width="80" height="160" stroke="#C8A951" strokeWidth="1.5"/>
        <rect x="280" y="80" width="80" height="120" stroke="#C8A951" strokeWidth="1.5"/>
        <line x1="40" y1="200" x2="400" y2="200" stroke="#C8A951" strokeWidth="1"/>
        <rect x="55" y="80" width="12" height="16" stroke="#C8A951" strokeWidth="0.8"/>
        <rect x="175" y="60" width="12" height="16" stroke="#C8A951" strokeWidth="0.8"/>
        <rect x="295" y="100" width="12" height="16" stroke="#C8A951" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Thiết Kế Kiến Trúc',
    desc: 'Tích hợp phong thủy từ giai đoạn bản vẽ, tạo ra công trình hài hòa âm dương, đúng hướng, đúng cung — đẹp và vượng khí.',
    bullets: ['Tích hợp từ bản vẽ', 'Hài hòa âm dương', 'Giám sát thi công'],
    price: 'Liên hệ báo giá',
    gradient: 'linear-gradient(135deg, #2E2A1C, #3B3520)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 6L42 14L16 40H8V32L34 6Z" stroke="#C8A951" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="28" y1="12" x2="36" y2="20" stroke="#C8A951" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="40" x2="42" y2="40" stroke="#C8A951" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    svgBg: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="180" x2="380" y2="180" stroke="#C8A951" strokeWidth="1"/>
        <line x1="40" y1="20" x2="40" y2="180" stroke="#C8A951" strokeWidth="1"/>
        <path d="M40 180 L120 80 L200 120 L280 50 L380 100" stroke="#C8A951" strokeWidth="1.5" fill="none"/>
        <circle cx="120" cy="80" r="4" fill="#C8A951"/>
        <circle cx="200" cy="120" r="4" fill="#C8A951"/>
        <circle cx="280" cy="50" r="4" fill="#C8A951"/>
      </svg>
    ),
  },
]

export default function ServiceSection() {
  return (
    <section style={{ padding: 'var(--section-padding)', background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
            >
              Dịch Vụ
            </p>
            <h2
              className="text-3xl sm:text-4xl text-forest-deep font-semibold leading-snug"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Giải Pháp Phong Thủy<br />Toàn Diện
            </h2>
          </div>
          <Link
            href="/dich-vu"
            className="hidden sm:inline-flex items-center gap-1.5 text-forest/60 hover:text-gold text-sm font-medium transition-colors duration-150 whitespace-nowrap pb-1"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Xem tất cả →
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className="reveal group flex flex-col overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                border: '1px solid rgba(28,59,42,0.1)',
                borderRadius: 8,
                transitionDelay: `${i * 150}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 16px 48px rgba(28,59,42,0.12)'
                el.style.borderColor = 'rgba(28,59,42,0.3)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = 'rgba(28,59,42,0.1)'
              }}
            >
              {/* Top visual */}
              <div
                className="relative flex items-center justify-center"
                style={{ height: 200, background: s.gradient, overflow: 'hidden' }}
              >
                {/* SVG background pattern */}
                <div className="absolute inset-0">{s.svgBg}</div>

                {/* Large number, top right */}
                <span
                  className="absolute top-4 right-5 leading-none select-none"
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 80,
                    fontWeight: 700,
                    color: 'rgba(200,169,81,0.2)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </span>

                {/* Icon centered */}
                <div className="relative z-10">{s.icon}</div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-7">
                <h3
                  className="text-forest-deep font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-lora)', fontSize: 20 }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-forest/60 mb-5"
                  style={{ fontSize: 13, lineHeight: 1.8, fontWeight: 300 }}
                >
                  {s.desc}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-2 mb-5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-forest shrink-0"
                      />
                      <span
                        className="text-forest/65"
                        style={{ fontSize: 12, fontWeight: 400 }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-forest/8 mb-5 mt-auto" />

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-gold"
                    style={{ fontFamily: 'var(--font-lora)', fontSize: 15, fontStyle: 'italic' }}
                  >
                    {s.price}
                  </span>
                  <Link
                    href="/lien-he"
                    className="text-forest hover:underline transition-all"
                    style={{ fontSize: 12, fontWeight: 500 }}
                  >
                    Tư vấn ngay →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/dich-vu"
            className="inline-flex items-center gap-2 text-forest border border-forest/30 hover:border-forest hover:bg-forest/4 transition-all duration-200 px-8 py-3"
            style={{ fontSize: 13, fontFamily: 'var(--font-josefin)', fontWeight: 600, letterSpacing: '0.08em' }}
          >
            Xem tất cả 6 dịch vụ →
          </Link>
        </div>
      </div>
    </section>
  )
}
