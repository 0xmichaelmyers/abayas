import Link from 'next/link'

export default function BrandStory() {
  return (
    <section className="py-[120px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[80px] max-[900px]:px-6" id="story">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-[100px] items-center max-[900px]:flex-col max-[900px]:gap-[60px]">
          
          {/* Left Side: Text */}
          <div className="flex-1">
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B]">Our Heritage</p>
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,48px)] font-normal text-[#EDEDED] leading-none">
                The Art of Modest Fashion
              </h2>
            </div>

            <p className="text-[14px] leading-[2] tracking-[0.03em] text-[rgba(237,237,237,0.7)] font-light mb-6">
              Every piece in our collection tells a story of craftsmanship and devotion. We blend traditional artistry with contemporary design, creating garments that honor your values while celebrating your individuality.
            </p>
            <p className="text-[14px] leading-[2] tracking-[0.03em] text-[rgba(237,237,237,0.7)] font-light mb-10">
              From the finest fabrics sourced globally to the intricate details lovingly finished by skilled artisans, our heritage is woven into every thread.
            </p>

            <Link href="/about" className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C6A96B] no-underline pb-[4px] w-fit">
              <span className="border-b border-transparent group-hover:border-[#C6A96B] transition-colors duration-300">Discover The Craft</span>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform duration-300">
                <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="#C6A96B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="flex-[1.2] w-full group">
            <div className="relative overflow-hidden aspect-[4/3] bg-[#111]">
              <img
                src="/heritage-image.png"
                alt="Artisan craft"
                className="w-full h-full object-cover opacity-90 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
              
              {/* Identical inner frame effect used across the site */}
              <div className="absolute inset-4 border border-[rgba(198,169,107,0)] transition-all duration-500 group-hover:border-[rgba(198,169,107,0.3)] pointer-events-none"></div>
            </div>
          </div>

        </div>
        
        {/* Original signature line element */}
        <div className="flex justify-end mt-[60px] max-[1024px]:mt-[40px]">
          <div
            className="w-[120px] h-[1px]"
            style={{ background: 'linear-gradient(to left, #C6A96B, transparent)' }}
          />
        </div>
      </div>
    </section>
  )
}
