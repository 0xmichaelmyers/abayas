import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Collections from '@/components/Collections/Collections'
import BrandStory from '@/components/BrandStory/BrandStory'
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts'
import Lookbook from '@/components/Lookbook/Lookbook'
import Testimonials from '@/components/Testimonials/Testimonials'
import InstagramFeed from '@/components/InstagramFeed/InstagramFeed'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <BrandStory />
        <FeaturedProducts />
        <Lookbook />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  )
}
