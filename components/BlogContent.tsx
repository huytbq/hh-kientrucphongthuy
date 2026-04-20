'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { POSTS } from '@/lib/posts'

const CATEGORIES = [
  { key: 'all', label: 'Tất Cả' },
  { key: 'nha-o', label: 'Nhà Ở' },
  { key: 'kinh-doanh', label: 'Kinh Doanh' },
  { key: 'phong-thuy-co-ban', label: 'Phong Thủy Cơ Bản' },
]

export default function BlogContent() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return POSTS.filter((p) => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory
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
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-forest/35"
            />
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
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`text-xs px-3.5 py-1.5 font-medium transition-colors duration-150 ${
                  activeCategory === cat.key
                    ? 'bg-forest text-white'
                    : 'border border-forest/15 text-forest/60 hover:border-forest/40'
                }`}
                style={{ fontFamily: 'var(--font-josefin)', fontWeight: 600 }}
              >
                {cat.label}
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
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-forest/8 flex flex-col"
                  style={{ borderRadius: 2, textDecoration: 'none', transition: 'transform 0.25s ease, box-shadow 0.25s ease' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 32px rgba(28,59,42,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="flex items-end p-4"
                    style={{ height: 176, background: post.coverColor }}
                  >
                    <span
                      className="inline-block border border-gold/50 text-gold text-[10px] px-2.5 py-1"
                      style={{
                        fontFamily: 'var(--font-josefin)',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                      }}
                    >
                      {post.categoryLabel.toUpperCase()}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-forest/35 text-xs">{post.publishedAt}</span>
                      <span className="text-forest/20 text-xs">·</span>
                      <span className="text-forest/35 text-xs">
                        {post.readTime} phút đọc
                      </span>
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
