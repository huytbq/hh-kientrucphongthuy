'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { trackEvent, GA_EVENTS } from '@/lib/analytics'

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-12 px-6 md:py-[64px] md:px-20"
      style={{ background: 'var(--forest-gradient)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          border: '1px solid rgba(200,169,81,0.08)',
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          border: '1px solid rgba(200,169,81,0.05)',
          right: -50,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left */}
        <div className="flex-1">
          <p
            className="text-gold uppercase tracking-widest mb-3"
            style={{ fontSize: 11, fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Bắt Đầu Hành Trình Vượng Khí
          </p>
          <h2
            className="text-white font-semibold mb-3"
            style={{ fontFamily: 'var(--font-lora)', fontSize: 'clamp(24px, 3vw, 36px)' }}
          >
            Tư Vấn Miễn Phí — Không Ràng Buộc
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(248,246,241,0.6)', marginBottom: 0 }}>
            Chuyên gia HH sẽ phản hồi trong 24 giờ làm việc
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap gap-7 mt-7">
            {['✓ Không mất phí', '✓ Không áp lực', '✓ Báo cáo chi tiết'].map((item) => (
              <span
                key={item}
                style={{ fontSize: 13, color: 'rgba(248,246,241,0.7)' }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="shrink-0 flex flex-col items-center lg:items-end gap-5">
          <a
            href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
            onClick={() => trackEvent(GA_EVENTS.CALL_CLICK, { location: 'cta_banner' })}
            className="text-gold hover:text-gold-light transition-colors duration-150"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 'clamp(24px, 5vw, 32px)',
              fontWeight: 700,
              letterSpacing: 3,
              display: 'block',
            }}
          >
            {BRAND.phone}
          </a>
          <div className="flex flex-col gap-3 w-full md:w-[200px]">
            <Link
              href="/lien-he"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'scale(1.02)'
                el.style.boxShadow = '0 6px 24px rgba(200,169,81,0.35)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'none'
                el.style.boxShadow = 'none'
              }}
              onClick={() => trackEvent(GA_EVENTS.CTA_CLICK, { location: 'cta_banner' })}
              className="flex items-center justify-center text-forest-deep font-bold uppercase"
              style={{
                background: '#C8A951',
                fontSize: 11,
                fontFamily: 'var(--font-josefin)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                padding: '14px 0',
                borderRadius: 2,
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Đặt Lịch Tư Vấn</span>
              <span
                aria-hidden
                style={{
                  position: 'absolute', top: 0, left: '-100%', width: '60%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  animation: 'shimmerBtn 3s ease-in-out infinite',
                  pointerEvents: 'none',
                }}
              />
            </Link>
            <a
              href={BRAND.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = '#C8A951'
                el.style.background = 'rgba(200,169,81,0.08)'
                el.style.boxShadow = '0 0 0 3px rgba(200,169,81,0.1)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(200,169,81,0.6)'
                el.style.background = 'transparent'
                el.style.boxShadow = 'none'
              }}
              className="flex items-center justify-center text-gold"
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-josefin)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                padding: '14px 0',
                border: '1.5px solid rgba(200,169,81,0.6)',
                borderRadius: 2,
                transition: 'all 0.25s ease',
              }}
            >
              Nhắn Zalo →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
