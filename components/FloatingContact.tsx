'use client'

import { useState, useEffect } from 'react'
import { BRAND } from '@/lib/constants'
import { trackEvent, GA_EVENTS } from '@/lib/analytics'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <>
      {/* Zalo OA Official Widget */}
      <div
        className="zalo-chat-widget"
        data-oaid="579745863508352884"
        data-welcome-message="Xin chào! Tôi có thể hỗ trợ gì cho bạn?"
        data-autopopup="0"
        data-width="350"
        data-height="420"
      />

      <div
        className="fixed z-[999] flex flex-col items-center gap-3"
        style={{ bottom: 32, right: 32 }}
      >
        {/* Scroll to top — only when scrolled */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Cuộn lên đầu trang"
            className="flex items-center justify-center transition-transform duration-200 hover:scale-110 bg-white text-forest"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid rgba(28,59,42,0.2)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {/* Hotline */}
      <div className="relative group">
        <a
          href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
          aria-label="Gọi hotline"
          onClick={() => trackEvent(GA_EVENTS.CALL_CLICK, { location: 'floating' })}
          className="flex items-center justify-center text-white transition-transform duration-200 hover:scale-[1.12]"
          style={{
            width: 52,
            height: 52,
            borderRadius: '50%',
            background: '#1C3B2A',
            animation: 'ringPulseForest 1.5s ease-out infinite 1s',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3.5 4C3.5 3.72 3.72 3.5 4 3.5h2.5l1.25 3.5-1.5 1a9.5 9.5 0 005.25 5.25l1-1.5 3.5 1.25V15.5a.5.5 0 01-.5.5C7.82 16 4 12.18 4 7.5A3.5 3.5 0 013.5 4z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <span
          className="absolute top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap text-white text-xs px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          style={{
            right: 'calc(100% + 10px)',
            background: '#0F2318',
            borderRadius: 4,
          }}
        >
          Gọi ngay: {BRAND.phone}
        </span>
        </div>
      </div>
    </>
  )
}
