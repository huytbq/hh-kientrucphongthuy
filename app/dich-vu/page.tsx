'use client'

import { useState } from 'react'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

/* ── Pricing data ── */
const PLANS = [
  {
    emoji: '🏠',
    title: 'Phong Thủy Nhà Ở',
    tag: 'Dành cho hộ gia đình',
    price: 'Từ 3,000,000đ',
    priceSub: 'Chưa bao gồm chi phí đi lại ngoài Hà Nội/HCM',
    highlight: false,
    features: [
      'Khảo sát thực địa (1 buổi)',
      'Phân tích hướng nhà theo mệnh',
      'Bố cục phòng ngủ, bếp, phòng khách',
      'Báo cáo PDF chi tiết',
      'Hỗ trợ tư vấn 30 ngày sau',
      '1 lần điều chỉnh miễn phí',
    ],
  },
  {
    emoji: '🏢',
    title: 'Phong Thủy Kinh Doanh',
    tag: 'Dành cho doanh nghiệp',
    price: 'Từ 5,000,000đ',
    priceSub: 'Chưa bao gồm chi phí đi lại ngoài Hà Nội/HCM',
    highlight: true,
    badge: 'Phổ Biến Nhất',
    features: [
      'Khảo sát văn phòng/cửa hàng',
      'Phân tích cung tài lộc, vượng khí',
      'Bố trí bàn GĐ, quầy lễ tân, két tiền',
      'Màu sắc thương hiệu theo ngũ hành',
      'Báo cáo PDF + sơ đồ mặt bằng',
      'Hỗ trợ tư vấn 60 ngày sau',
    ],
  },
  {
    emoji: '⚱️',
    title: 'Âm Trạch Phong Thủy',
    tag: 'Tư vấn mộ phần, đất tổ',
    price: 'Liên hệ báo giá',
    priceSub: 'Tùy thuộc khoảng cách và quy mô công trình',
    highlight: false,
    features: [
      'Khảo sát địa hình, long mạch',
      'Xác định huyệt vị, hướng táng',
      'Phân tích ảnh hưởng đến hậu duệ',
      'Chọn ngày giờ cát lành',
      'Báo cáo chi tiết bằng văn bản',
      'Hỗ trợ tư vấn trọn quá trình',
    ],
  },
  {
    emoji: '📐',
    title: 'Thiết Kế Kiến Trúc',
    tag: 'Tích hợp từ bản vẽ',
    price: 'Liên hệ báo giá',
    priceSub: 'Tùy quy mô và giai đoạn thiết kế',
    highlight: false,
    features: [
      'Tư vấn từ giai đoạn concept',
      'Định hướng mặt bằng tổng thể',
      'Hài hòa âm dương, ngũ hành',
      'Phối hợp với kiến trúc sư',
      'Giám sát thi công theo yêu cầu',
      'Bàn giao hồ sơ phong thủy đầy đủ',
    ],
  },
  {
    emoji: '🛋️',
    title: 'Nội Thất Phong Thủy',
    tag: 'Màu sắc, vật liệu, bố trí',
    price: 'Từ 2,000,000đ',
    priceSub: 'Chưa bao gồm chi phí đi lại ngoài Hà Nội/HCM',
    highlight: false,
    features: [
      'Phân tích mệnh chủ theo ngũ hành',
      'Chọn màu sắc tường, sàn, nội thất',
      'Hướng đặt giường, bàn làm việc',
      'Tư vấn cây xanh, vật phẩm phong thủy',
      'Báo cáo PDF + bảng màu gợi ý',
      'Hỗ trợ tư vấn 30 ngày sau',
    ],
  },
  {
    emoji: '💻',
    title: 'Tư Vấn Online',
    tag: 'Linh hoạt mọi nơi',
    price: 'Từ 1,000,000đ',
    priceSub: 'Qua Zalo, Zoom hoặc Google Meet',
    highlight: false,
    features: [
      'Tư vấn qua video call 60–90 phút',
      'Phân tích dựa trên ảnh/bản vẽ',
      'Phù hợp khách hàng ngoại tỉnh',
      'Phản hồi trong 24 giờ làm việc',
      'Báo cáo tóm tắt sau buổi tư vấn',
      'Đặt lịch linh hoạt 7 ngày/tuần',
    ],
  },
]

/* ── FAQ data ── */
const FAQS = [
  {
    q: 'Phong thủy kiến trúc khác gì so với phong thủy thông thường?',
    a: 'Phong thủy kiến trúc tích hợp các nguyên lý phong thủy trực tiếp vào thiết kế và bố cục không gian — hướng nhà, vị trí phòng, luồng khí — thay vì chỉ đặt vật phẩm. Phương pháp này có tác động bền vững và khoa học hơn.',
  },
  {
    q: 'Một buổi tư vấn thường kéo dài bao lâu?',
    a: 'Tư vấn khảo sát thực địa thường mất 2–3 giờ tại công trình. Sau đó chúng tôi mất 3–5 ngày để lập báo cáo chi tiết. Tổng thời gian từ lúc đặt lịch đến nhận báo cáo thường là 7–10 ngày làm việc.',
  },
  {
    q: 'HH có thể tư vấn cho nhà đang xây dở hoặc nhà cũ không?',
    a: 'Có. Chúng tôi tư vấn được cho tất cả giai đoạn: từ khi chọn đất, đang xây dựng, đến nhà đã hoàn thiện. Nhà cũ sẽ được đánh giá và đưa ra giải pháp hóa giải, điều chỉnh phù hợp mà không cần đập phá lớn.',
  },
  {
    q: 'Có cần tin vào phong thủy mới được tư vấn không?',
    a: 'Không cần. HH tiếp cận phong thủy như một hệ thống tổ chức không gian dựa trên ánh sáng, gió, tỷ lệ và tâm lý học môi trường. Nhiều khách hàng của chúng tôi ban đầu hoài nghi nhưng vẫn hài lòng với kết quả thực tế.',
  },
  {
    q: 'Làm thế nào để biết gói dịch vụ nào phù hợp với tôi?',
    a: 'Hãy liên hệ với chúng tôi để được tư vấn miễn phí ban đầu qua điện thoại hoặc Zalo. Dựa trên nhu cầu, quy mô và ngân sách, chuyên gia HH sẽ đề xuất gói phù hợp nhất — không có gói nào là "một size vừa tất cả".',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(28,59,42,0.08)' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span
          className="text-forest-deep font-medium"
          style={{ fontSize: 15, fontFamily: 'var(--font-lora)' }}
        >
          {q}
        </span>
        <span
          className="shrink-0 text-gold transition-transform duration-200"
          style={{
            fontSize: 20,
            lineHeight: 1,
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </button>
      {open && (
        <p
          className="pb-5 text-forest/60"
          style={{ fontSize: 14, lineHeight: 1.85, fontWeight: 300 }}
        >
          {a}
        </p>
      )}
    </div>
  )
}

export default function ServicePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: 'var(--forest-gradient)',
          padding: 'clamp(80px, 10vw, 120px) clamp(24px, 6vw, 80px) clamp(48px, 5vw, 80px)',
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Dịch Vụ
          </p>
          <h1
            className="text-white font-semibold mb-4"
            style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              lineHeight: 1.15,
            }}
          >
            Dịch Vụ Phong Thủy Kiến Trúc HH
          </h1>
          <p
            className="max-w-xl mx-auto"
            style={{ fontSize: 14, color: 'rgba(248,246,241,0.6)', lineHeight: 1.8 }}
          >
            Giải pháp toàn diện từ tư vấn, thiết kế đến giám sát — được đội ngũ 15+ năm kinh nghiệm thực hiện với báo cáo rõ ràng, khoa học.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PLANS.map((plan) => (
              <div
                key={plan.title}
                className="relative flex flex-col overflow-hidden"
                style={{
                  border: `1px solid ${plan.highlight ? '#C8A951' : 'rgba(28,59,42,0.1)'}`,
                  borderRadius: 8,
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div
                    className="absolute top-4 right-4 z-10"
                    style={{
                      background: '#C8A951',
                      color: '#0F2318',
                      fontSize: 10,
                      fontFamily: 'var(--font-josefin)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: 2,
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Card header */}
                <div style={{ background: '#0F2318', padding: '28px 32px' }}>
                  <div className="text-3xl mb-3">{plan.emoji}</div>
                  <h2
                    className="text-white font-semibold mb-1"
                    style={{ fontFamily: 'var(--font-lora)', fontSize: 22 }}
                  >
                    {plan.title}
                  </h2>
                  <span
                    style={{
                      fontSize: 12,
                      color: 'rgba(248,246,241,0.45)',
                      fontWeight: 300,
                    }}
                  >
                    {plan.tag}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Price */}
                  <span
                    className="block text-gold mb-1"
                    style={{
                      fontFamily: 'var(--font-lora)',
                      fontSize: 28,
                      fontStyle: 'italic',
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="block text-forest/40 mb-5"
                    style={{ fontSize: 12, fontWeight: 300 }}
                  >
                    {plan.priceSub}
                  </span>

                  {/* Divider */}
                  <div
                    className="mb-5"
                    style={{ borderTop: '1px solid rgba(28,59,42,0.08)' }}
                  />

                  {/* Features */}
                  <ul className="flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 py-1.5"
                        style={{
                          borderBottom: '1px dashed rgba(28,59,42,0.06)',
                          fontSize: 13,
                        }}
                      >
                        <span className="text-forest font-bold shrink-0 mt-0.5">✓</span>
                        <span className="text-forest/70">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/lien-he"
                    className="flex items-center justify-center font-bold uppercase text-[11px] tracking-widest transition-all duration-200 mb-3"
                    style={{
                      fontFamily: 'var(--font-josefin)',
                      background: plan.highlight ? '#C8A951' : '#1C3B2A',
                      color: plan.highlight ? '#0F2318' : '#fff',
                      padding: '14px 0',
                      borderRadius: 2,
                    }}
                  >
                    Đặt Lịch Tư Vấn
                  </Link>
                  <Link
                    href="/lien-he"
                    className="text-center text-forest/50 hover:text-forest transition-colors"
                    style={{ fontSize: 12 }}
                  >
                    Xem chi tiết →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#F8F6F1' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p
              className="text-gold text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
            >
              Câu Hỏi Thường Gặp
            </p>
            <h2
              className="text-forest-deep font-semibold"
              style={{ fontFamily: 'var(--font-lora)', fontSize: 32 }}
            >
              Bạn Còn Băn Khoăn?
            </h2>
          </div>
          <div>
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
