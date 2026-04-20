'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/projects'

const FILTERS = [
  { key: 'all', label: 'Tất Cả' },
  { key: 'nha-o', label: 'Nhà Ở' },
  { key: 'kinh-doanh', label: 'Kinh Doanh' },
  { key: 'thiet-ke', label: 'Thiết Kế' },
]

/* ── Small SVG icon per type ── */
function TypeIcon({ type }: { type: string }) {
  if (type === 'nha-o') return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M8 28L28 10L48 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 22V46H42V22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <rect x="22" y="32" width="12" height="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
  if (type === 'kinh-doanh') return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="8" y="18" width="40" height="30" rx="1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 18V12c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <rect x="18" y="28" width="8" height="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="30" y="28" width="8" height="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="8" y1="26" x2="48" y2="26" stroke="white" strokeWidth="1.5"/>
    </svg>
  )
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path d="M38 8L46 16L22 44H14V36L38 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="32" y1="14" x2="40" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="46" x2="46" y2="46" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.type === activeFilter
  )

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className="text-xs px-5 py-2.5 transition-colors duration-150"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: activeFilter === f.key ? '#1C3B2A' : 'transparent',
              color: activeFilter === f.key ? '#fff' : '#1C3B2A',
              border: `1px solid ${activeFilter === f.key ? '#1C3B2A' : 'rgba(28,59,42,0.3)'}`,
              borderRadius: 2,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/cong-trinh/${project.slug}`}
                className="block group"
                style={{
                  borderRadius: 8,
                  overflow: 'hidden',
                  border: '1px solid rgba(28,59,42,0.1)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 40px rgba(28,59,42,0.12)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Image placeholder */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ height: 240, background: project.coverColor, overflow: 'hidden' }}
                >
                  {/* SVG icon centered, low opacity */}
                  <div style={{ opacity: 0.15 }}>
                    <TypeIcon type={project.type} />
                  </div>

                  {/* Year badge — top right */}
                  <span
                    className="absolute top-3 right-4"
                    style={{
                      fontFamily: 'var(--font-josefin)',
                      fontSize: 11,
                      fontWeight: 300,
                      color: 'rgba(255,255,255,0.55)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {project.year}
                  </span>

                  {/* Type badge — bottom left */}
                  <span
                    className="absolute bottom-4 left-4"
                    style={{
                      fontFamily: 'var(--font-josefin)',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.9)',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(6px)',
                      padding: '4px 12px',
                      borderRadius: 20,
                    }}
                  >
                    {project.typeLabel}
                  </span>
                </div>

                {/* Info */}
                <div className="bg-white" style={{ padding: 24 }}>
                  <h3
                    className="text-forest-deep group-hover:text-forest-mid transition-colors"
                    style={{ fontFamily: 'var(--font-lora)', fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                  >
                    {project.title}
                  </h3>

                  <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: 'rgba(28,59,42,0.5)' }}>{project.location}</span>
                    <span style={{ fontSize: 12, color: 'rgba(28,59,42,0.4)' }}>{project.area}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap" style={{ gap: 6 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 10,
                          background: 'rgba(28,59,42,0.06)',
                          color: '#1C3B2A',
                          padding: '3px 10px',
                          borderRadius: 20,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
