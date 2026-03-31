'use client'

const REASONS = [
  {
    emoji: '📄',
    title: 'Báo Cáo Văn Bản Rõ Ràng',
    desc: 'Mọi phương án đều được lập thành tài liệu chi tiết, dễ hiểu — không mơ hồ, không huyền bí, có thể tham chiếu bất cứ lúc nào.',
    delay: 0,
  },
  {
    emoji: '🔬',
    title: 'Kết Hợp Khoa Học',
    desc: 'Phong thủy được nhìn nhận như khoa học môi trường: ánh sáng, gió, tỷ lệ không gian và tâm lý học màu sắc đều được tích hợp.',
    delay: 100,
  },
  {
    emoji: '🗺️',
    title: 'Phục Vụ Toàn Quốc',
    desc: 'Đội ngũ hoạt động tại Hà Nội, TP. HCM và hơn 63 tỉnh thành. Tư vấn online hoặc khảo sát trực tiếp theo yêu cầu.',
    delay: 200,
  },
  {
    emoji: '🤝',
    title: 'Hỗ Trợ Trọn Đời',
    desc: 'Sau bàn giao, chúng tôi vẫn đồng hành: tư vấn cải tạo, giải đáp thắc mắc và cập nhật phương án khi gia đình có biến động.',
    delay: 300,
  },
]

export default function WhyUsSection() {
  return (
    <section
      style={{ padding: 'var(--section-padding)', background: '#0F2318' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-18">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Tại Sao Chọn HH
          </p>
          <h2
            className="text-3xl sm:text-4xl text-white font-semibold mb-3"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Phong Thủy Đúng Nghĩa
          </h2>
          <p
            className="text-white/50 text-sm max-w-md mx-auto leading-6"
            style={{ fontWeight: 300 }}
          >
            Không mê tín, không áp đặt — chỉ có giải pháp khoa học, minh bạch và hiệu quả.
          </p>
        </div>

        {/* 2×2 mosaic grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: 2 }}
        >
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="reveal group transition-all duration-300"
              style={{
                padding: '52px 48px',
                border: '1px solid rgba(200,169,81,0.08)',
                transitionDelay: `${r.delay}ms`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'rgba(200,169,81,0.05)'
                el.style.borderColor = 'rgba(200,169,81,0.2)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.borderColor = 'rgba(200,169,81,0.08)'
              }}
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center transition-all duration-300 mb-6 group-hover:bg-gold/10"
                style={{
                  width: 56,
                  height: 56,
                  border: '1px solid rgba(200,169,81,0.25)',
                  borderRadius: 4,
                  fontSize: 24,
                }}
              >
                {r.emoji}
              </div>

              <h3
                className="text-white font-semibold mb-3"
                style={{ fontFamily: 'var(--font-lora)', fontSize: 18 }}
              >
                {r.title}
              </h3>
              <p
                className="leading-[1.8]"
                style={{
                  fontSize: 13,
                  color: 'rgba(248,246,241,0.55)',
                  fontWeight: 300,
                }}
              >
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
