'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

/* ── CountUp hook ── */
function useCountUp(target: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setValue(Math.round(easeOut(progress) * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, start])
  return value
}

/* ── Stat item ── */
function StatItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number
  suffix: string
  label: string
  started: boolean
}) {
  const count = useCountUp(value, 2000, started)
  return (
    <div className="flex flex-col items-center gap-1 px-6 py-5 border-r border-gold/15 last:border-r-0">
      <span
        className="text-3xl sm:text-4xl font-semibold text-gold leading-none"
        style={{ fontFamily: 'var(--font-lora)' }}
      >
        {count}
        {suffix}
      </span>
      <span
        className="text-[10px] uppercase tracking-widest text-white/40 mt-1 text-center"
        style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
      >
        {label}
      </span>
    </div>
  )
}

const STATS = [
  { value: 500, suffix: '+', label: 'Công Trình' },
  { value: 15, suffix: '+', label: 'Năm Kinh Nghiệm' },
  { value: 98, suffix: '%', label: 'Hài Lòng' },
  { value: 63, suffix: '+', label: 'Tỉnh Thành' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
}

export default function HeroSection() {
  const ribbonRef = useRef<HTMLDivElement>(null)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ribbonRef.current) observer.observe(ribbonRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Layer 1 — background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--forest-gradient)' }}
      />

      {/* Layer 2 — bát quái SVG texture */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 700,
          height: 700,
          animation: 'shimmer 4s ease-in-out infinite',
        }}
      >
        <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[320, 260, 200, 140, 80].map((r) => (
            <circle key={r} cx="350" cy="350" r={r} stroke="#C8A951" strokeWidth="0.8" />
          ))}
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * Math.PI) / 4
            const x2 = 350 + Math.cos(angle) * 320
            const y2 = 350 + Math.sin(angle) * 320
            return (
              <line key={i} x1="350" y1="350" x2={x2} y2={y2} stroke="#C8A951" strokeWidth="0.8" />
            )
          })}
          <polygon
            points={Array.from({ length: 8 }, (_, i) => {
              const angle = (i * Math.PI) / 4 - Math.PI / 8
              return `${350 + Math.cos(angle) * 320},${350 + Math.sin(angle) * 320}`
            }).join(' ')}
            stroke="#C8A951"
            strokeWidth="0.8"
          />
          <circle cx="350" cy="350" r="4" fill="#C8A951" />
        </svg>
      </div>

      {/* Layer 3 — left gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #0F2318 40%, transparent 85%)',
        }}
      />

      {/* Layer 4 — content */}
      <div className="relative z-10 flex-1 flex items-center px-6 sm:px-12 lg:px-20 pt-20">
        <div style={{ maxWidth: 600 }}>

          {/* Eyebrow pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block mb-6"
          >
            <span
              className="text-gold text-[11px] uppercase tracking-widest px-4 py-1.5"
              style={{
                fontFamily: 'var(--font-josefin)',
                fontWeight: 300,
                border: '1px solid rgba(200,169,81,0.4)',
              }}
            >
              ✦ Hơn 15 năm kinh nghiệm
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="text-white mb-6 leading-[1.1]"
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 600,
            }}
          >
            Không Gian Sống
            <br />
            <em style={{ color: '#C8A951', fontStyle: 'italic' }}>Hài Hòa Vượng Khí</em>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            style={{
              width: 48,
              height: 2,
              background: '#C8A951',
              marginBottom: 24,
              transformOrigin: 'left',
            }}
          />

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="mb-4"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontWeight: 300,
              fontSize: 12,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#DFC07E',
            }}
          >
            Khoa học · Truyền thống · Hiệu quả
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            style={{
              fontSize: 14,
              lineHeight: 1.85,
              color: 'rgba(248,246,241,0.65)',
              maxWidth: 480,
            }}
          >
            Tư vấn kiến trúc phong thủy khoa học — kết hợp triết học truyền thống
            và kiến trúc hiện đại để tạo ra không gian sống và làm việc thuận khí,
            vượng tài cho từng gia chủ.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="flex flex-wrap gap-3.5"
            style={{ marginTop: 44 }}
          >
            <Link
              href="/lien-he"
              className="inline-block text-[11px] font-bold uppercase tracking-[2px] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{
                fontFamily: 'var(--font-josefin)',
                background: '#C8A951',
                color: '#0F2318',
                padding: '16px 36px',
                borderRadius: 2,
              }}
            >
              Đặt Lịch Tư Vấn
            </Link>
            <Link
              href="/dich-vu"
              className="inline-block text-[11px] uppercase tracking-[2px] transition-all duration-200 hover:bg-gold/10 hover:border-gold"
              style={{
                fontFamily: 'var(--font-josefin)',
                fontWeight: 600,
                color: '#C8A951',
                padding: '16px 28px',
                border: '1px solid rgba(200,169,81,0.5)',
              }}
            >
              Xem Dịch Vụ
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative z-10 flex flex-col items-center gap-1.5 pb-6"
        style={{ animation: 'floatUp 2s ease-in-out infinite' }}
      >
        <span
          className="text-[10px] uppercase tracking-widest text-white/30"
          style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
        >
          Cuộn xuống
        </span>
        <ChevronDown size={14} className="text-white/30" />
      </div>

      {/* Layer 5 — stat ribbon */}
      <div
        ref={ribbonRef}
        className="relative z-10 grid grid-cols-2 sm:grid-cols-4 border-t"
        style={{
          background: 'rgba(15,35,24,0.85)',
          backdropFilter: 'blur(8px)',
          borderColor: 'rgba(200,169,81,0.15)',
        }}
      >
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} started={statsStarted} />
        ))}
      </div>
    </section>
  )
}
