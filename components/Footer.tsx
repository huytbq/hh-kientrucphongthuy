import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { BRAND, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-forest-deep text-lg">
                HH
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">Kiến Trúc</div>
                <div className="text-gold text-xs font-medium">Phong Thủy HH</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {BRAND.slogan}
            </p>
            <p className="text-white/50 text-xs mt-3">
              Kết hợp triết học phương Đông với kiến trúc hiện đại,<br />
              tạo ra không gian sống hài hòa và thịnh vượng.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Trang
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-semibold text-sm uppercase tracking-widest mb-4">
              Liên Hệ
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold text-sm transition-colors"
                >
                  <Phone size={15} className="text-gold shrink-0" />
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold text-sm transition-colors"
                >
                  <Mail size={15} className="text-gold shrink-0" />
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                {BRAND.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} {BRAND.name}. Bảo lưu mọi quyền.
          </p>
          <p className="text-white/30 text-xs">
            Thiết kế bởi đội ngũ {BRAND.shortName}
          </p>
        </div>
      </div>
    </footer>
  )
}
