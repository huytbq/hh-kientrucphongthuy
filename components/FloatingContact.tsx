'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Zalo */}
      <div className="relative group">
        <a
          href={BRAND.zalo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/20 hover:scale-110 transition-transform duration-200"
          style={{ backgroundColor: '#0068FF' }}
        >
          {/* Zalo icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.52 3.66 1.42 5.18L2 22l4.93-1.39A9.966 9.966 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8a7.96 7.96 0 01-4.04-1.1l-.29-.17-3.03.86.87-2.96-.19-.3A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8zm-3 5v6h1.5v-2.5h2V13H10.5V11h2V9.5h-2V9H9zm5 0c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2s2-.9 2-2v-2c0-1.1-.9-2-2-2zm0 1.5c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5z"/>
          </svg>
        </a>
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-forest-deep text-white text-xs px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
          Nhắn Zalo
        </span>
      </div>

      {/* Hotline */}
      <div className="relative group">
        <a
          href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
          aria-label="Gọi hotline"
          className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-white shadow-lg shadow-forest/30 hover:bg-forest-mid hover:scale-110 transition-all duration-200"
        >
          <Phone size={20} />
        </a>
        {/* Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-forest-deep text-white text-xs px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
          {BRAND.phone}
        </span>
      </div>
    </div>
  )
}
