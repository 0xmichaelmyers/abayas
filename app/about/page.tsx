import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PageHero from '@/components/PageHero/PageHero'
import RevealWrapper from '@/components/RevealWrapper/RevealWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Modesty',
  description: 'The story behind Modesty — luxury modest fashion crafted with devotion.',
}

const values = [
  { title: 'Craftsmanship', desc: 'Every stitch is placed with intention. Our artisans bring decades of heritage technique to each garment.' },
  { title: 'Devotion', desc: 'Modest fashion is not a limitation — it is an expression of faith, identity, and grace.' },
  { title: 'Sustainability', desc: 'We source ethically, produce mindfully, and design for longevity over trend.' },
  { title: 'Inclusivity', desc: 'Modesty belongs to every woman. Our sizing, styles, and stories reflect that truth.' },
]

const team = [
  { name: 'Aisha Malik', role: 'Founder & Creative Director', img: '/rectangle-4.png' },
  { name: 'Zara Hussain', role: 'Head of Design', img: '/rectangle-5.png' },
  { name: 'Noor Al-Rashid', role: 'Master Artisan', img: '/rectangle-6.png' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Our Story"
          title="About Modesty"
          subtitle="Where tradition meets contemporary luxury"
          image="/heritage-image.png"
        />

        {/* Brand Story */}
        <section className="bg-[#111111]">
          <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[80px] max-[900px]:gap-[40px] items-center max-w-[1200px] mx-auto py-[100px] px-[60px] max-[900px]:py-[70px] max-[900px]:px-6">
            <RevealWrapper>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-[14px]">Who We Are</p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,3.5vw,48px)] font-normal text-[#EDEDED] mb-[26px] leading-[1.15]">
                The Art of Modest Fashion
              </h2>
              <p className="text-[13px] leading-[1.9] text-[rgba(237,237,237,0.7)] mb-6">
                Modesty was born from a simple belief: that dressing modestly should never mean compromising on beauty, quality, or self-expression. Founded in Lahore, we draw from centuries of South Asian textile heritage to create garments that feel as meaningful as they look.
              </p>
              <p className="text-[13px] leading-[1.9] text-[rgba(237,237,237,0.7)]">
                Every piece is designed in-house, crafted by skilled artisans, and finished with the kind of care that only comes from genuine devotion to the craft. We don't follow trends — we set a standard.
              </p>
            </RevealWrapper>
            <RevealWrapper className="relative aspect-[4/5] overflow-hidden ring-1 ring-[rgba(184,150,90,0.2)]">
              <img src="/heritage-image.png" alt="Our heritage" className="w-full h-full object-cover brightness-80" />
            </RevealWrapper>
          </div>
        </section>

        {/* Values */}
        <section className="py-[100px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[70px] max-[900px]:px-6">
          <RevealWrapper>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] text-center mb-3">What We Stand For</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] font-normal text-[#EDEDED] text-center mb-[60px]">
              Our Values
            </h2>
          </RevealWrapper>
          <RevealWrapper className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 gap-[1px] max-w-[1200px] mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-[#111111] p-10 border border-[rgba(184,150,90,0.08)] hover:border-[rgba(184,150,90,0.25)] transition-colors duration-300">
                <div className="w-8 h-px bg-[#C6A96B] mb-6" />
                <h3 className="font-[family-name:var(--font-display)] text-[20px] font-normal text-[#EDEDED] mb-4">{v.title}</h3>
                <p className="text-[12px] leading-[1.8] text-[rgba(237,237,237,0.6)]">{v.desc}</p>
              </div>
            ))}
          </RevealWrapper>
        </section>

        {/* Craftsmanship */}
        <section className="bg-[#111111]">
          <div className="max-w-[1200px] mx-auto py-[100px] px-[60px] max-[900px]:py-[70px] max-[900px]:px-6">
            <RevealWrapper className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[80px] max-[900px]:gap-[40px] items-center">
              <div className="relative aspect-[4/5] overflow-hidden ring-1 ring-[rgba(184,150,90,0.2)]">
                <img src="/Editorial-Large.png" alt="Craftsmanship" className="w-full h-full object-cover brightness-75" />
              </div>
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-[14px]">The Process</p>
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,42px)] font-normal text-[#EDEDED] mb-[26px] leading-[1.15]">
                  Made With Devotion
                </h2>
                <p className="text-[13px] leading-[1.9] text-[rgba(237,237,237,0.7)] mb-5">
                  From the first sketch to the final stitch, every Modesty garment passes through the hands of artisans who have spent their lives mastering their craft. We use only the finest fabrics — Irani silk, Kashmiri cashmere, hand-woven cotton — sourced from trusted suppliers who share our values.
                </p>
                <p className="text-[13px] leading-[1.9] text-[rgba(237,237,237,0.7)]">
                  Our production is intentionally small-batch. We believe in making fewer things, better — garments that last a lifetime and carry meaning beyond fashion.
                </p>
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* Team */}
        <section className="py-[100px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[70px] max-[900px]:px-6">
          <RevealWrapper>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] text-center mb-3">The People</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] font-normal text-[#EDEDED] text-center mb-[60px]">
              Meet the Team
            </h2>
          </RevealWrapper>
          <RevealWrapper className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-[3px] max-w-[900px] mx-auto">
            {team.map((m) => (
              <div key={m.name} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover brightness-70 transition-all duration-700 group-hover:scale-[1.04] group-hover:brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] to-transparent flex flex-col justify-end p-6">
                  <p className="font-[family-name:var(--font-display)] text-[20px] font-normal text-[#EDEDED] mb-1">{m.name}</p>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#C6A96B]">{m.role}</p>
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
