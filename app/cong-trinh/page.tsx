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
      <section className="bg-forest-deep pt-24 lg:pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Công Trình
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Dự Án Tiêu Biểu
          </h1>
          <p className="text-white/55 max-w-lg mx-auto text-sm leading-7">
            Mỗi công trình là một hành trình đặc biệt — nơi phong thủy và kiến trúc
            gặp nhau để tạo ra không gian sống và làm việc lý tưởng.
          </p>
        </div>
      </section>

      {/* Masonry grid with filter */}
      <section className="py-14 lg:py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
