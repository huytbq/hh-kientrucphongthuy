'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        background: '#0F2318',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 24px',
        textAlign: 'center',
      }}
    >
      {/* Background compass SVG */}
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          right: -40,
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      >
        <svg width="320" height="320" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="96" stroke="#C8A951" strokeWidth="2" />
          <circle cx="100" cy="100" r="70" stroke="#C8A951" strokeWidth="1" />
          <circle cx="100" cy="100" r="8" fill="#C8A951" />
          {/* Cardinal marks */}
          <line x1="100" y1="4" x2="100" y2="20" stroke="#C8A951" strokeWidth="2" />
          <line x1="100" y1="180" x2="100" y2="196" stroke="#C8A951" strokeWidth="2" />
          <line x1="4" y1="100" x2="20" y2="100" stroke="#C8A951" strokeWidth="2" />
          <line x1="180" y1="100" x2="196" y2="100" stroke="#C8A951" strokeWidth="2" />
          {/* North needle */}
          <polygon points="100,30 106,100 100,92 94,100" fill="#C8A951" />
          {/* South needle */}
          <polygon points="100,170 106,100 100,108 94,100" fill="rgba(200,169,81,0.4)" />
          {/* Degree marks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180
            const r1 = i % 9 === 0 ? 78 : 82
            const r2 = 88
            const x1 = 100 + r1 * Math.sin(angle)
            const y1 = 100 - r1 * Math.cos(angle)
            const x2 = 100 + r2 * Math.sin(angle)
            const y2 = 100 - r2 * Math.cos(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C8A951" strokeWidth="1" />
          })}
        </svg>
      </div>

      {/* 404 number */}
      <div
        style={{
          fontFamily: 'var(--font-josefin)',
          fontSize: 'clamp(80px, 18vw, 140px)',
          fontWeight: 700,
          color: 'rgba(200,169,81,0.18)',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: -16,
          userSelect: 'none',
        }}
      >
        404
      </div>

      {/* Heading */}
      <h2
        style={{
          fontFamily: 'var(--font-lora)',
          fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: 600,
          color: 'white',
          marginBottom: 16,
        }}
      >
        Trang Không Tìm Thấy
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: 14,
          color: 'rgba(248,246,241,0.55)',
          lineHeight: 1.8,
          maxWidth: 400,
          marginBottom: 40,
        }}
      >
        Trang bạn tìm kiếm có thể đã được di chuyển hoặc không tồn tại. Hãy quay về trang chủ để tiếp tục.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px 28px',
            background: '#C8A951',
            color: '#0F2318',
            fontFamily: 'var(--font-josefin)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: 2,
          }}
        >
          ← Về Trang Chủ
        </Link>
        <Link
          href="/dich-vu"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '12px 28px',
            background: 'transparent',
            color: '#C8A951',
            border: '1px solid #C8A951',
            fontFamily: 'var(--font-josefin)',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: 2,
          }}
        >
          Xem Dịch Vụ
        </Link>
      </div>
    </div>
  )
}
