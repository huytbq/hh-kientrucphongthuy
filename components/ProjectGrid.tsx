'use client'

import { useState } from 'react'
import { MapPin } from 'lucide-react'

const PROJECTS = [
  {
    title: 'Biệt Thự Hiện Đại Vinhomes Riverside',
    location: 'Hà Nội',
    type: 'Nhà Ở',
    year: '2024',
    desc: 'Tối ưu hướng nhà theo mệnh Thổ, bố trí phòng thờ và không gian tiếp khách theo Bát Trạch.',
    tall: true,
  },
  {
    title: 'Trụ Sở Tập Đoàn Logistics ABC',
    location: 'TP. Hồ Chí Minh',
    type: 'Kinh Doanh',
    year: '2024',
    desc: 'Thiết lập cung tài lộc cho phòng giám đốc, tối ưu quầy lễ tân thu hút khách hàng.',
    tall: false,
  },
  {
    title: 'Nhà Phố 5 Tầng Tây Hồ',
    location: 'Hà Nội',
    type: 'Nhà Ở',
    year: '2024',
    desc: 'Cải tạo hướng cửa chính, xử lý cột đâm và điều chỉnh luồng khí thông qua các tầng.',
    tall: false,
  },
  {
    title: 'Resort Nghỉ Dưỡng Cầu Đất',
    location: 'Lâm Đồng',
    type: 'Thiết Kế',
    year: '2023',
    desc: 'Thiết kế tổng thể mặt bằng resort 5 sao, kết hợp cảnh quan tự nhiên với nguyên lý Huyền Không.',
    tall: true,
  },
  {
    title: 'Showroom Ô Tô Cao Cấp',
    location: 'Hà Nội',
    type: 'Kinh Doanh',
    year: '2023',
    desc: 'Bố trí khu trưng bày theo cung sinh khí, cổng ra vào đón tài lộc theo mệnh chủ.',
    tall: false,
  },
  {
    title: 'Căn Hộ Penthouse Sky Villa',
    location: 'TP. Hồ Chí Minh',
    type: 'Thiết Kế',
    year: '2023',
    desc: 'Thiết kế nội thất tích hợp phong thủy cho penthouse 500m², màu sắc theo ngũ hành mệnh Kim.',
    tall: false,
  },
  {
    title: 'Chuỗi Spa Thiên Nhiên Xanh',
    location: 'Hà Nội & TP. HCM',
    type: 'Kinh Doanh',
    year: '2023',
    desc: 'Tư vấn nhất quán cho 3 chi nhánh spa: hướng bàn massage, nguồn nước và cây xanh phong thủy.',
    tall: true,
  },
  {
    title: 'Biệt Thự Sân Vườn Đông Anh',
    location: 'Hà Nội',
    type: 'Nhà Ở',
    year: '2022',
    desc: 'Thiết kế sân vườn phong thủy hoàn chỉnh: hồ cá Koi, tiểu cảnh đá và hướng cổng chính.',
    tall: false,
  },
  {
    title: 'Văn Phòng Coworking Urban Hub',
    location: 'TP. Hồ Chí Minh',
    type: 'Thiết Kế',
    year: '2022',
    desc: 'Thiết kế không gian làm việc sáng tạo theo phong thủy: ánh sáng, lưu thông không khí và cung sinh.',
    tall: false,
  },
]

const FILTERS = ['Tất Cả', 'Nhà Ở', 'Kinh Doanh', 'Thiết Kế']

const TYPE_COLORS: Record<string, string> = {
  'Nhà Ở': 'from-forest-deep via-forest to-forest-mid',
  'Kinh Doanh': 'from-forest-mid to-forest-light',
  'Thiết Kế': 'from-forest to-forest-deep',
}

export default function ProjectGrid() {
  const [active, setActive] = useState('Tất Cả')

  const filtered = PROJECTS.filter(
    (p) => active === 'Tất Cả' || p.type === active
  )

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-xs px-5 py-2 font-semibold tracking-widest uppercase transition-colors duration-150 ${
              active === f
                ? 'bg-forest text-white'
                : 'border border-forest/20 text-forest/60 hover:border-forest/50'
            }`}
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600 }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry-like grid via CSS columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="break-inside-avoid mb-5 group bg-white border border-forest/8 hover:border-gold/40 hover:shadow-lg hover:shadow-forest/6 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Image placeholder */}
            <div
              className={`bg-gradient-to-br ${TYPE_COLORS[project.type] ?? 'from-forest-deep to-forest'} flex flex-col justify-end p-5 ${
                project.tall ? 'h-64' : 'h-44'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className="inline-block border border-gold/50 text-gold text-[10px] px-2.5 py-1"
                  style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600, letterSpacing: '0.1em' }}
                >
                  {project.type.toUpperCase()}
                </span>
                <span
                  className="text-white/40 text-xs"
                  style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
                >
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3
                className="text-forest text-base font-semibold mb-1.5 group-hover:text-forest-mid transition-colors leading-snug"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                {project.title}
              </h3>
              <p className="flex items-center gap-1.5 text-forest/45 text-xs mb-3">
                <MapPin size={11} />
                {project.location}
              </p>
              <p className="text-forest/55 text-xs leading-5">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
