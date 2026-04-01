import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../RevealWrapper/RevealWrapper'

const collections = [
  { id: 1, src: '/collection-1.png', alt: 'Luxury Abayas', title: 'Luxury Abayas', description: 'Timeless elegance reimagined' },
  { id: 2, src: '/collection-2.png', alt: 'Premium Hijabs', title: 'Premium Hijabs', description: 'Silk and cashmere collection' },
  { id: 3, src: '/collection-3.png', alt: 'Evening Wear', title: 'Evening Wear', description: 'For your special moments' },
]

export default function Collections() {
  return (
    <section className="py-[100px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[70px] max-[900px]:px-5" id="collections">

      {/* Header */}
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B] text-center mb-4">
        Curated For You
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,4.5vw,58px)] font-normal text-center text-[#EDEDED] mb-[60px]">
        Collections
      </h2>

      {/* Cards — full width, equal columns */}
      <RevealWrapper className="grid grid-cols-3 gap-[18px] max-w-[1100px] mx-auto max-[900px]:grid-cols-1">
        {collections.map((col) => (
          <div
            key={col.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer" style={{ height: '420px' }}
          >
            <Image
              src={col.src}
              alt={col.alt}
              fill
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05]"
              sizes="(max-width: 900px) 100vw, 33vw"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,4,4,0.95)] via-[rgba(4,4,4,0.2)] to-transparent" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(22px,2vw,30px)] font-normal text-[#EDEDED] mb-2 leading-tight">
                {col.title}
              </h3>
              <p className="text-[12px] tracking-[0.03em] text-[rgba(237,237,237,0.6)] mb-5">
                {col.description}
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-[6px] text-[9px] tracking-[0.3em] uppercase text-[#C6A96B] no-underline"
              >
                Explore <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </RevealWrapper>
    </section>
  )
}
