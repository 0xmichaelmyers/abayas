import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Collections from '@/components/Collections/Collections'
import BrandStory from '@/components/BrandStory/BrandStory'
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import Lookbook from '@/components/Lookbook/Lookbook'
import Testimonials from '@/components/Testimonials/Testimonials'
import HomeFAQs from '@/components/HomeFAQs/HomeFAQs'
import Footer from '@/components/Footer/Footer'

import HouseCodes from '@/components/HouseCodes/HouseCodes'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 bg-[#0a0a0a] isolate">
        <Hero />
        <Collections />
        <HouseCodes />
        <FeaturedProducts />
        <BrandStory />
        <Lookbook />
        <Testimonials />
        <HomeFAQs />
      </main>
      <div className="sticky bottom-0 -z-10">
        <Footer />
      </div>
    </>
  )
}
