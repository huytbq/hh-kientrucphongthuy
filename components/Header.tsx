'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { BRAND, NAV_LINKS } from '@/lib/constants'
import { trackEvent, GA_EVENTS } from '@/lib/analytics'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const savedScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      savedScrollY.current = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollY.current}px`
      document.body.style.width = '100%'
      document.body.classList.add('menu-open')
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.classList.remove('menu-open')
      window.scrollTo(0, savedScrollY.current)
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.classList.remove('menu-open')
    }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-forest/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo + scroll phone */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3 shrink-0">
                <div
                  className="w-10 h-10 flex items-center justify-center bg-forest"
                  style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700 }}
                >
                  <span className="text-gold text-lg tracking-tight">HH</span>
                </div>
                <span
                  className="hidden sm:block text-forest text-sm font-semibold leading-snug"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {BRAND.name}
                </span>
              </Link>

              {/* Phone — desktop only, visible after scroll 300px */}
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="hidden lg:flex items-center gap-1.5 text-forest/70 hover:text-forest transition-colors duration-150"
                style={{
                  fontSize: 12,
                  fontFamily: 'var(--font-body)',
                  opacity: scrolled ? 1 : 0,
                  transform: scrolled ? 'translateY(0)' : 'translateY(-6px)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                  pointerEvents: scrolled ? 'auto' : 'none',
                }}
              >
                <Phone size={12} />
                {BRAND.phone}
              </a>
            </div>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-forest/70 hover:text-forest text-sm font-medium transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/lien-he"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-1px)'
                  el.style.boxShadow = '0 4px 16px rgba(28,59,42,0.25)'
                  el.style.background = '#2A5240'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  el.style.background = '#1C3B2A'
                }}
                onClick={() => trackEvent(GA_EVENTS.CTA_CLICK, { location: 'header' })}
                className="inline-block bg-forest text-white text-sm font-semibold px-5 py-2.5"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderRadius: '8px',
                  // animation: 'navPulse 2.5s ease-in-out infinite',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.15s',
                  animation: 'ringPulseForest 1.5s ease-out infinite 1s'
                }}
              >
                Tư Vấn Miễn Phí
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-forest"
              aria-label="Mở menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] flex flex-col"
          style={{ background: 'rgba(15,35,24,0.98)', backdropFilter: 'blur(12px)', height: '100dvh' }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-6 h-16 border-b" style={{ borderColor: 'rgba(200,169,81,0.15)' }}>
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3"
            >
              <div
                className="w-10 h-10 flex items-center justify-center bg-forest"
                style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700 }}
              >
                <span className="text-gold text-lg">HH</span>
              </div>
              <span className="text-sm font-semibold" style={{ color: '#F8F6F1', fontFamily: 'var(--font-body)' }}>{BRAND.name}</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
              style={{ color: '#F8F6F1' }}
              aria-label="Đóng menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Nav links */}
          <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 32px' }}>
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block transition-colors hover:text-gold"
                style={{
                  fontFamily: 'var(--font-josefin)',
                  fontSize: 18,
                  fontWeight: 300,
                  textTransform: 'uppercase',
                  letterSpacing: '3px',
                  color: '#F8F6F1',
                  padding: '18px 0',
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(200,169,81,0.12)' : 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="pb-10">
            <Link
              href="/lien-he"
              onClick={() => setMobileOpen(false)}
              className="block text-center font-bold py-4 transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--font-josefin)',
                fontSize: 11,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: '#C8A951',
                color: '#0F2318',
                margin: '0 24px',
              }}
            >
              Tư Vấn Miễn Phí
            </Link>
            <p className="text-center text-sm mt-4" style={{ color: 'rgba(248,246,241,0.4)' }}>{BRAND.phone}</p>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
