import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { products } from '@/data/products'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) {
    return { title: 'Product Not Found' }
  }
  return {
    title: `${product.name} — Abayas`,
    description: product.description,
  }
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen pt-[140px] pb-[100px] text-[#EDEDED] antialiased">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Breadcrumb / Navigation (Minimal) */}
          <div className="mb-10 text-[10px] tracking-[0.2em] uppercase text-[rgba(237,237,237,0.5)] flex items-center gap-3">
            <a href="/" className="hover:text-[#C6A96B] transition-colors">Home</a>
            <span className="w-4 h-[1px] bg-[rgba(237,237,237,0.2)]" />
            <a href="/collections" className="hover:text-[#C6A96B] transition-colors">Collections</a>
            <span className="w-4 h-[1px] bg-[rgba(237,237,237,0.2)]" />
            <span className="text-[#C6A96B]">{product.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative items-start">
            
            {/* Left: Image Gallery (Scrollable Stack) */}
            <div className="w-full lg:w-[60%] flex flex-col gap-6 lg:gap-8">
              <div className="w-full relative bg-[#121212] group overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-auto object-cover transform duration-700 hover:scale-[1.03]"
                />
              </div>
              
              {product.gallery && product.gallery.length > 0 && (
                product.gallery.map((img, i) => (
                  <div key={i} className="w-full relative bg-[#121212] group overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${product.name} gallery ${i + 1}`} 
                      className="w-full h-auto object-cover transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                ))
              )}
            </div>

            {/* Right: Product Details (Sticky Sidebar) */}
            <div className="w-full lg:w-[40%] flex flex-col pt-4 lg:sticky lg:top-[120px]">
              
              <div className="mb-10">
                {product.tag && (
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6A96B] mb-5 block font-medium">
                    {product.tag}
                  </span>
                )}
                
                <h1 className="font-[family-name:var(--font-display)] text-[42px] lg:text-[54px] text-[#EDEDED] mb-6 leading-[1.1] font-light">
                  {product.name}
                </h1>
                
                <div className="flex items-end gap-3 mb-8">
                  <span className="text-[12px] tracking-[0.1em] uppercase text-[rgba(237,237,237,0.5)] pb-1">PKR</span>
                  <span className="text-[24px] tracking-[0.05em] text-[#C6A96B] font-light">
                    {product.price}
                  </span>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-gradient-to-r from-[rgba(198,169,107,0.3)] to-transparent mb-10" />

              <div className="prose prose-invert max-w-none mb-12">
                <p className="text-[15px] text-[rgba(237,237,237,0.7)] leading-[1.8] font-light tracking-[0.02em]">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 mb-14">
                <button className="relative w-full h-[64px] bg-[#C6A96B] text-[#0a0a0a] text-[12px] tracking-[0.25em] font-semibold uppercase overflow-hidden group">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#EDEDED]">Add to Bag</span>
                  <div className="absolute inset-0 bg-[#0a0a0a] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 border border-[#C6A96B]" />
                </button>
              </div>

              {/* Product Details Section */}
              {product.details && product.details.length > 0 && (
                <div className="border-t border-[rgba(237,237,237,0.1)] pt-8">
                  <h3 className="text-[11px] tracking-[0.2em] uppercase text-[#EDEDED] mb-6 font-medium">
                    Product Details
                  </h3>
                  <ul className="space-y-4">
                    {product.details.map((detail, i) => (
                      <li key={i} className="flex gap-4 items-start text-[14px]">
                        <span className="block w-1.5 h-1.5 mt-2 bg-[#C6A96B] rounded-full shrink-0 shadow-[0_0_8px_rgba(198,169,107,0.5)]" />
                        <span className="text-[rgba(237,237,237,0.6)] leading-relaxed font-light">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Accompanying info (Shipping, Care) */}
              <div className="mt-12 pt-8 border-t border-[rgba(237,237,237,0.1)] grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#EDEDED] mb-3">Shipping</h4>
                  <p className="text-[13px] text-[rgba(237,237,237,0.5)] font-light leading-relaxed">
                    Complimentary standard shipping on all orders organically crafted.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#EDEDED] mb-3">Care</h4>
                  <p className="text-[13px] text-[rgba(237,237,237,0.5)] font-light leading-relaxed">
                    Dry clean only. Handle meticulously to preserve the delicate fabric.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
