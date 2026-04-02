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
        {count}{suffix}
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
  { value: 15,  suffix: '+', label: 'Năm Kinh Nghiệm' },
  { value: 98,  suffix: '%', label: 'Hài Lòng' },
  { value: 63,  suffix: '+', label: 'Tỉnh Thành' },
]

const BADGES = [
  { text: '✦ Bát Quái', top: '20%', right: '15%', delay: 1 },
  { text: '⬡ Ngũ Hành', top: '55%', right: '5%',  delay: 1.2 },
  { text: '◎ Âm Dương', top: '75%', right: '20%', delay: 1.4 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
  }),
}

/* ── La Bàn SVG ── */
function LaBanSvg() {
  const cx = 260
  const cy = 260

  const rings = [240, 200, 160, 120, 80, 40]

  // 8 diameter lines every 22.5° apart
  const diameters = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI * 2) / 16 // 22.5° steps
    return {
      x1: cx + Math.cos(angle) * 240,
      y1: cy + Math.sin(angle) * 240,
      x2: cx - Math.cos(angle) * 240,
      y2: cy - Math.sin(angle) * 240,
    }
  })

  // Outer octagon inscribed at r=200
  const octagon200 = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4
    return `${cx + Math.cos(angle) * 200},${cy + Math.sin(angle) * 200}`
  }).join(' ')

  // Inner octagon at r=120, rotated 22.5°
  const octagon120 = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4 + Math.PI / 8
    return `${cx + Math.cos(angle) * 120},${cy + Math.sin(angle) * 120}`
  }).join(' ')

  // 8 dots at r=160
  const dots = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4
    return { x: cx + Math.cos(angle) * 160, y: cy + Math.sin(angle) * 160 }
  })

  return (
    <svg viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Concentric rings */}
      {rings.map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} stroke="#C8A951" strokeWidth="0.6" />
      ))}
      {/* Diameter lines */}
      {diameters.map((d, i) => (
        <line key={i} x1={d.x1} y1={d.y1} x2={d.x2} y2={d.y2} stroke="#C8A951" strokeWidth="0.4" />
      ))}
      {/* Outer octagon r=200 */}
      <polygon points={octagon200} stroke="#C8A951" strokeWidth="0.8" fill="none" />
      {/* Inner octagon r=120, rotated */}
      <polygon points={octagon120} stroke="#C8A951" strokeWidth="0.8" fill="none" />
      {/* 8 dots at r=160 */}
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="3" fill="#C8A951" />
      ))}
      {/* Center dot */}
      <circle cx={cx} cy={cy} r="5" fill="#C8A951" />
    </svg>
  )
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

      {/* Layer 2 — La Bàn SVG (right side, rotating slowly) */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          right: -60,
          top: '50%',
          width: 520,
          height: 520,
          opacity: 0,
          animation: 'rotateSlow 120s linear infinite',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <LaBanSvg />
      </motion.div>

      {/* Floating badges */}
      {BADGES.map((badge) => (
        <motion.div
          key={badge.text}
          className="absolute pointer-events-none hidden lg:block"
          style={{ top: badge.top, right: badge.right }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: badge.delay }}
        >
          <span
            className="block text-[10px] uppercase tracking-widest px-3 py-1.5"
            style={{
              color: 'rgba(200,169,81,0.7)',
              border: '1px solid rgba(200,169,81,0.3)',
              borderRadius: 20,
              backdropFilter: 'blur(4px)',
              letterSpacing: '0.15em',
            }}
          >
            {badge.text}
          </span>
        </motion.div>
      ))}

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
              className="inline-block text-[11px] font-bold uppercase tracking-[2px]"
              style={{
                fontFamily: 'var(--font-josefin)',
                background: '#C8A951',
                color: '#0F2318',
                padding: '16px 36px',
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
            <Link
              href="/dich-vu"
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
              className="inline-block text-[11px] uppercase tracking-[2px]"
              style={{
                fontFamily: 'var(--font-josefin)',
                fontWeight: 600,
                color: '#C8A951',
                padding: '16px 28px',
                border: '1.5px solid rgba(200,169,81,0.6)',
                transition: 'all 0.25s ease',
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
