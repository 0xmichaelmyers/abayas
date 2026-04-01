import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PageHero from '@/components/PageHero/PageHero'
import RevealWrapper from '@/components/RevealWrapper/RevealWrapper'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections — Modesty',
  description: 'Explore our full range of luxury modest fashion collections.',
}

const collections = [
  { id: 1, src: '/collection-1.png', alt: 'Luxury Abayas', title: 'Luxury Abayas', description: 'Timeless elegance reimagined', count: '24 pieces' },
  { id: 2, src: '/collection-2.png', alt: 'Premium Hijabs', title: 'Premium Hijabs', description: 'Silk and cashmere collection', count: '18 pieces' },
  { id: 3, src: '/collection-3.png', alt: 'Evening Wear', title: 'Evening Wear', description: 'For your special moments', count: '12 pieces' },
  { id: 4, src: '/collection-1.png', alt: 'Bridal Collection', title: 'Bridal Collection', description: 'Crafted for your sacred day', count: '9 pieces' },
  { id: 5, src: '/collection-2.png', alt: 'Chadars', title: 'Chadars', description: 'Draped in grace and tradition', count: '15 pieces' },
  { id: 6, src: '/collection-3.png', alt: 'New Arrivals', title: 'New Arrivals', description: 'Fresh from our ateliers', count: '8 pieces' },
]

const categories = ['All', 'Abayas', 'Hijabs', 'Chadars', 'Evening Wear', 'Bridal']

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Collections"
          title="Collections"
          subtitle="Curated modest luxury for every occasion"
          image="/collection-1.png"
        />

        {/* Filter Bar */}
        <div className="bg-[#111111] border-b border-[rgba(184,150,90,0.1)] py-5 px-[60px] max-[900px]:px-6">
          <div className="max-w-[1200px] mx-auto flex gap-8 overflow-x-auto">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-[9px] tracking-[0.3em] uppercase whitespace-nowrap pb-1 transition-colors duration-300 border-b cursor-pointer bg-transparent ${
                  i === 0
                    ? 'text-[#C6A96B] border-[#C6A96B]'
                    : 'text-[rgba(237,237,237,0.5)] border-transparent hover:text-[#EDEDED]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="py-[80px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[60px] max-[900px]:px-6">
          <RevealWrapper className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[3px] max-w-[1200px] mx-auto">
            {collections.map((col) => (
              <Link key={col.id} href="/shop" className="group relative overflow-hidden aspect-[3/4] cursor-pointer block no-underline">
                <div className="relative w-full h-full">
                  <Image
                    src={col.src}
                    alt={col.alt}
                    fill
                    className="object-cover brightness-75 transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.06] group-hover:brightness-60"
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.88)] to-transparent flex flex-col justify-end p-[30px]">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.5)] mb-2">{col.count}</p>
                  <h3 className="font-[family-name:var(--font-display)] text-[26px] font-normal text-[#EDEDED] mb-[6px]">{col.title}</h3>
                  <p className="text-[11px] tracking-[0.1em] text-[rgba(237,237,237,0.7)] mb-[14px]">{col.description}</p>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A96B] border-b border-[#8a6d3c] pb-[2px] inline-block opacity-0 translate-y-[6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Shop Now
                  </span>
                </div>
              </Link>
            ))}
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
