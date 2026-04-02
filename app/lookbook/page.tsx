import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PageHero from '@/components/PageHero/PageHero'
import RevealWrapper from '@/components/RevealWrapper/RevealWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lookbook — Abayas',
  description: 'Explore our editorial lookbook and seasonal campaigns.',
}

const editorials = [
  { img: '/Editorial-Large.png', tag: 'Spring 2025', title: 'Shadows of Elegance', desc: 'A journey through light and fabric', tall: true },
  { img: '/Editorial-Top-Right.png', tag: 'Winter 2025', title: 'The Noir Collection', desc: 'Darkness refined into grace', tall: false },
  { img: '/Editorial-BL.png', tag: 'Editorial', title: 'Silk Edit', desc: 'Pure silk, pure intention', tall: false },
  { img: '/Editorial-BR.png', tag: 'Artisan', title: 'Artisan Craft', desc: 'Hands that tell stories', tall: false },
  { img: '/rectangle-2.png', tag: 'Summer', title: 'Desert Gold', desc: 'Sun-kissed modest luxury', tall: false },
  { img: '/rectangle-3.png', tag: 'Autumn 2025', title: 'Velvet Dusk', desc: 'Rich tones for cooler days', tall: false },
]

const campaigns = [
  { img: '/rectangle-4.png', season: 'SS25', title: 'Spring / Summer 2025' },
  { img: '/rectangle-5.png', season: 'AW24', title: 'Autumn / Winter 2024' },
  { img: '/rectangle-6.png', season: 'SS24', title: 'Spring / Summer 2024' },
]

export default function LookbookPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="The Lookbook"
          title="Lookbook"
          subtitle="Stories told through fabric and light"
          image="/Editorial-Large.png"
        />

        {/* Editorial Grid */}
        <section className="py-[80px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[60px] max-[900px]:px-6">
          <RevealWrapper
            className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[3px] max-w-[1200px] mx-auto"
          >
            {editorials.map((c) => (
              <div
                key={c.title}
                className={`group relative overflow-hidden cursor-pointer ${c.tall ? 'row-span-2 min-h-[560px]' : ''}`}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className={`w-full object-cover brightness-70 transition-all duration-700 ease-in-out block group-hover:scale-[1.04] group-hover:brightness-50 ${c.tall ? 'h-full' : 'h-[280px]'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] to-transparent flex flex-col justify-end p-6">
                  <p className="text-[8px] tracking-[0.35em] uppercase text-[#C6A96B] mb-[6px]">{c.tag}</p>
                  <p className="font-[family-name:var(--font-display)] text-[22px] font-normal text-[#EDEDED] mb-1">{c.title}</p>
                  <p className="text-[10px] tracking-[0.1em] text-[rgba(237,237,237,0.6)] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{c.desc}</p>
                </div>
              </div>
            ))}
          </RevealWrapper>
        </section>

        {/* Past Campaigns */}
        <section className="py-[80px] px-[60px] bg-[#111111] max-[900px]:py-[60px] max-[900px]:px-6">
          <RevealWrapper>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] text-center mb-3">Archive</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] font-normal text-[#EDEDED] text-center mb-[60px]">
              Past Campaigns
            </h2>
          </RevealWrapper>
          <RevealWrapper className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-[3px] max-w-[1200px] mx-auto">
            {campaigns.map((c) => (
              <div key={c.title} className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover brightness-60 transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-40"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="font-[family-name:var(--font-display)] text-[48px] font-semibold text-[rgba(198,169,107,0.25)] tracking-[0.1em] mb-2">{c.season}</p>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.7)]">{c.title}</p>
                  <span className="mt-6 text-[9px] tracking-[0.3em] uppercase text-[#C6A96B] border-b border-[#8a6d3c] pb-[2px] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Campaign
                  </span>
                </div>
              </div>
            ))}
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
