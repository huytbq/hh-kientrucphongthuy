const STEPS = [
  {
    num: '01',
    label: 'Bước 01',
    title: 'Khảo Sát',
    desc: 'Gặp gỡ trao đổi, khảo sát mặt bằng thực địa và thu thập thông tin mệnh, tuổi chủ nhân để lập hồ sơ năng lượng không gian.',
    tag: '~2-3 ngày',
  },
  {
    num: '02',
    label: 'Bước 02',
    title: 'Phân Tích',
    desc: 'Lập bản đồ năng lượng, phân tích phi tinh Huyền Không, cung Bát Trạch và các yếu tố ngũ hành theo đặc thù công trình.',
    tag: '3-5 ngày',
  },
  {
    num: '03',
    label: 'Bước 03',
    title: 'Đề Xuất',
    desc: 'Trình bày phương án bố trí tối ưu, hướng cửa, màu sắc, vật liệu và ngày giờ khởi công theo cung mệnh chủ nhân.',
    tag: '5-7 ngày',
  },
  {
    num: '04',
    label: 'Bước 04',
    title: 'Bàn Giao & Hỗ Trợ',
    desc: 'Bàn giao báo cáo chi tiết bằng văn bản, hỗ trợ giám sát thi công và tư vấn cải tạo, điều chỉnh trong suốt quá trình sử dụng.',
    tag: 'Trọn đời',
  },
]

export default function ProcessSection() {
  return (
    <section style={{ padding: 'var(--section-padding)', background: '#F8F6F1' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Quy Trình
          </p>
          <h2
            className="text-3xl sm:text-4xl text-forest-deep font-semibold"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Chuyên Nghiệp Từng Bước
          </h2>
        </div>

        {/* Zigzag steps */}
        <div>
          {STEPS.map((step, i) => {
            const isOdd = i % 2 === 0
            const revealClass = isOdd ? 'reveal-left' : 'reveal-right'

            return (
              <div
                key={step.num}
                className={`${revealClass} flex flex-col md:flex-row items-center gap-10 md:gap-20 py-14 ${
                  i < STEPS.length - 1 ? 'border-b' : ''
                }`}
                style={{
                  borderColor: 'rgba(28,59,42,0.08)',
                  flexDirection: isOdd ? undefined : 'row-reverse',
                }}
              >
                {/* Number circle */}
                <div
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 180 }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 120,
                      height: 120,
                      border: '2px solid rgba(200,169,81,0.3)',
                      borderRadius: '50%',
                      animation: 'borderPulse 3s ease infinite',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-josefin)',
                        fontSize: 48,
                        fontWeight: 700,
                        color: 'rgba(200,169,81,0.9)',
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p
                    className="text-gold uppercase tracking-widest mb-2"
                    style={{ fontSize: 10, fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
                  >
                    {step.label}
                  </p>
                  <h3
                    className="text-forest-deep font-semibold mb-3.5"
                    style={{ fontFamily: 'var(--font-lora)', fontSize: 26 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-forest/60"
                    style={{ fontSize: 14, lineHeight: 1.9, maxWidth: 460, fontWeight: 300 }}
                  >
                    {step.desc}
                  </p>
                  <span
                    className="inline-block mt-4 text-forest"
                    style={{
                      background: 'rgba(28,59,42,0.06)',
                      fontSize: 11,
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontWeight: 500,
                    }}
                  >
                    {step.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
