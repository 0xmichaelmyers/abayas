import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PageHero from '@/components/PageHero/PageHero'
import RevealWrapper from '@/components/RevealWrapper/RevealWrapper'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collections — Abayas',
  description: 'Explore our full range of luxury modest fashion collections.',
}

const collections = [
  { id: 1, src: '/Signature-Abayas-collection-image.png', alt: 'Signature Abayas', title: 'Signature Series', description: 'Crafted to define you' },
  { id: 2, src: '/Occasion-Abayas-collection-image.png', alt: 'Occasion Abayas', title: 'Occasion', description: 'Dressed for every moment' },
  { id: 3, src: '/Embellished-Abayas-collection-image.png', alt: 'Embellished Abayas', title: 'Embellished', description: 'Intricate detail, pure luxury' },
  { id: 4, src: '/Pleated-Abayas-collection-image.png', alt: 'Pleated Abayas', title: 'Pleated', description: 'Fluid grace in every fold' },
  { id: 5, src: '/Minimal-Abayas-collection-image.png', alt: 'Minimal Abayas', title: 'Minimalist', description: 'Understated, effortless elegance' },
  { id: 6, src: '/Statement-Black-collection-image.png', alt: 'Statement Black Abayas', title: 'Statement Black', description: 'Bold. Timeless. Unapologetic.' },
  { id: 7, src: '/Limited-Edition-collection-image.png', alt: 'Limited Edition Abayas', title: 'Limited Edition', description: 'Exclusive pieces, rare beauty' },
  { id: 8, src: '/Evening-Abayas-collection-images.png', alt: 'Evening Abayas', title: 'Evening', description: 'For your most luminous nights' },
];

const getGridClasses = (index: number) => {
  switch (index) {
    case 0: return 'md:col-span-2 md:row-span-2 h-[450px] md:h-[916px]' // 450*2 + 16 gap
    case 1: return 'md:col-span-2 md:row-span-1 h-[450px]'
    case 2: return 'md:col-span-1 md:row-span-1 h-[450px]'
    case 3: return 'md:col-span-1 md:row-span-1 h-[450px]'
    case 4: return 'md:col-span-2 md:row-span-2 h-[450px] md:h-[916px]'
    case 5: return 'md:col-span-1 md:row-span-1 h-[450px]'
    case 6: return 'md:col-span-1 md:row-span-1 h-[450px]'
    case 7: return 'md:col-span-2 md:row-span-1 h-[450px]'
    default: return 'md:col-span-1 md:row-span-1 h-[450px]'
  }
}

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

        <section className="py-[120px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[80px] max-[900px]:px-5 border-t border-[rgba(198,169,107,0.1)]">
          <div className="max-w-[1300px] mx-auto text-center mb-[80px]">
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B] mb-6">
              Shop The Runway
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(44px,6vw,80px)] font-normal text-[#EDEDED] leading-none mb-8">
              All Collections
            </h2>
            <div className="w-[1px] h-[80px] bg-gradient-to-b from-[#C6A96B] to-transparent mx-auto"></div>
          </div>

          <RevealWrapper className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1300px] mx-auto">
            {collections.map((col, index) => {
              const isLarge = index === 0 || index === 4;
              return (
                <Link
                  href="/shop"
                  key={col.id}
                  className={`group relative overflow-hidden block ${getGridClasses(index)} bg-[#111]`}
                >
                  <Image
                    src={col.src}
                    alt={col.alt}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 opacity-75 group-hover:opacity-100"
                    sizes={isLarge ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 25vw"}
                    priority={index < 2}
                  />

                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.4)] to-transparent transition-opacity duration-700 ${isLarge ? 'opacity-90' : 'opacity-[0.85]'}`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute inset-5 border border-white/0 group-hover:border-[#C6A96B]/30 transition-colors duration-700 z-10 pointer-events-none" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col justify-end h-full">
                    <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
                      <h3 className={`font-[family-name:var(--font-display)] font-normal text-[#EDEDED] mb-3 leading-tight transition-colors duration-500 group-hover:text-[#C6A96B] ${isLarge ? 'text-[clamp(36px,3.5vw,54px)]' : 'text-[clamp(26px,2vw,36px)]'}`}>
                        {col.title}
                      </h3>
                      <div className="overflow-hidden mb-6">
                        <p className={`text-[11px] tracking-[0.15em] text-[#C6A96B] uppercase transform opacity-80 group-hover:opacity-100 transition-all duration-500`}>
                          {col.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4 overflow-hidden">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#EDEDED] group-hover:text-white transition-colors duration-300">
                          Shop Collection
                        </span>
                        <div className="w-[40px] h-[1px] bg-[#C6A96B] transform -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
