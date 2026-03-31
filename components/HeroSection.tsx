'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const GRID_PATTERN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Crect width='40' height='40' fill='none'/%3E%3Cpath d='M0 0h40M0 0v40' stroke='%23C8A951' stroke-width='0.4'/%3E%3C/svg%3E")`

const STATS = [
  { num: '500+', label: 'Công trình' },
  { num: '15+', label: 'Năm kinh nghiệm' },
  { num: '98%', label: 'Khách hài lòng' },
  { num: '63+', label: 'Tỉnh thành' },
]

export default function HeroSection() {
  return (
    <section className="flex min-h-screen pt-16 lg:pt-18 overflow-hidden">
      {/* ── Left column 60% ── */}
      <motion.div
        className="relative flex flex-col justify-center w-full lg:w-[60%] bg-forest-deep px-8 sm:px-12 lg:px-16 py-20 border-r-2 border-gold/40"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: GRID_PATTERN }}
        />

        <div className="relative max-w-xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 border border-gold/40 px-4 py-1.5 mb-8 text-gold text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            <span>✦</span>
            <span>Hơn 15 năm kinh nghiệm</span>
          </div>

          {/* H1 */}
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.15] font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Không Gian Sống{' '}
            <br />
            <em className="not-italic text-gold">Hài Hòa Vượng Khí</em>
          </h1>

          {/* Tagline */}
          <p
            className="text-gold/70 text-xs tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            {BRAND.slogan}
          </p>

          {/* Description */}
          <p
            className="text-white/60 text-sm leading-7 mb-10 max-w-md"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Kết hợp tri thức phong thủy ngàn năm với ngôn ngữ kiến trúc hiện đại,
            chúng tôi kiến tạo không gian nơi năng lượng tích cực lưu chuyển
            và thịnh vượng được vun đắp bền lâu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/lien-he"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-forest-deep text-sm font-semibold px-7 py-3.5 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Đặt Lịch Tư Vấn
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/dich-vu"
              className="inline-flex items-center justify-center gap-2 border border-gold/50 text-gold hover:bg-gold/10 text-sm font-medium px-7 py-3.5 transition-colors duration-200"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Xem Dịch Vụ
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Right column 40% ── */}
      <motion.div
        className="hidden lg:flex w-[40%] bg-offwhite flex-col justify-center px-10 xl:px-14 py-20 relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Octagon decoration */}
        <div className="absolute bottom-4 right-4 opacity-[0.07] pointer-events-none">
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="97,0 163,0 260,97 260,163 163,260 97,260 0,163 0,97" stroke="#1C3B2A" strokeWidth="1.5"/>
            <polygon points="109,20 151,20 240,109 240,151 151,240 109,240 20,151 20,109" stroke="#1C3B2A" strokeWidth="1"/>
            <polygon points="121,40 139,40 220,121 220,139 139,220 121,220 40,139 40,121" stroke="#C8A951" strokeWidth="0.8"/>
            <line x1="130" y1="0" x2="130" y2="260" stroke="#1C3B2A" strokeWidth="0.5"/>
            <line x1="0" y1="130" x2="260" y2="130" stroke="#1C3B2A" strokeWidth="0.5"/>
            <line x1="38" y1="38" x2="222" y2="222" stroke="#1C3B2A" strokeWidth="0.5"/>
            <line x1="222" y1="38" x2="38" y2="222" stroke="#1C3B2A" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="relative">
          {/* "Tại sao chọn HH?" card */}
          <div className="bg-white border-l-4 border-forest p-6 mb-8 shadow-sm">
            <h2
              className="text-forest text-base font-semibold mb-2"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Tại sao chọn HH?
            </h2>
            <p className="text-forest/60 text-xs leading-6" style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}>
              Chúng tôi không chỉ tư vấn phong thủy — chúng tôi kiến tạo
              không gian dựa trên nền tảng khoa học, thẩm mỹ và tâm linh
              được chưng cất qua hàng thập kỷ thực tiễn.
            </p>
          </div>

          {/* Stats 2×2 */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-5 border border-forest/8">
                <div
                  className="text-3xl font-bold text-forest leading-none mb-1"
                  style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700 }}
                >
                  {s.num}
                </div>
                <div
                  className="text-forest/55 text-xs"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
