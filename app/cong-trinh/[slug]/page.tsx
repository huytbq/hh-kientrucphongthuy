import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Ruler, Calendar, Tag } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'
import CTABanner from '@/components/CTABanner'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return { title: 'Không tìm thấy' }
  return {
    title: `${project.title} — Công Trình HH`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  const related = PROJECTS.filter(
    (p) => p.type === project.type && p.id !== project.id
  ).slice(0, 3)

  return (
    <>
      {/* Back link */}
      <div
        className="bg-white border-b"
        style={{ borderColor: 'rgba(28,59,42,0.08)', paddingTop: 80 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/cong-trinh"
            className="inline-flex items-center gap-1.5 text-forest/60 hover:text-forest transition-colors"
            style={{ fontSize: 13, fontFamily: 'var(--font-josefin)', letterSpacing: '0.05em' }}
          >
            ← Tất cả công trình
          </Link>
        </div>
      </div>

      {/* Hero image placeholder */}
      <div
        className="relative flex items-end"
        style={{ background: project.coverColor, height: 400 }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
        />
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full"
        >
          <span
            className="inline-block mb-3"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(6px)',
              padding: '4px 12px',
              borderRadius: 20,
            }}
          >
            {project.typeLabel}
          </span>
          <h1
            className="text-white font-semibold"
            style={{ fontFamily: 'var(--font-lora)', fontSize: 'clamp(28px, 4vw, 44px)', lineHeight: 1.2 }}
          >
            {project.title}
          </h1>
          <p className="text-white/70 mt-2" style={{ fontSize: 14 }}>{project.location}</p>
        </div>
      </div>

      {/* Body */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#F8F6F1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-14 items-start">

            {/* Left: description + tags (2/3) */}
            <div className="lg:col-span-2">
              <p
                className="text-gold text-xs tracking-[0.2em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
              >
                Mô Tả Công Trình
              </p>
              <p
                className="text-forest-deep mb-8"
                style={{ fontSize: 16, lineHeight: 1.9, fontWeight: 300 }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div>
                <p
                  className="text-xs uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'var(--font-josefin)', color: 'rgba(28,59,42,0.45)', fontWeight: 300 }}
                >
                  Phương Pháp Áp Dụng
                </p>
                <div className="flex flex-wrap" style={{ gap: 8 }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 12,
                        background: 'rgba(28,59,42,0.07)',
                        color: '#1C3B2A',
                        padding: '6px 14px',
                        borderRadius: 20,
                        border: '1px solid rgba(28,59,42,0.1)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: info + CTA (1/3) */}
            <div className="space-y-5">
              {/* Project info box */}
              <div className="bg-white border border-forest/8 p-6">
                <h2
                  className="text-forest font-semibold mb-5"
                  style={{ fontFamily: 'var(--font-lora)', fontSize: 15 }}
                >
                  Thông Tin Dự Án
                </h2>
                <ul className="space-y-4">
                  {[
                    { Icon: Tag, label: 'Loại hình', value: project.typeLabel },
                    { Icon: Ruler, label: 'Diện tích', value: project.area },
                    { Icon: Calendar, label: 'Năm thực hiện', value: String(project.year) },
                    { Icon: MapPin, label: 'Địa điểm', value: project.location },
                  ].map(({ Icon, label, value }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 flex items-center justify-center shrink-0" style={{ background: 'rgba(200,169,81,0.1)' }}>
                        <Icon size={14} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'rgba(28,59,42,0.45)', fontFamily: 'var(--font-josefin)', fontWeight: 300 }}>
                          {label}
                        </p>
                        <p className="text-forest font-medium" style={{ fontSize: 14 }}>{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA box */}
              <div style={{ background: '#1C3B2A', padding: 24 }}>
                <p
                  className="text-gold mb-1"
                  style={{ fontFamily: 'var(--font-lora)', fontSize: 16, fontWeight: 600, fontStyle: 'italic' }}
                >
                  Công trình này phù hợp với bạn?
                </p>
                <p className="text-white/55 mb-5" style={{ fontSize: 13, lineHeight: 1.7 }}>
                  Liên hệ ngay để được tư vấn miễn phí phương án phù hợp với không gian và nhu cầu của bạn.
                </p>
                <Link
                  href="/lien-he"
                  className="block text-center font-bold py-3.5 transition-opacity hover:opacity-90"
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: '#C8A951',
                    color: '#0F2318',
                  }}
                >
                  Đặt Lịch Tư Vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section style={{ padding: 'clamp(48px, 5vw, 72px) 0', background: '#fff' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-forest-deep font-semibold mb-8"
              style={{ fontFamily: 'var(--font-lora)', fontSize: 24 }}
            >
              Dự Án Cùng Loại
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/cong-trinh/${p.slug}`}
                  className="group block overflow-hidden"
                  style={{ borderRadius: 8, border: '1px solid rgba(28,59,42,0.1)' }}
                >
                  <div
                    className="relative flex items-center justify-center"
                    style={{ height: 180, background: p.coverColor }}
                  >
                    <span
                      className="absolute top-3 right-4"
                      style={{ fontFamily: 'var(--font-josefin)', fontSize: 11, fontWeight: 300, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <div className="bg-white p-5">
                    <h3
                      className="text-forest-deep group-hover:text-forest-mid transition-colors"
                      style={{ fontFamily: 'var(--font-lora)', fontSize: 15, fontWeight: 600, marginBottom: 4 }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 12, color: 'rgba(28,59,42,0.5)' }}>{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
