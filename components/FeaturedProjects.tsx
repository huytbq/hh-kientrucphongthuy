'use client'

import Link from 'next/link'
import { PROJECTS } from '@/lib/projects'

/* Pick 1 project of each type */
const FEATURED = [
  PROJECTS.find((p) => p.type === 'nha-o')!,
  PROJECTS.find((p) => p.type === 'kinh-doanh')!,
  PROJECTS.find((p) => p.type === 'thiet-ke')!,
]

export default function FeaturedProjects() {
  return (
    <section className="py-[60px] md:py-[100px]" style={{ background: '#F8F6F1' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
            >
              Công Trình
            </p>
            <h2
              className="text-3xl sm:text-4xl text-forest-deep font-semibold leading-snug"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Dự Án Tiêu Biểu
            </h2>
          </div>
          <Link
            href="/cong-trinh"
            className="hidden sm:inline-flex items-center gap-1.5 text-forest/60 hover:text-gold text-sm font-medium transition-colors duration-150 whitespace-nowrap pb-1"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Xem tất cả →
          </Link>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((project) => (
            <Link
              key={project.id}
              href={`/cong-trinh/${project.slug}`}
              className="group block overflow-hidden transition-all duration-300"
              style={{
                borderRadius: 8,
                border: '1px solid rgba(28,59,42,0.1)',
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
              {/* Cover */}
              <div
                className="relative"
                style={{ height: 220, background: project.coverColor }}
              >
                {/* Year */}
                <span
                  className="absolute top-3 right-4"
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 11,
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.1em',
                  }}
                >
                  {project.year}
                </span>
                {/* Type badge */}
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
              <div className="bg-white p-6">
                <h3
                  className="text-forest-deep group-hover:text-forest-mid transition-colors"
                  style={{ fontFamily: 'var(--font-lora)', fontSize: 17, fontWeight: 600, marginBottom: 6 }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span style={{ fontSize: 12, color: 'rgba(28,59,42,0.5)' }}>{project.location}</span>
                  <span style={{ fontSize: 12, color: 'rgba(28,59,42,0.4)' }}>{project.area}</span>
                </div>
                <div className="flex flex-wrap" style={{ gap: 6 }}>
                  {project.tags.slice(0, 3).map((tag) => (
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
          ))}
        </div>

        {/* Mobile "view all" */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/cong-trinh"
            className="inline-flex items-center gap-2 text-forest border border-forest/30 px-8 py-3 transition-colors hover:border-forest"
            style={{ fontSize: 13, fontFamily: 'var(--font-josefin)', fontWeight: 600, letterSpacing: '0.08em' }}
          >
            Xem tất cả →
          </Link>
        </div>
      </div>
    </section>
  )
}
