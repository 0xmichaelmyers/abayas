import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { collections } from '@/data/collections'
import { products } from '@/data/products'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export function generateStaticParams() {
  return collections.map((collection) => ({
    slug: collection.slug,
  }))
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug)
  
  if (!collection) {
    notFound()
  }

  const collectionProducts = products.filter((p) => p.collectionSlug === params.slug)

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen text-[#EDEDED] pt-32 pb-24">
        {/* Collection Header */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-24 lg:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            <div className="lg:col-span-12 mb-10 overflow-hidden">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
                 <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B]">Curated Collection</p>
               </div>
               <h1 className="font-[family-name:var(--cormorant-font)] italic font-light text-[clamp(44px,8vw,100px)] leading-[0.9] tracking-tighter">
                 {collection.title}
               </h1>
            </div>
            
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[rgba(198,169,107,0.1)]">
                <Image 
                  src={collection.image} 
                  alt={collection.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40"></div>
              </div>
            </div>

            <div className="lg:col-span-7 lg:pb-10">
               <div className="max-w-[500px]">
                 <span className="text-[9px] uppercase tracking-[0.5em] text-[#C6A96B]/50 font-medium block mb-8">House Philosophy</span>
                 <p className="text-[14px] md:text-[16px] leading-[2] font-light text-[#EDEDED]/60 mb-12 italic">
                   "{collection.philosophy}"
                 </p>
                 <div className="flex flex-col gap-2">
                   <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#EDEDED]">Discover the Selection</p>
                   <p className="text-[12px] text-[#EDEDED]/30 tracking-widest">{collectionProducts.length} Exclusive Pieces Available</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {collectionProducts.map((p, index) => (
              <Link 
                key={p.id} 
                href={`/product/${p.slug}`} 
                className="group flex flex-col relative"
                style={{ 
                  marginTop: index % 2 === 0 ? '0px' : '40px',
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-6">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
                  />
                  
                  {/* Subtle Overlays */}
                  <div className="absolute inset-x-4 bottom-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500 z-20">
                    <div className="bg-[#C6A96B] text-[#0a0a0a] text-[10px] tracking-[0.3em] font-semibold uppercase py-3 flex justify-center items-center gap-2">
                      <span>Examine Piece</span>
                      <svg width="10" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1L13 5M13 5L9 9M13 5H1" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Aesthetic Borders */}
                  <div className="absolute inset-4 border border-[rgba(198,169,107,0)] group-hover:border-[rgba(198,169,107,0.2)] transition-all duration-700 z-10 pointer-events-none"></div>
                  
                  {p.tag && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-[8px] tracking-[0.4em] uppercase bg-[rgba(10,10,10,0.8)] backdrop-blur text-[#C6A96B] px-3 py-1.5 border border-[#C6A96B]/20">
                        {p.tag}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-[family-name:var(--cormorant-font)] text-[22px] font-normal tracking-wide text-[#EDEDED] group-hover:text-[#C6A96B] transition-colors duration-500 leading-tight">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.1em] text-[#EDEDED]/30 uppercase">Atelier Piece</span>
                    <span className="text-[14px] text-[#C6A96B] font-light">PKR {p.price}</span>
                  </div>
                </div>

                {/* Animated Line Decoration */}
                <div className="w-0 h-px bg-[#C6A96B]/30 mt-6 group-hover:w-full transition-all duration-700"></div>
              </Link>
            ))}
          </div>
          
          {collectionProducts.length === 0 && (
            <div className="text-center py-40 border border-dashed border-[rgba(198,169,107,0.2)]">
              <p className="text-[12px] tracking-[0.5em] uppercase text-[#EDEDED]/20 italic">Curating New Pieces for this Collection</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
