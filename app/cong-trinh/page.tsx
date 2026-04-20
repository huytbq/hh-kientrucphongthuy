import type { Metadata } from 'next'
import ProjectGrid from '@/components/ProjectGrid'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Công Trình',
  description:
    'Các công trình kiến trúc phong thủy tiêu biểu của HH: nhà ở, văn phòng kinh doanh, thiết kế tổng thể trên toàn quốc.',
}

export default function ProjectPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--forest-gradient)',
          padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 80px) clamp(48px, 5vw, 60px)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Công Trình
          </p>
          <h1
            className="text-white font-semibold mb-4"
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.15,
            }}
          >
            Dự Án Tiêu Biểu
          </h1>
          <p
            className="max-w-lg mx-auto"
            style={{ fontSize: 14, color: 'rgba(248,246,241,0.6)', lineHeight: 1.8 }}
          >
            Mỗi công trình là một hành trình đặc biệt — nơi phong thủy và kiến trúc
            gặp nhau để tạo ra không gian sống và làm việc lý tưởng.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#F8F6F1' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
