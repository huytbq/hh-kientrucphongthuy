import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Liên Hệ',
  description:
    'Liên hệ Kiến Trúc Phong Thủy HH để được tư vấn phong thủy miễn phí. Phản hồi trong 24 giờ làm việc, phục vụ toàn quốc.',
}

const CONTACT_ITEMS = [
  {
    Icon: Phone,
    label: 'Điện thoại / Zalo',
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
  },
  {
    Icon: Mail,
    label: 'Email',
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    Icon: MapPin,
    label: 'Khu vực phục vụ',
    value: BRAND.address,
    href: null,
  },
]

const HOURS = [
  { day: 'Thứ Hai – Thứ Sáu', time: '08:00 – 18:00' },
  { day: 'Thứ Bảy', time: '08:00 – 17:00' },
  { day: 'Chủ Nhật', time: 'Theo lịch hẹn' },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-deep pt-24 lg:pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-gold text-xs tracking-[0.2em] uppercase mb-3"
            style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
          >
            Liên Hệ
          </p>
          <h1
            className="text-4xl sm:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            Bắt Đầu Hành Trình Của Bạn
          </h1>
          <p className="text-white/55 max-w-lg mx-auto text-sm leading-7">
            Điền thông tin bên dưới hoặc gọi trực tiếp — chuyên gia HH
            sẽ phản hồi trong vòng 24 giờ làm việc.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 xl:gap-14 items-start">

            {/* ── Left: Form (3/5) ── */}
            <div className="lg:col-span-3 bg-white border border-forest/8 p-8 lg:p-10">
              <h2
                className="text-forest text-xl font-semibold mb-7"
                style={{ fontFamily: 'var(--font-lora)' }}
              >
                Gửi Yêu Cầu Tư Vấn
              </h2>
              <ContactForm />
            </div>

            {/* ── Right: Info (2/5) ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact info */}
              <div className="bg-white border border-forest/8 p-7">
                <h2
                  className="text-forest text-base font-semibold mb-5"
                  style={{ fontFamily: 'var(--font-lora)' }}
                >
                  Thông Tin Liên Hệ
                </h2>
                <ul className="space-y-5">
                  {CONTACT_ITEMS.map(({ Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <div className="w-9 h-9 bg-gold-pale flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-forest/45 uppercase tracking-widest mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-forest text-sm font-semibold hover:text-gold transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-forest text-sm font-semibold">{value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Working hours */}
              <div className="bg-white border border-forest/8 p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-gold" />
                  <h2
                    className="text-forest text-base font-semibold"
                    style={{ fontFamily: 'var(--font-lora)' }}
                  >
                    Giờ Làm Việc
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {HOURS.map(({ day, time }) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span className="text-forest/60">{day}</span>
                      <span className="text-forest font-medium">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div className="bg-forest border border-forest/8 h-52 flex flex-col items-center justify-center gap-2">
                <MapPin size={28} className="text-gold" />
                <p
                  className="text-white/60 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-josefin)', fontWeight: 300 }}
                >
                  Hà Nội & TP. Hồ Chí Minh
                </p>
                <p className="text-white/30 text-xs">
                  — Nhúng Google Maps sau khi có địa chỉ cụ thể —
                </p>
              </div>

              {/* Free consultation note */}
              <div className="bg-gold-pale border-l-4 border-gold p-5">
                <p className="text-forest text-sm font-semibold mb-1">
                  Tư vấn sơ bộ miễn phí
                </p>
                <p className="text-forest/60 text-xs leading-6">
                  Buổi trao đổi đầu tiên hoàn toàn không mất phí — không ràng buộc,
                  không áp lực. Chúng tôi muốn bạn hiểu rõ trước khi quyết định.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
