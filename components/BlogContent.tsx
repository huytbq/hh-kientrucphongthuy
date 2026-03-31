'use client'

import { useState, useMemo } from 'react'
import { Search, ArrowRight } from 'lucide-react'

const POSTS = [
  {
    title: 'Ngũ Hành Trong Kiến Trúc: Kim – Mộc – Thủy – Hỏa – Thổ Và Cách Áp Dụng',
    excerpt:
      'Năm yếu tố ngũ hành không chỉ là triết học — chúng quy định màu sắc, vật liệu, hình khối và hướng đặt phù hợp cho từng không gian. Hiểu đúng để áp dụng chuẩn.',
    date: '15 tháng 3, 2025',
    category: 'Nhà Ở',
    readTime: '7 phút',
  },
  {
    title: 'Hướng Nhà Theo Tuổi: Cách Tính Cung Phi Và Chọn Hướng Đón Tài Lộc',
    excerpt:
      'Mỗi người thuộc Đông Tứ Cung hoặc Tây Tứ Cung — điều đó quyết định hướng nhà nào phù hợp. Bài hướng dẫn này giúp bạn tự tính và đối chiếu với 8 hướng chính.',
    date: '02 tháng 3, 2025',
    category: 'Hướng Nhà',
    readTime: '9 phút',
  },
  {
    title: 'Phong Thủy Văn Phòng: Bố Trí Bàn Làm Việc, Két Tiền Và Cửa Ra Vào',
    excerpt:
      'Ba yếu tố quyết định vượng khí trong không gian kinh doanh: vị trí bàn tổng giám đốc, hướng miệng két tiền và cung phúc của cửa chính. Sai một chi tiết, cả hệ thống mất thăng bằng.',
    date: '18 tháng 2, 2025',
    category: 'Kinh Doanh',
    readTime: '8 phút',
  },
  {
    title: 'Vật Phẩm Phong Thủy: Đâu Là Khoa Học, Đâu Là Mê Tín?',
    excerpt:
      'Tỳ hưu, thiềm thừ, cây phát tài... không phải vật phẩm nào cũng có tác dụng như quảng cáo. Chuyên gia HH phân tích cơ sở khoa học và triết học đằng sau từng loại.',
    date: '05 tháng 2, 2025',
    category: 'Vật Phẩm',
    readTime: '6 phút',
  },
  {
    title: 'Tuổi Giáp Thìn 2024 Hợp Hướng Nào? Màu Sắc Và Vật Liệu May Mắn',
    excerpt:
      'Người sinh năm Giáp Thìn thuộc mệnh Hỏa — hướng Nam và hướng Đông là cát khí chủ đạo. Phân tích chi tiết theo Bát Trạch và Huyền Không cho nhà ở lẫn văn phòng.',
    date: '20 tháng 1, 2025',
    category: 'Phong Thủy Tuổi',
    readTime: '10 phút',
  },
  {
    title: 'Thiết Kế Phòng Bếp Đúng Phong Thủy: Vị Trí Bếp, Hướng Lửa Và Bố Cục Tam Giác',
    excerpt:
      'Bếp là trung tâm tài lộc và sức khỏe của gia đình. Tìm hiểu nguyên tắc đặt bếp, hướng cổng bếp, quy tắc tam giác bếp – bồn – tủ lạnh theo phong thủy hiện đại.',
    date: '08 tháng 1, 2025',
    category: 'Nhà Ở',
    readTime: '8 phút',
  },
]

const CATEGORIES = ['Tất Cả', 'Nhà Ở', 'Kinh Doanh', 'Hướng Nhà', 'Vật Phẩm', 'Phong Thủy Tuổi']

const GRADIENT_CLASSES = [
  'from-forest-deep to-forest-mid',
  'from-forest to-forest-light',
  'from-forest-mid to-forest',
  'from-forest-deep to-forest',
  'from-forest to-forest-mid',
  'from-forest-light to-forest-deep',
]

export default function BlogContent() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Tất Cả')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return POSTS.filter((p) => {
      const matchCat = activeCategory === 'Tất Cả' || p.category === activeCategory
      const matchSearch =
        !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      return matchCat && matchSearch
    })
  }, [search, activeCategory])

  return (
    <>
      {/* Search + filter bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-forest/8 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 items-center">
          {/* Search */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest/35" />
            <input
              type="search"
              placeholder="Tìm bài viết..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-forest/15 focus:outline-none focus:border-gold placeholder:text-forest/35 text-forest"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 font-medium transition-colors duration-150 ${
                  activeCategory === cat
                    ? 'bg-forest text-white'
                    : 'border border-forest/15 text-forest/60 hover:border-forest/40'
                }`}
                style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600 }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts grid */}
      <div className="py-14 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-forest/40 text-sm">
              Không tìm thấy bài viết phù hợp.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <article
                  key={post.title}
                  className="group bg-white border border-forest/8 hover:border-gold/40 hover:shadow-lg hover:shadow-forest/6 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Thumbnail */}
                  <div
                    className={`h-44 bg-gradient-to-br ${GRADIENT_CLASSES[i % GRADIENT_CLASSES.length]} flex items-end p-4`}
                  >
                    <span
                      className="inline-block border border-gold/50 text-gold text-[10px] px-2.5 py-1"
                      style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600, letterSpacing: '0.1em' }}
                    >
                      {post.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-forest/35 text-xs">{post.date}</span>
                      <span className="text-forest/20 text-xs">·</span>
                      <span className="text-forest/35 text-xs">{post.readTime} đọc</span>
                    </div>

                    <h2
                      className="text-forest text-base font-semibold leading-snug mb-3 line-clamp-2 group-hover:text-forest-mid transition-colors"
                      style={{ fontFamily: 'var(--font-lora)' }}
                    >
                      {post.title}
                    </h2>

                    <p className="text-forest/55 text-sm leading-6 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    <div
                      className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold mt-5 group-hover:gap-2.5 transition-all"
                      style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600 }}
                    >
                      Đọc tiếp <ArrowRight size={13} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
