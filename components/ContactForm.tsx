'use client'

import { useState, useEffect, useRef } from 'react'
import { useForm } from '@formspree/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import Link from 'next/link'
import { BRAND } from '@/lib/constants'
import { trackEvent, GA_EVENTS } from '@/lib/analytics'

const PROVINCES = [
  'An Giang', 'Bà Rịa – Vũng Tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh',
  'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau',
  'Cần Thơ', 'Cao Bằng', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên',
  'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội', 'Hà Tĩnh',
  'Hải Dương', 'Hải Phòng', 'Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa',
  'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai',
  'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ',
  'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị',
  'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa',
  'Thừa Thiên Huế', 'Tiền Giang', 'TP. Hồ Chí Minh', 'Trà Vinh', 'Tuyên Quang',
  'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái',
]

const SERVICE_TYPES = [
  { value: 'nha-o', label: 'Nhà ở' },
  { value: 'van-phong', label: 'Văn phòng – kinh doanh' },
  { value: 'dat-nen', label: 'Đất nền' },
  { value: 'am-trach', label: 'Âm trạch' },
  { value: 'khac', label: 'Tư vấn khác' },
]

const base =
  'w-full border border-forest/15 bg-white px-4 py-3 text-base text-forest placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150 min-h-[48px]'

type FieldErrors = Partial<Record<'name' | 'phone' | 'email', string>>

function validateField(field: 'name' | 'phone' | 'email', value: string): string | undefined {
  if (field === 'name') {
    if (!value.trim() || value.trim().length < 2)
      return 'Vui lòng nhập họ tên (ít nhất 2 ký tự)'
  } else if (field === 'phone') {
    if (!/^0[35789][0-9]{8}$/.test(value.replace(/\s/g, '')))
      return 'Số điện thoại không hợp lệ (10 số, bắt đầu 0)'
  } else if (field === 'email') {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return 'Email không đúng định dạng'
  }
}

function removeKey<T extends object>(obj: T, key: keyof T): T {
  const next = { ...obj }
  delete next[key]
  return next
}

/* ── Success state ── */
function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{
          background: 'rgba(28,59,42,0.06)',
          border: '2px solid rgba(28,59,42,0.18)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="13" stroke="#1C3B2A" strokeWidth="1.5" />
          <path
            d="M8 14l4 4 8-8"
            stroke="#1C3B2A"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3
        className="text-forest text-xl font-semibold mb-2"
        style={{ fontFamily: 'var(--font-lora)' }}
      >
        Cảm ơn bạn đã liên hệ!
      </h3>
      <p className="text-forest/60 text-sm max-w-sm leading-6 mb-2">
        Chuyên gia HH sẽ phản hồi trong vòng{' '}
        <strong className="text-forest">24 giờ làm việc</strong>.
      </p>
      <p className="text-forest/40 text-xs max-w-sm leading-6 mb-7">
        Trong thời gian chờ, bạn có thể đọc thêm các bài viết kiến thức phong thủy
        tại Blog của chúng tôi.
      </p>
      <Link
        href="/blog"
        className="text-gold text-sm font-medium hover:underline underline-offset-2 transition-colors"
      >
        Đọc Blog →
      </Link>
    </motion.div>
  )
}

/* ── Main form ── */
export default function ContactForm() {
  const [state, handleFormspree] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!)

  const [form, setForm] = useState({
    name: '', phone: '', email: '', serviceType: '', province: '', message: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const [showErrorToast, setShowErrorToast] = useState(false)
  const toastRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  // Show toast when Formspree returns errors
  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length > 0) {
      setShowErrorToast(true)
      clearTimeout(toastRef.current)
      toastRef.current = setTimeout(() => setShowErrorToast(false), 5000)
    }
    return () => clearTimeout(toastRef.current)
  }, [state.errors])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    // Re-validate on change once a field has been touched
    if (touched.has(name) && (name === 'name' || name === 'phone' || name === 'email')) {
      const err = validateField(name, value)
      setErrors((prev) =>
        err ? { ...prev, [name]: err } : removeKey(prev, name as keyof FieldErrors)
      )
    }
  }

  const handleBlur = (field: 'name' | 'phone' | 'email') => {
    setTouched((t) => new Set([...t, field]))
    const err = validateField(field, form[field])
    setErrors((prev) =>
      err ? { ...prev, [field]: err } : removeKey(prev, field)
    )
  }

  const handleRadio = (value: string) =>
    setForm((p) => ({ ...p, serviceType: value }))

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Full client-side validation before submitting
    const nameErr = validateField('name', form.name)
    const phoneErr = validateField('phone', form.phone)
    const emailErr = validateField('email', form.email)
    const newErrors: FieldErrors = {}
    if (nameErr) newErrors.name = nameErr
    if (phoneErr) newErrors.phone = phoneErr
    if (emailErr) newErrors.email = emailErr

    setErrors(newErrors)
    setTouched(new Set(['name', 'phone', 'email']))
    if (Object.keys(newErrors).length > 0) return

    trackEvent(GA_EVENTS.CONTACT_FORM_SUBMIT)
    await handleFormspree(e)
  }

  if (state.succeeded) return <SuccessMessage />

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* Honeypot — hidden from users, Formspree filters bots via this */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} aria-hidden />

      {/* Error toast (Formspree API error) */}
      <AnimatePresence>
        {showErrorToast && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex items-start gap-3 px-4 py-3 text-sm rounded-sm"
            style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#991B1B' }}
          >
            <svg
              width="16" height="16" viewBox="0 0 16 16" fill="none"
              className="mt-0.5 shrink-0"
            >
              <circle cx="8" cy="8" r="7" stroke="#991B1B" strokeWidth="1.5" />
              <path d="M8 5v3.5M8 11h.01" stroke="#991B1B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua số {BRAND.phone}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
            Họ &amp; Tên <span className="text-gold">*</span>
          </label>
          <input
            name="name" type="text"
            placeholder="Nguyễn Văn A"
            value={form.name}
            onChange={handleChange}
            onBlur={() => handleBlur('name')}
            className={base + (errors.name ? ' border-red-400 focus:ring-red-200' : '')}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
            Số Điện Thoại <span className="text-gold">*</span>
          </label>
          <input
            name="phone" type="tel"
            placeholder="09xx xxx xxx"
            value={form.phone}
            onChange={handleChange}
            onBlur={() => handleBlur('phone')}
            className={base + (errors.phone ? ' border-red-400 focus:ring-red-200' : '')}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
          Email
        </label>
        <input
          name="email" type="text"
          placeholder="example@email.com"
          value={form.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          className={base + (errors.email ? ' border-red-400 focus:ring-red-200' : '')}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Radio: Loại dịch vụ */}
      <div>
        <p className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-2.5">
          Loại Tư Vấn
        </p>
        <div className="flex flex-wrap gap-2">
          {SERVICE_TYPES.map((s) => (
            <label
              key={s.value}
              className={`cursor-pointer inline-flex items-center gap-2 border px-3.5 py-2 text-xs font-medium transition-colors duration-150 ${
                form.serviceType === s.value
                  ? 'border-gold bg-gold-pale text-forest'
                  : 'border-forest/15 text-forest/60 hover:border-gold/50'
              }`}
            >
              <input
                type="radio" name="serviceType" value={s.value}
                checked={form.serviceType === s.value}
                onChange={() => handleRadio(s.value)}
                className="sr-only"
              />
              {s.label}
            </label>
          ))}
        </div>
      </div>

      {/* Province */}
      <div>
        <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
          Tỉnh / Thành Phố
        </label>
        <select
          name="province" value={form.province} onChange={handleChange}
          className={base + ' cursor-pointer'}
        >
          <option value="">-- Chọn tỉnh / thành phố --</option>
          {PROVINCES.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
          Mô Tả Nhu Cầu
        </label>
        <textarea
          name="message" rows={4}
          placeholder="Diện tích, năm sinh chủ nhà, vấn đề hiện tại... (tuỳ chọn)"
          value={form.message} onChange={handleChange}
          className={base + ' resize-none'}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-mid disabled:opacity-60 text-white font-semibold py-4 text-sm transition-colors duration-150"
      >
        {state.submitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Đang gửi...
          </>
        ) : (
          <>
            <Send size={16} />
            Gửi Yêu Cầu Tư Vấn
          </>
        )}
      </button>

      <p className="text-center text-forest/40 text-xs">
        Thông tin của bạn được bảo mật hoàn toàn và không chia sẻ cho bên thứ ba.
      </p>
    </form>
  )
}
