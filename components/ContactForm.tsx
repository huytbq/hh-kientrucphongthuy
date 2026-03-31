'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

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

type Status = 'idle' | 'loading' | 'success' | 'error'

const base =
  'w-full border border-forest/15 bg-white px-4 py-3 text-sm text-forest placeholder:text-forest/40 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors duration-150'

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', serviceType: '', province: '', message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleRadio = (value: string) =>
    setForm((p) => ({ ...p, serviceType: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId || formspreeId === 'your_form_id') {
      // Dev mode: simulate success
      await new Promise((r) => setTimeout(r, 800))
      setStatus('success')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          _subject: `[HH] Yêu cầu tư vấn từ ${form.name}`,
        }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-gold mb-4" />
        <h3
          className="text-forest text-xl font-semibold mb-2"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Gửi thành công!
        </h3>
        <p className="text-forest/60 text-sm max-w-sm leading-6">
          Chuyên gia HH sẽ liên hệ lại với bạn trong vòng{' '}
          <strong className="text-forest">24 giờ làm việc</strong>. Cảm ơn bạn đã tin tưởng!
        </p>
        <button
          onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', serviceType: '', province: '', message: '' }) }}
          className="mt-6 text-gold text-sm underline underline-offset-2"
        >
          Gửi yêu cầu khác
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Error toast */}
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
          <AlertCircle size={16} className="shrink-0" />
          Gửi thất bại. Vui lòng thử lại hoặc liên hệ trực tiếp qua điện thoại.
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
            Họ & Tên <span className="text-gold">*</span>
          </label>
          <input
            name="name" type="text" required
            placeholder="Nguyễn Văn A"
            value={form.name} onChange={handleChange}
            className={base}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
            Số Điện Thoại <span className="text-gold">*</span>
          </label>
          <input
            name="phone" type="tel" required
            placeholder="09xx xxx xxx"
            value={form.phone} onChange={handleChange}
            className={base}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-semibold text-forest/70 uppercase tracking-widest mb-1.5">
          Email
        </label>
        <input
          name="email" type="email"
          placeholder="example@email.com"
          value={form.email} onChange={handleChange}
          className={base}
        />
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
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 bg-forest hover:bg-forest-mid disabled:opacity-60 text-white font-semibold py-4 text-sm transition-colors duration-150"
      >
        {status === 'loading' ? (
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
