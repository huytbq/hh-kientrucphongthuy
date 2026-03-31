import Link from 'next/link'

const SERVICES = [
  {
    num: '01',
    title: 'Phong Thủy Nhà Ở',
    desc: 'Phân tích năng lượng không gian sống, bố trí nội thất và hướng nhà theo mệnh chủ nhân, mang lại sức khỏe và thịnh vượng bền vững.',
    price: 'Từ 3,000,000đ',
    href: '/dich-vu',
  },
  {
    num: '02',
    title: 'Phong Thủy Kinh Doanh',
    desc: 'Tối ưu hóa văn phòng, mặt bằng thương mại theo nguyên lý tài lộc, thu hút khách hàng và nâng cao hiệu suất kinh doanh.',
    price: 'Từ 5,000,000đ',
    href: '/dich-vu',
  },
  {
    num: '03',
    title: 'Thiết Kế Kiến Trúc',
    desc: 'Tích hợp phong thủy từ giai đoạn bản vẽ, tạo ra công trình hài hòa âm dương, đúng hướng, đúng cung — đẹp và vượng khí.',
    price: 'Liên hệ báo giá',
    href: '/dich-vu',
  },
]

export default function ServiceSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
            >
              Dịch Vụ
            </p>
            <h2
              className="text-3xl sm:text-4xl text-forest font-semibold leading-snug"
              style={{ fontFamily: 'var(--font-lora)' }}
            >
              Giải Pháp Phong Thủy<br />Toàn Diện
            </h2>
          </div>
          <Link
            href="/dich-vu"
            className="hidden sm:inline-flex items-center gap-1.5 text-forest/60 hover:text-gold text-sm font-medium transition-colors duration-150 whitespace-nowrap pb-1"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Xem tất cả →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-forest/10">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`group relative p-8 lg:p-10 border-forest/10 hover:-translate-y-1 hover:border-forest-light hover:shadow-lg hover:shadow-forest/8 transition-all duration-300 cursor-pointer ${
                i < SERVICES.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
              }`}
              style={{ background: '#fff' }}
            >
              {/* Big number */}
              <div
                className="text-7xl leading-none font-bold text-gold-pale mb-4 select-none"
                style={{ fontFamily: 'var(--font-josefin)', fontWeight: 700 }}
              >
                {s.num}
              </div>

              {/* Forest rule line */}
              <div className="w-8 h-0.5 bg-forest mb-5 group-hover:w-14 transition-all duration-300" />

              {/* Title */}
              <h3
                className="text-xl text-forest font-semibold mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {s.title}
              </h3>

              {/* Desc */}
              <p
                className="text-forest/60 text-sm leading-7 mb-6"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300 }}
              >
                {s.desc}
              </p>

              {/* Price tag */}
              <span
                className="inline-block border border-gold/50 text-gold text-xs px-3 py-1"
                style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600 }}
              >
                {s.price}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile "xem tất cả" */}
        <div className="sm:hidden text-center mt-8">
          <Link
            href="/dich-vu"
            className="text-forest text-sm font-medium hover:text-gold transition-colors"
          >
            Xem tất cả dịch vụ →
          </Link>
        </div>
      </div>
    </section>
  )
}
