import Link from 'next/link'
import { products } from '@/data/products'

export default function FeaturedProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="py-[120px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[80px] max-[900px]:px-6" id="shop">
      <div className="reveal flex justify-between items-end max-w-[1200px] mx-auto mb-[80px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B]">Curated Selection</p>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,48px)] font-normal text-[#EDEDED] leading-none">
            Featured Pieces
          </h2>
        </div>
        <Link href="/shop" className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C6A96B] no-underline pb-[4px]">
          <span className="border-b border-transparent group-hover:border-[#C6A96B] transition-colors duration-300">View The Collection</span>
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
            <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
      <div className="reveal grid grid-cols-4 max-[1024px]:grid-cols-2 max-[500px]:grid-cols-1 gap-6 max-w-[1200px] mx-auto pb-[40px]">
        {featured.map((p, index) => (
          <Link href={`/product/${p.slug}`} key={p.name} className="group relative cursor-pointer block no-underline mt-[0px] even:mt-[40px] max-[1024px]:even:mt-0 transition-transform duration-700 hover:-translate-y-2">
            <div className="relative overflow-hidden aspect-[3/4] bg-[#111]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>

              {/* Product Tag */}
              {p.tag && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-[8px] tracking-[0.3em] uppercase bg-[#C6A96B]/90 backdrop-blur-sm text-[#0a0a0a] px-3 py-1.5 font-semibold shadow-lg">
                    {p.tag}
                  </span>
                </div>
              )}

              {/* Hover Frame Effect */}
              <div className="absolute inset-3 border border-[rgba(198,169,107,0)] transition-all duration-500 group-hover:border-[rgba(198,169,107,0.3)] z-10 pointer-events-none"></div>

              {/* Discover Button Overlay */}
              <div className="absolute bottom-6 left-6 right-6 overflow-hidden z-20">
                <div className="bg-[#C6A96B]/95 backdrop-blur-md text-[#0a0a0a] text-[10px] font-semibold tracking-[0.3em] uppercase py-3 translate-y-[150%] transition-transform duration-500 ease-out group-hover:translate-y-0 flex justify-center items-center gap-2">
                  <span>Discover</span>
                  <svg width="10" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-6 relative pb-2 overflow-hidden">
              <h4 className="font-[family-name:var(--font-display)] text-[20px] font-normal text-[#EDEDED] mb-2 group-hover:text-[#C6A96B] transition-colors duration-300">{p.name}</h4>
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[rgba(237,237,237,0.5)]">PKR</span>
                <span className="text-[13px] tracking-[0.1em] text-[#C6A96B]">{p.price}</span>
              </div>

              {/* Line Decoration */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-[#C6A96B] transition-all duration-[0.6s] ease-out group-hover:w-full"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
