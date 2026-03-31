const STEPS = [
  {
    num: '1',
    title: 'Khảo Sát',
    desc: 'Gặp gỡ trao đổi, khảo sát mặt bằng thực địa và thu thập thông tin mệnh, tuổi chủ nhân.',
  },
  {
    num: '2',
    title: 'Phân Tích',
    desc: 'Lập bản đồ năng lượng, phân tích phi tinh, cung bát trạch và các yếu tố ngũ hành.',
  },
  {
    num: '3',
    title: 'Đề Xuất',
    desc: 'Trình bày phương án bố trí tối ưu, hướng cửa, màu sắc, vật liệu và ngày khởi công.',
  },
  {
    num: '4',
    title: 'Bàn Giao & Hỗ Trợ',
    desc: 'Bàn giao báo cáo chi tiết bằng văn bản, giám sát thi công và hỗ trợ tư vấn trọn đời.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Quy Trình
          </p>
          <h2
            className="text-3xl sm:text-4xl text-forest font-semibold"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Chuyên Nghiệp Từng Bước
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-start gap-0">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex lg:flex-col items-start lg:items-center flex-1 gap-0">
              {/* Step + arrow row */}
              <div className="flex lg:flex-col items-center gap-0 w-full">
                <div className="flex lg:flex-row items-center w-full">
                  {/* Circle */}
                  <div className="shrink-0 flex flex-col lg:flex-row items-center">
                    <div
                      className="w-12 h-12 rounded-full bg-forest flex items-center justify-center"
                    >
                      <span
                        className="text-gold font-bold text-lg leading-none"
                        style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700 }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Arrow between steps (horizontal on desktop) */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden lg:flex flex-1 items-center justify-center text-gold text-xl font-bold mx-2"
                      style={{ fontFamily: 'var(--font-josefin)' }}
                      aria-hidden
                    >
                      →
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="lg:text-center mt-5 mb-8 lg:mb-0 px-4 lg:px-3 ml-4 lg:ml-0 border-l-2 border-gold/30 lg:border-l-0 lg:border-t-0 pb-6 lg:pb-0">
                <h3
                  className="text-forest font-semibold text-base mb-2"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-forest/60 text-sm leading-6"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
