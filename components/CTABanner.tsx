'use client'

import Link from 'next/link'
import { BRAND } from '@/lib/constants'

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '80px', background: 'var(--forest-gradient)' }}
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
            className="text-gold hover:text-gold-light transition-colors duration-150"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: 3,
              display: 'block',
            }}
          >
            {BRAND.phone}
          </a>
          <div className="flex flex-col gap-3" style={{ width: 200 }}>
            <Link
              href="/lien-he"
              className="flex items-center justify-center text-forest-deep font-bold uppercase hover:bg-gold-light transition-colors duration-150"
              style={{
                background: '#C8A951',
                fontSize: 11,
                fontFamily: 'var(--font-josefin)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                padding: '14px 0',
                borderRadius: 2,
              }}
            >
              Đặt Lịch Tư Vấn
            </Link>
            <a
              href={BRAND.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-gold transition-all duration-150 hover:bg-gold/10"
              style={{
                fontSize: 11,
                fontFamily: 'var(--font-josefin)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                padding: '14px 0',
                border: '1px solid rgba(200,169,81,0.5)',
                borderRadius: 2,
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
