"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const collections = [
  { id: 1, src: '/Signature-Abayas-collection-image.png', alt: 'Signature Abayas', title: 'Signature Series', description: 'Crafted to define you' },
  { id: 2, src: '/Occasion-Abayas-collection-image.png', alt: 'Occasion Abayas', title: 'Occasion', description: 'Dressed for every moment' },
  { id: 3, src: '/Embellished-Abayas-collection-image.png', alt: 'Embellished Abayas', title: 'Embellished', description: 'Intricate detail, pure luxury' },
  { id: 4, src: '/Pleated-Abayas-collection-image.png', alt: 'Pleated Abayas', title: 'Pleated', description: 'Fluid grace in every fold' },
  { id: 5, src: '/Minimal-Abayas-collection-image.png', alt: 'Minimal Abayas', title: 'Minimalist', description: 'Understated, effortless elegance' },
  { id: 6, src: '/Statement-Black-collection-image.png', alt: 'Statement Black Abayas', title: 'Statement Black', description: 'Bold. Timeless. Unapologetic.' },
  { id: 7, src: '/Limited-Edition-collection-image.png', alt: 'Limited Edition Abayas', title: 'Limited Edition', description: 'Exclusive pieces, rare beauty' },
  { id: 8, src: '/Evening-Abayas-collection-images.png', alt: 'Evening Abayas', title: 'Evening', description: 'For your most luminous nights' },
]

export default function Collections() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -400 : 400
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-[120px] bg-[#0a0a0a] border-t border-[rgba(198,169,107,0.1)] relative overflow-hidden" id="collections">
      <div className="px-[60px] max-[900px]:px-6 max-w-[1400px] mx-auto mb-[40px] flex justify-between items-end max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-6">
         <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B] mb-4">Discover</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,5vw,64px)] font-normal text-[#EDEDED] leading-none">
              Signature Collections
            </h2>
         </div>
         <Link href="/collections" className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C6A96B] no-underline pb-[4px]">
           <span className="border-b border-transparent group-hover:border-[#C6A96B] transition-colors duration-300">View All Collections</span>
           <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
             <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
         </Link>
      </div>
      <div className="w-full relative px-[60px] max-[900px]:px-6 group/carousel">
        {/* Left Floating Arrow */}
        <button 
           onClick={() => scroll('left')}
           className="absolute left-10 max-[900px]:left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 min-[900px]:w-14 min-[900px]:h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-[rgba(198,169,107,0.3)] min-[900px]:opacity-0 group-hover/carousel:opacity-100 flex items-center justify-center text-[#C6A96B] hover:bg-[#C6A96B] hover:text-[#0a0a0a] transition-all duration-500 shadow-lg"
           aria-label="Scroll left"
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M15 18l-6-6 6-6" />
           </svg>
        </button>

        {/* Right Floating Arrow */}
        <button 
           onClick={() => scroll('right')}
           className="absolute right-10 max-[900px]:right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 min-[900px]:w-14 min-[900px]:h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-[rgba(198,169,107,0.3)] min-[900px]:opacity-0 group-hover/carousel:opacity-100 flex items-center justify-center text-[#C6A96B] hover:bg-[#C6A96B] hover:text-[#0a0a0a] transition-all duration-500 shadow-lg"
           aria-label="Scroll right"
        >
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
             <path d="M9 18l6-6-6-6" />
           </svg>
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:-ms-autohiding-scrollbar] [scrollbar-width:none] pb-10 pt-4"
        >
           {collections.map((col, index) => (
             <Link
               href="/collections"
               key={col.id}
               className="group relative flex-none w-[380px] max-[600px]:w-[300px] h-[520px] max-[600px]:h-[420px] snap-center overflow-hidden bg-[#111]"
             >
                <Image
                  src={col.src}
                  alt={col.alt}
                  fill
                  className="border-none bg-transparent outline-none focus:outline-none object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 opacity-75 group-hover:opacity-100"
                  sizes="(max-width: 600px) 300px, 380px"
                  priority={index < 3}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-5 border border-transparent group-hover:border-[#C6A96B]/30 transition-colors duration-700 z-10 pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                   <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
                     <h3 className="font-[family-name:var(--font-display)] text-[32px] font-normal text-[#EDEDED] mb-3 group-hover:text-[#C6A96B] transition-colors duration-500">
                       {col.title}
                     </h3>
                     
                     <div className="w-0 h-px bg-[#C6A96B] group-hover:w-[60px] transition-all duration-700 ease-in-out"></div>
                     
                     <div className="overflow-hidden mt-4">
                       <p className="text-[10px] tracking-[0.2em] text-[#EDEDED] uppercase transform translate-y-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                         Explore Series →
                       </p>
                     </div>
                   </div>
                </div>
             </Link>
           ))}
        </div>
      </div>
    </section>
  )
}
