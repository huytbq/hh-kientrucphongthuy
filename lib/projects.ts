export interface Project {
  id: string
  slug: string
  title: string
  location: string
  type: 'nha-o' | 'kinh-doanh' | 'thiet-ke'
  typeLabel: string
  year: number
  area: string
  description: string
  tags: string[]
  coverColor: string
}

export const PROJECTS: Project[] = [
  // ── Nhà ở ──────────────────────────────────────────────────────────
  {
    id: 'biet-thu-vinhomes',
    slug: 'biet-thu-vinhomes-riverside',
    title: 'Biệt Thự Vinhomes Riverside',
    location: 'Long Biên, Hà Nội',
    type: 'nha-o',
    typeLabel: 'Nhà Ở',
    year: 2024,
    area: '280m²',
    description:
      'Căn biệt thự mệnh Thổ được tư vấn hướng Nam lệch Tây theo Bát Trạch, bố trí phòng thờ và không gian tiếp khách đúng cung sinh khí. Điểm nhấn là hồ nước phong thủy phía trước cổng, kết hợp cây xanh che chắn góc sát.',
    tags: ['Hướng Nam', 'Bát Trạch', 'Mệnh Thổ', 'Hồ Koi'],
    coverColor: 'linear-gradient(135deg, #1C3B2A 0%, #3D7057 100%)',
  },
  {
    id: 'nha-pho-quan7',
    slug: 'nha-pho-quan-7-tp-hcm',
    title: 'Nhà Phố 5 Tầng Quận 7',
    location: 'Quận 7, TP. Hồ Chí Minh',
    type: 'nha-o',
    typeLabel: 'Nhà Ở',
    year: 2024,
    area: '180m²',
    description:
      'Nhà phố lô góc được thiết kế lại luồng khí thông qua 5 tầng: cầu thang xoắn được dời vị trí tránh cung sát, bếp và phòng ngủ bố trí theo mệnh Mộc của gia chủ. Màu sắc nội thất chọn tông xanh lá và gỗ tự nhiên.',
    tags: ['Nhà Phố', 'Mệnh Mộc', 'Cải Tạo', 'Cầu Thang'],
    coverColor: 'linear-gradient(135deg, #1C2E3B 0%, #2A4A5A 100%)',
  },
  {
    id: 'nha-mat-bien-danang',
    slug: 'nha-mat-bien-da-nang',
    title: 'Nhà Ở Mặt Biển Mỹ Khê',
    location: 'Sơn Trà, Đà Nẵng',
    type: 'nha-o',
    typeLabel: 'Nhà Ở',
    year: 2023,
    area: '160m²',
    description:
      'Ngôi nhà nhìn ra biển được tư vấn hài hòa giữa hướng gió biển và hướng tốt theo mệnh gia chủ. Cửa chính quay vào khu vực sinh khí, không gian khách mở rộng tối đa đón ánh sáng và gió biển tự nhiên.',
    tags: ['Mặt Biển', 'Hướng Đông', 'Ngũ Hành', 'Không Gian Mở'],
    coverColor: 'linear-gradient(135deg, #1C3B35 0%, #2A6B5E 100%)',
  },

  // ── Kinh doanh ─────────────────────────────────────────────────────
  {
    id: 'cafe-the-alchemy',
    slug: 'cafe-the-alchemy-ha-noi',
    title: 'Café The Alchemy',
    location: 'Tây Hồ, Hà Nội',
    type: 'kinh-doanh',
    typeLabel: 'Kinh Doanh',
    year: 2024,
    area: '120m²',
    description:
      'Quán café phong cách Wabi-sabi được tư vấn phong thủy từ giai đoạn setup: quầy thu ngân đặt đúng cung tài lộc, bàn ghế bố trí theo luồng khách hàng tự nhiên. Doanh thu tăng rõ rệt sau 3 tháng khai trương theo phản hồi của chủ quán.',
    tags: ['Tài Lộc', 'Quầy Thu Ngân', 'Luồng Khách', 'F&B'],
    coverColor: 'linear-gradient(135deg, #3B2A1C 0%, #6B4A2A 100%)',
  },
  {
    id: 'van-phong-techcorp',
    slug: 'van-phong-techcorp-hcm',
    title: 'Văn Phòng TechCorp Vietnam',
    location: 'Quận 1, TP. Hồ Chí Minh',
    type: 'kinh-doanh',
    typeLabel: 'Kinh Doanh',
    year: 2023,
    area: '320m²',
    description:
      'Văn phòng 80 nhân sự được bố trí lại toàn bộ: phòng giám đốc xoay hướng tốt theo mệnh Kim, khu tiếp khách đón sinh khí từ cửa chính. Góc cây xanh và nguồn nước chảy được đặt để kích hoạt cung tài vượng.',
    tags: ['Văn Phòng', 'Mệnh Kim', 'Sinh Khí', 'Cây Xanh'],
    coverColor: 'linear-gradient(135deg, #1C1C3B 0%, #2A2A6B 100%)',
  },
  {
    id: 'cua-hang-noi-that',
    slug: 'cua-hang-noi-that-da-nang',
    title: 'Showroom Nội Thất Nhật Hoa',
    location: 'Hải Châu, Đà Nẵng',
    type: 'kinh-doanh',
    typeLabel: 'Kinh Doanh',
    year: 2023,
    area: '200m²',
    description:
      'Showroom nội thất cao cấp được tối ưu luồng di chuyển của khách theo nguyên lý phong thủy thương mại. Mặt tiền và biển hiệu được thiết kế đúng màu sắc ngũ hành hỗ trợ mệnh chủ, cổng ra vào đón khí từ đường lớn.',
    tags: ['Showroom', 'Mặt Tiền', 'Màu Sắc', 'Thương Mại'],
    coverColor: 'linear-gradient(135deg, #2A1C3B 0%, #4A2A6B 100%)',
  },

  // ── Thiết kế kiến trúc ──────────────────────────────────────────────
  {
    id: 'biet-thu-lam-dong',
    slug: 'biet-thu-nghi-duong-lam-dong',
    title: 'Biệt Thự Nghỉ Dưỡng Cầu Đất',
    location: 'Đức Trọng, Lâm Đồng',
    type: 'thiet-ke',
    typeLabel: 'Thiết Kế',
    year: 2022,
    area: '450m²',
    description:
      'Biệt thự nghỉ dưỡng 5 phòng ngủ được thiết kế tổng thể kết hợp cảnh quan cao nguyên và nguyên lý Huyền Không. Hướng chính Đông Nam đón khí lành, không gian bơi và vườn được bố trí theo cung vượng sinh.',
    tags: ['Huyền Không', 'Hướng Đông Nam', 'Nghỉ Dưỡng', 'Cảnh Quan'],
    coverColor: 'linear-gradient(135deg, #3B3520 0%, #6B5F35 100%)',
  },
  {
    id: 'nha-pho-4-tang-ha-noi',
    slug: 'nha-pho-4-tang-cau-giay',
    title: 'Nhà Phố 4 Tầng Cầu Giấy',
    location: 'Cầu Giấy, Hà Nội',
    type: 'thiet-ke',
    typeLabel: 'Thiết Kế',
    year: 2022,
    area: '200m²',
    description:
      'Thiết kế kiến trúc tích hợp phong thủy từ giai đoạn concept: mặt bằng từng tầng được tối ưu theo cung vị, cầu thang đặt đúng vị trí không phá khí chủ sơn. Kết quả là không gian sống thông thoáng, sáng sủa và hài hòa năng lượng.',
    tags: ['Tích Hợp Bản Vẽ', 'Mặt Bằng', 'Cầu Thang', 'Concept'],
    coverColor: 'linear-gradient(135deg, #0F2318 0%, #1C5A3A 100%)',
  },
  {
    id: 'can-ho-cao-cap-hcm',
    slug: 'can-ho-penthouse-quan-binh-thanh',
    title: 'Penthouse Quận Bình Thạnh',
    location: 'Bình Thạnh, TP. Hồ Chí Minh',
    type: 'thiet-ke',
    typeLabel: 'Thiết Kế',
    year: 2022,
    area: '130m²',
    description:
      'Căn penthouse tầng 28 được thiết kế nội thất theo phong thủy mệnh Kim: màu trắng-xám-vàng, kim loại và đá cẩm thạch làm chủ đạo. Hướng ban công Tây Nam đón ánh sáng chiều và tầm nhìn toàn cảnh sông Sài Gòn.',
    tags: ['Penthouse', 'Mệnh Kim', 'Nội Thất', 'Tầm Nhìn Sông'],
    coverColor: 'linear-gradient(135deg, #1C2A3B 0%, #2A4A6B 100%)',
  },
]
