const REASONS = [
  {
    emoji: '📄',
    title: 'Báo Cáo Văn Bản Rõ Ràng',
    desc: 'Mọi phương án đều được lập thành tài liệu chi tiết, dễ hiểu — không mơ hồ, không huyền bí, có thể tham chiếu bất cứ lúc nào.',
  },
  {
    emoji: '🔬',
    title: 'Kết Hợp Khoa Học',
    desc: 'Phong thủy được nhìn nhận như khoa học môi trường: ánh sáng, gió, tỷ lệ không gian và tâm lý học màu sắc đều được tích hợp.',
  },
  {
    emoji: '🗺️',
    title: 'Phục Vụ Toàn Quốc',
    desc: 'Đội ngũ hoạt động tại Hà Nội, TP. HCM và hơn 63 tỉnh thành. Tư vấn online hoặc khảo sát trực tiếp theo yêu cầu.',
  },
  {
    emoji: '🤝',
    title: 'Hỗ Trợ Trọn Đời',
    desc: 'Sau bàn giao, chúng tôi vẫn đồng hành: tư vấn cải tạo, giải đáp thắc mắc và cập nhật phương án khi gia đình có biến động.',
  },
]

export default function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-forest-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Tại Sao Chọn HH
          </p>
          <h2
            className="text-3xl sm:text-4xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Phong Thủy Đúng Nghĩa
          </h2>
          <p
            className="text-white/50 text-sm mt-3 max-w-md mx-auto leading-6"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
          >
            Không mê tín, không áp đặt — chỉ có giải pháp khoa học, minh bạch và hiệu quả.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="bg-forest-deep/60 p-8 lg:p-10 hover:bg-forest-mid/30 transition-colors duration-200"
            >
              <div className="text-3xl mb-5">{r.emoji}</div>
              <h3
                className="text-white text-base font-semibold mb-3"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
              >
                {r.title}
              </h3>
              <p
                className="text-white/50 text-sm leading-7"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
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
