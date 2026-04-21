'use client'

import { useState } from 'react'

export default function ShareButtons() {
  const [copied, setCopied] = useState(false)

  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const url = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div
      style={{
        marginTop: 48,
        paddingTop: 32,
        borderTop: '1px solid rgba(28,59,42,0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
      }}
    >
      <span
        style={{
          fontSize: 12,
          color: 'rgba(28,59,42,0.55)',
          fontFamily: 'var(--font-josefin)',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginRight: 4,
        }}
      >
        Chia sẻ:
      </span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 16px',
          background: '#1877F2',
          color: 'white',
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
          fontFamily: 'var(--font-josefin)',
          letterSpacing: '0.03em',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 14 }}>f</span> Facebook
      </a>
      <a
        href={`https://zalo.me/share/url?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 16px',
          background: '#0068FF',
          color: 'white',
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
          fontFamily: 'var(--font-josefin)',
          letterSpacing: '0.03em',
        }}
      >
        Zalo
      </a>
      <button
        onClick={copyLink}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 16px',
          background: 'white',
          color: '#1C3B2A',
          border: '1px solid rgba(28,59,42,0.3)',
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'var(--font-josefin)',
          letterSpacing: '0.03em',
          transition: 'border-color 0.15s',
        }}
      >
        {copied ? '✓ Đã sao chép!' : 'Sao chép link'}
      </button>
    </div>
  )
}
