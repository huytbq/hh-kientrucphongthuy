import type { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Blog Phong Thủy',
  description:
    'Kiến thức phong thủy, hướng nhà theo tuổi, vật phẩm phong thủy và thiết kế kiến trúc từ chuyên gia Kiến Trúc Phong Thủy HH.',
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-deep pt-24 lg:pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Blog
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Kiến Thức Phong Thủy
          </h1>
          <p className="text-white/55 max-w-lg mx-auto text-sm leading-7">
            Chia sẻ từ chuyên gia HH về phong thủy, kiến trúc và nghệ thuật
            tạo không gian sống hài hòa — khoa học và thực tiễn.
          </p>
        </div>
      </section>

      {/* Blog grid with search & filter */}
      <BlogContent />

      <CTABanner />
    </>
  )
}
