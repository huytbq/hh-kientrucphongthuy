'use client'

import { useState, useEffect } from 'react'

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
  {
    quote:
      'Chúng tôi nhờ HH tư vấn phong thủy cho văn phòng mới trước khi chuyển vào. Bố cục được điều chỉnh hợp lý, nhân viên làm việc thoải mái hơn và không khí công ty cũng tích cực hơn hẳn.',
    name: 'Anh Lê Hoàng Nam',
    location: 'Hà Nội',
    initial: 'N',
  },
  {
    quote:
      'Báo cáo của HH rất chuyên nghiệp — có sơ đồ mặt bằng, chú thích từng khu vực và giải thích lý do cụ thể. Tôi hiểu được tại sao phải điều chỉnh chứ không chỉ nghe theo.',
    name: 'Chị Võ Thị Mai',
    location: 'TP. HCM',
    initial: 'M',
  },
  {
    quote:
      'Ban đầu tôi khá hoài nghi về phong thủy, nhưng cách HH giải thích bằng khoa học môi trường và tâm lý không gian khiến tôi thay đổi quan điểm. Rất đáng để trải nghiệm.',
    name: 'Anh Nguyễn Thành Đạt',
    location: 'Đà Nẵng',
    initial: 'Đ',
  },
]

function TestimonialCard({ t }: { t: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      className="flex flex-col h-full"
      style={{
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
        className="block select-none mb-2"
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
          <div className="text-forest-deep" style={{ fontSize: 14, fontWeight: 600 }}>
            {t.name}
          </div>
          <div className="text-forest/50" style={{ fontSize: 12 }}>
            {t.location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialSection() {
  const [activeGroup, setActiveGroup] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const update = () => {
      const ipv = window.innerWidth >= 768 ? 3 : 1
      setItemsPerView(ipv)
      setActiveGroup(0) // reset to first group on resize
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Split TESTIMONIALS into pages of itemsPerView
  const groups: (typeof TESTIMONIALS)[] = []
  for (let i = 0; i < TESTIMONIALS.length; i += itemsPerView) {
    groups.push(TESTIMONIALS.slice(i, i + itemsPerView))
  }
  const totalGroups = groups.length

  const goPrev = () => setActiveGroup((g) => Math.max(0, g - 1))
  const goNext = () => setActiveGroup((g) => Math.min(totalGroups - 1, g + 1))

  return (
    <section style={{ padding: '100px 80px 64px', background: '#fff' }}>
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

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Prev arrow */}
          {activeGroup > 0 && (
            <button
              onClick={goPrev}
              aria-label="Trước"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex items-center justify-center bg-white text-forest transition-all duration-200 hover:border-forest/40 hover:shadow-md"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(28,59,42,0.15)',
                fontSize: 18,
              }}
            >
              ‹
            </button>
          )}

          {/* Track: flex of 100%-wide pages, translate by -activeGroup * 100% */}
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(-${activeGroup * 100}%)`,
                transition: 'transform 0.45s ease',
              }}
            >
              {groups.map((group, gi) => (
                <div
                  key={gi}
                  className="flex shrink-0"
                  style={{ width: '100%' }}
                >
                  {group.map((t) => (
                    <div
                      key={t.name}
                      className="flex flex-col"
                      style={{
                        width: `${100 / itemsPerView}%`,
                        padding: '0 12px',
                      }}
                    >
                      <TestimonialCard t={t} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Next arrow */}
          {activeGroup < totalGroups - 1 && (
            <button
              onClick={goNext}
              aria-label="Tiếp"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex items-center justify-center bg-white text-forest transition-all duration-200 hover:border-forest/40 hover:shadow-md"
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(28,59,42,0.15)',
                fontSize: 18,
              }}
            >
              ›
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveGroup(i)}
              aria-label={`Trang ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: activeGroup === i ? 24 : 8,
                background: activeGroup === i ? '#1C3B2A' : 'rgba(28,59,42,0.2)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
