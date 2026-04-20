import HeroSection from '@/components/HeroSection'
import ServiceSection from '@/components/ServiceSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import ProcessSection from '@/components/ProcessSection'
import WhyUsSection from '@/components/WhyUsSection'
import TestimonialSection from '@/components/TestimonialSection'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <FeaturedProjects />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialSection />
      <CTABanner />
    </>
  )
}
