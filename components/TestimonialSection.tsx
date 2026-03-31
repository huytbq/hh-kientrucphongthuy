import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Anh Minh Tuấn',
    role: 'Chủ doanh nghiệp, Hà Nội',
    content:
      'Sau khi cải tạo văn phòng theo tư vấn của HH, công việc kinh doanh của tôi cải thiện rõ rệt. Không khí làm việc cũng thoải mái và năng lượng hơn nhiều.',
    initial: 'MT',
  },
  {
    name: 'Chị Lan Hương',
    role: 'Kiến trúc sư, TP. HCM',
    content:
      'Là người trong nghề, tôi rất trân trọng cách HH kết hợp phong thủy và kiến trúc một cách hợp lý, khoa học. Ngôi nhà của tôi vừa đẹp vừa ấm cúng.',
    initial: 'LH',
  },
  {
    name: 'Gia đình anh Đức Thành',
    role: 'Khách hàng nhà ở, Hà Nội',
    content:
      'Đội ngũ rất tận tâm và chuyên nghiệp. Họ giải thích từng bước rõ ràng, không mơ hồ. Gia đình tôi cảm thấy yên tâm và tin tưởng từ đầu đến cuối.',
    initial: 'ĐT',
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 lg:py-28 bg-gold-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-gold text-xs font-semibold uppercase tracking-widest">
            Khách Hàng Nói Gì
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            Niềm Tin Từ Thực Tế
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-sm">
              <Quote size={28} className="text-gold mb-4" />
              <p className="text-forest/70 text-sm leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center text-white text-xs font-bold">
                  {t.initial}
                </div>
                <div>
                  <div className="text-forest font-semibold text-sm">{t.name}</div>
                  <div className="text-forest/50 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
