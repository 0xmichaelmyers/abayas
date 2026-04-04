import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PageHero from '@/components/PageHero/PageHero'
import RevealWrapper from '@/components/RevealWrapper/RevealWrapper'
import type { Metadata } from 'next'
import Link from 'next/link'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Shop — Abayas',
  description: 'Shop our full range of luxury modest fashion.',
}

const filters = ['All', 'Abayas', 'Hijabs', 'Chadars', 'Evening Wear', 'Bridal', 'New Arrivals']

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="The Shop"
          title="All Products"
          subtitle="Handcrafted modest luxury, delivered to you"
          image="/Product-3.png"
        />

        <div className="bg-[#111111] border-b border-[rgba(184,150,90,0.1)] py-5 px-[60px] max-[900px]:px-6">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-6 max-[700px]:flex-col max-[700px]:items-start">
            <div className="flex gap-6 overflow-x-auto">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`text-[9px] tracking-[0.3em] uppercase whitespace-nowrap pb-1 border-b transition-colors duration-300 cursor-pointer bg-transparent ${i === 0
                      ? 'text-[#C6A96B] border-[#C6A96B]'
                      : 'text-[rgba(237,237,237,0.5)] border-transparent hover:text-[#EDEDED]'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.4)]">Sort:</span>
              <select className="bg-transparent text-[rgba(237,237,237,0.7)] text-[10px] tracking-[0.1em] border border-[rgba(184,150,90,0.2)] py-1 px-3 outline-none cursor-pointer">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>

        <section className="py-[80px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[60px] max-[900px]:px-6">
          <div className="max-w-[1200px] mx-auto mb-8 flex justify-between items-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[rgba(237,237,237,0.4)]">{products.length} products</p>
          </div>
          <RevealWrapper className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 gap-[3px] max-w-[1200px] mx-auto">
            {products.map((p) => (
              <Link href={`/product/${p.slug}`} key={p.name} className="group relative cursor-pointer bg-[#1a1a1a] block no-underline">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover brightness-85 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05] group-hover:brightness-65"
                  />
                  {p.tag && (
                    <span className="absolute top-3 left-3 text-[8px] tracking-[0.25em] uppercase bg-[#C6A96B] text-[#0a0a0a] px-2 py-1 font-semibold">
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-[rgba(184,150,90,0.92)] text-[#0a0a0a] text-[9px] font-semibold tracking-[0.3em] uppercase py-[13px] text-center opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    View Product
                  </div>
                </div>
                <div className="p-[18px_14px]">
                  <h4 className="font-[family-name:var(--font-display)] text-[17px] font-normal text-[#EDEDED] mb-[6px]">{p.name}</h4>
                  <p className="text-[11px] tracking-[0.15em] text-[#C6A96B]">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[rgba(237,237,237,0.7)] mr-[6px]">PKR</span>
                    {p.price}
                  </p>
                </div>
              </Link>
            ))}
          </RevealWrapper>

          <div className="max-w-[1200px] mx-auto mt-16 flex justify-center">
            <button className="inline-flex items-center justify-center w-[200px] h-[50px] border border-[#C6A96B] text-[#C6A96B] text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#C6A96B] hover:text-[#0a0a0a] cursor-pointer bg-transparent">
              Load More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
