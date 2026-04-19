'use client'

const IconDocument = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
)

const IconScience = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    <circle cx="12" cy="12" r="10"/>
  </svg>
)

const IconMapPin = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const REASONS = [
  {
    icon: <IconDocument />,
    title: 'Báo Cáo Văn Bản Rõ Ràng',
    desc: 'Mọi phương án đều được lập thành tài liệu chi tiết, dễ hiểu — không mơ hồ, không huyền bí, có thể tham chiếu bất cứ lúc nào.',
    delay: 0,
  },
  {
    icon: <IconScience />,
    title: 'Kết Hợp Khoa Học',
    desc: 'Phong thủy được nhìn nhận như khoa học môi trường: ánh sáng, gió, tỷ lệ không gian và tâm lý học màu sắc đều được tích hợp.',
    delay: 100,
  },
  {
    icon: <IconMapPin />,
    title: 'Phục Vụ Toàn Quốc',
    desc: 'Đội ngũ hoạt động tại Hà Nội, TP. HCM và hơn 63 tỉnh thành. Tư vấn online hoặc khảo sát trực tiếp theo yêu cầu.',
    delay: 200,
  },
  {
    icon: <IconShield />,
    title: 'Hỗ Trợ Trọn Đời',
    desc: 'Sau bàn giao, chúng tôi vẫn đồng hành: tư vấn cải tạo, giải đáp thắc mắc và cập nhật phương án khi gia đình có biến động.',
    delay: 300,
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-[60px] md:py-[100px]" style={{ background: '#0F2318' }}>
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
                padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 48px)',
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
                  background: 'transparent',
                }}
              >
                {r.icon}
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
