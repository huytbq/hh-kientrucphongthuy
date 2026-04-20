import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS } from '@/lib/posts'
import ReadingProgressBar from '@/components/ReadingProgressBar'
import ShareButtons from '@/components/ShareButtons'
import CTABanner from '@/components/CTABanner'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Không tìm thấy' }
  return {
    title: `${post.title} | HH Phong Thủy`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const parts = post.content.split('<!-- split -->')
  const part1 = parts[0]?.trim() ?? ''
  const part2 = parts[1]?.trim() ?? ''

  const related = POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3)

  const recentPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  const categoryCounts = [
    { key: 'nha-o', label: 'Nhà Ở' },
    { key: 'kinh-doanh', label: 'Kinh Doanh' },
    { key: 'phong-thuy-co-ban', label: 'Phong Thủy Cơ Bản' },
  ].map((c) => ({ ...c, count: POSTS.filter((p) => p.category === c.key).length }))

  const truncTitle =
    post.title.length > 28 ? post.title.slice(0, 28) + '…' : post.title

  return (
    <>
      <ReadingProgressBar />

      {/* Breadcrumb */}
      <div
        style={{
          background: 'white',
          borderBottom: '1px solid rgba(28,59,42,0.08)',
          paddingTop: 80,
        }}
      >
        <div
          className="max-w-7xl mx-auto"
          style={{ padding: '14px clamp(24px, 6vw, 80px)' }}
        >
          <nav
            style={{
              fontSize: 12,
              color: 'rgba(28,59,42,0.45)',
              fontFamily: 'var(--font-josefin)',
            }}
          >
            <Link
              href="/"
              className="hover:text-forest transition-colors"
              style={{ color: 'rgba(28,59,42,0.45)', textDecoration: 'none' }}
            >
              Trang chủ
            </Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <Link
              href="/blog"
              className="hover:text-forest transition-colors"
              style={{ color: 'rgba(28,59,42,0.45)', textDecoration: 'none' }}
            >
              Blog
            </Link>
            <span style={{ margin: '0 6px' }}>›</span>
            <span style={{ color: '#1C3B2A' }}>{truncTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative flex items-end"
        style={{
          background: post.coverColor,
          height: 'clamp(200px, 30vw, 320px)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(15,35,24,0.85) 0%, transparent 60%)',
          }}
        />
        <div
          className="relative z-10 w-full max-w-7xl mx-auto"
          style={{ padding: 'clamp(24px, 4vw, 40px) clamp(24px, 6vw, 80px)' }}
        >
          <span
            className="inline-block mb-3"
            style={{
              fontFamily: 'var(--font-josefin)',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C8A951',
              background: 'rgba(200,169,81,0.15)',
              backdropFilter: 'blur(6px)',
              padding: '4px 12px',
              borderRadius: 20,
              border: '1px solid rgba(200,169,81,0.3)',
            }}
          >
            {post.categoryLabel}
          </span>
          <h1
            className="text-white font-semibold"
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(22px, 3.5vw, 36px)',
              lineHeight: 1.25,
              maxWidth: 700,
              marginBottom: 12,
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.65)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px 14px',
              alignItems: 'center',
            }}
          >
            <span>📅 {post.publishedAt}</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>⏱ {post.readTime} phút đọc</span>
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  padding: '2px 8px',
                  borderRadius: 10,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section style={{ background: '#F8F6F1', padding: 'clamp(48px, 6vw, 72px) 0' }}>
        <div
          className="max-w-7xl mx-auto"
          style={{ padding: '0 clamp(24px, 6vw, 80px)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
            {/* Article */}
            <article
              style={{
                background: 'white',
                padding: 'clamp(28px, 4vw, 48px)',
                borderRadius: 2,
              }}
            >
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: part1 }}
              />

              {/* CTA box mid-article */}
              <div
                style={{
                  background: 'rgba(28,59,42,0.04)',
                  borderLeft: '3px solid #C8A951',
                  borderRadius: '0 8px 8px 0',
                  padding: '24px 28px',
                  margin: '32px 0',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-lora)',
                    fontSize: 17,
                    color: '#0F2318',
                    marginBottom: 12,
                    fontStyle: 'italic',
                    lineHeight: 1.6,
                  }}
                >
                  "Bạn muốn được tư vấn phong thủy cụ thể cho ngôi nhà của mình?"
                </p>
                <Link
                  href="/lien-he"
                  style={{
                    display: 'inline-block',
                    padding: '10px 24px',
                    background: '#1C3B2A',
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    borderRadius: 2,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-josefin)',
                  }}
                >
                  Liên Hệ HH Ngay →
                </Link>
              </div>

              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: part2 }}
              />

              <ShareButtons />
            </article>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 100 }}>
              {/* CTA box */}
              <div
                style={{
                  background: '#1C3B2A',
                  padding: 28,
                  borderRadius: 2,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-lora)',
                    fontSize: 18,
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: 8,
                    lineHeight: 1.4,
                  }}
                >
                  Cần tư vấn phong thủy?
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  Chuyên gia HH phản hồi trong 24h
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 22,
                    fontWeight: 700,
                    color: '#C8A951',
                    marginBottom: 20,
                    letterSpacing: '0.05em',
                  }}
                >
                  0909 xxx xxx
                </div>
                <Link
                  href="/lien-he"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px 0',
                    background: '#C8A951',
                    color: '#0F2318',
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    borderRadius: 2,
                  }}
                >
                  Đặt Lịch Tư Vấn
                </Link>
              </div>

              {/* Recent posts */}
              <div
                style={{
                  background: 'white',
                  padding: 24,
                  borderRadius: 2,
                  marginBottom: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C8A951',
                    marginBottom: 16,
                  }}
                >
                  Bài viết mới nhất
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {recentPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group"
                      style={{
                        display: 'flex',
                        gap: 12,
                        textDecoration: 'none',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          background: p.coverColor,
                          borderRadius: 4,
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ minWidth: 0 }}>
                        <p
                          className="group-hover:text-forest-mid transition-colors line-clamp-2"
                          style={{
                            fontFamily: 'var(--font-lora)',
                            fontSize: 13,
                            fontWeight: 600,
                            color: '#0F2318',
                            lineHeight: 1.45,
                            marginBottom: 4,
                          }}
                        >
                          {p.title}
                        </p>
                        <span
                          style={{ fontSize: 11, color: 'rgba(28,59,42,0.4)' }}
                        >
                          {p.publishedAt}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div style={{ background: 'white', padding: 24, borderRadius: 2 }}>
                <p
                  style={{
                    fontFamily: 'var(--font-josefin)',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C8A951',
                    marginBottom: 16,
                  }}
                >
                  Danh mục
                </p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {categoryCounts.map((cat) => (
                    <Link
                      key={cat.key}
                      href={`/blog?category=${cat.key}`}
                      className="hover:text-forest-mid transition-colors"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(28,59,42,0.06)',
                        textDecoration: 'none',
                        color: '#1C3B2A',
                        fontSize: 14,
                      }}
                    >
                      <span>{cat.label}</span>
                      <span
                        style={{
                          fontSize: 11,
                          background: 'rgba(28,59,42,0.07)',
                          padding: '2px 8px',
                          borderRadius: 10,
                          color: 'rgba(28,59,42,0.55)',
                        }}
                      >
                        {cat.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ background: 'white', padding: 'clamp(48px, 5vw, 72px) 0' }}>
          <div
            className="max-w-7xl mx-auto"
            style={{ padding: '0 clamp(24px, 6vw, 80px)' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-lora)',
                fontSize: 24,
                fontWeight: 600,
                color: '#0F2318',
                marginBottom: 32,
              }}
            >
              Bài Viết Cùng Chủ Đề
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-stretch overflow-hidden"
                  style={{
                    background: '#F8F6F1',
                    borderRadius: 8,
                    border: '1px solid rgba(28,59,42,0.08)',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      background: p.coverColor,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ padding: '16px', flex: 1 }}>
                    <p
                      className="group-hover:text-forest-mid transition-colors line-clamp-2"
                      style={{
                        fontFamily: 'var(--font-lora)',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#0F2318',
                        lineHeight: 1.45,
                        marginBottom: 6,
                      }}
                    >
                      {p.title}
                    </p>
                    <p
                      className="line-clamp-1"
                      style={{
                        fontSize: 12,
                        color: 'rgba(28,59,42,0.5)',
                        lineHeight: 1.5,
                        marginBottom: 8,
                      }}
                    >
                      {p.excerpt}
                    </p>
                    <span style={{ fontSize: 11, color: 'rgba(28,59,42,0.4)' }}>
                      ⏱ {p.readTime} phút đọc
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
