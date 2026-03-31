import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ['', '/dich-vu', '/cong-trinh', '/blog', '/lien-he']

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
