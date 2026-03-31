'use client'

import { useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      'Sau khi được HH tư vấn chỉnh hướng cửa chính và bố trí lại phòng khách, không khí trong nhà thay đổi rõ rệt. Cả gia đình cảm thấy nhẹ nhõm và thuận hòa hơn hẳn.',
    name: 'Chị Nguyễn Thị Lan',
    location: 'Hà Nội',
    initial: 'L',
  },
  {
    quote:
      'Báo cáo phong thủy của HH rất chi tiết và dễ hiểu. Không hề mơ hồ hay áp đặt như tôi lo ngại. Đội ngũ tư vấn rất tận tâm và chuyên nghiệp.',
    name: 'Anh Trần Minh Đức',
    location: 'TP. HCM',
    initial: 'Đ',
  },
  {
    quote:
      'Cửa hàng của tôi doanh thu tăng đáng kể sau khi điều chỉnh theo tư vấn. Không biết có phải ngẫu nhiên không nhưng tôi rất hài lòng với dịch vụ.',
    name: 'Chị Phạm Thu Hương',
    location: 'Đà Nẵng',
    initial: 'H',
  },
]

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = (index: number) => {
    const container = scrollRef.current
    if (!container) return
    const card = container.children[index] as HTMLElement
    if (!card) return
    container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return
    const scrollLeft = container.scrollLeft
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth ?? 0
    const gap = 24
    const idx = Math.round(scrollLeft / (cardWidth + gap))
    setActiveIndex(Math.min(idx, TESTIMONIALS.length - 1))
  }

  return (
    <section style={{ padding: 'var(--section-padding)', background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Khách Hàng Nói Gì
          </p>
          <h2
            className="text-3xl sm:text-4xl text-forest-deep font-semibold"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Hàng Trăm Gia Đình Đã Tin Tưởng HH
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-2"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="shrink-0 flex flex-col"
              style={{
                scrollSnapAlign: 'start',
                minWidth: 'calc(33.333% - 16px)',
                border: '1px solid rgba(28,59,42,0.1)',
                borderRadius: 8,
                padding: '36px 32px',
              }}
            >
              {/* Stars */}
              <div className="mb-3" style={{ fontSize: 12, color: '#C8A951', letterSpacing: 2 }}>
                ★★★★★
              </div>

              {/* Opening quote mark */}
              <span
                className="block leading-[0.8] select-none mb-2"
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontSize: 64,
                  color: 'rgba(200,169,81,0.2)',
                  lineHeight: 0.8,
                }}
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p
                className="flex-1 text-forest-deep"
                style={{
                  fontFamily: 'var(--font-lora)',
                  fontStyle: 'italic',
                  fontSize: 16,
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div
                style={{
                  width: 32,
                  height: 1,
                  background: 'rgba(200,169,81,0.3)',
                  marginBottom: 24,
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-3.5">
                <div
                  className="shrink-0 flex items-center justify-center text-gold"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1C3B2A, #2A5240)',
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="text-forest-deep"
                    style={{ fontSize: 14, fontWeight: 600 }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-forest/50"
                    style={{ fontSize: 12 }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 24 : 8,
                background:
                  activeIndex === i
                    ? '#1C3B2A'
                    : 'rgba(28,59,42,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
