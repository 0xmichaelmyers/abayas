const products = [
  { name: 'Irani Silk Chador', price: '2,500', img: '/Product-1.png' },
  { name: 'Premium Silk Hijab', price: '1,800', img: '/Product-2.png' },
  { name: 'Bridal Ehram', price: '3,200', img: '/Product-3.png' },
  { name: 'Designer Abaya', price: '4,500', img: '/Product-4.png' },
]

export default function FeaturedProducts() {
  return (
    <section className="py-[100px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[70px] max-[900px]:px-6" id="shop">
      <div className="reveal flex justify-between items-end max-w-[1200px] mx-auto mb-[50px]">
        <div>
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-2">Featured Products</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] font-normal text-[#EDEDED]">
            Featured Products
          </h2>
        </div>
        <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-[#C6A96B] no-underline border-b border-[#8a6d3c] pb-[2px]">
          View All →
        </a>
      </div>
      <div className="reveal grid grid-cols-4 max-[900px]:grid-cols-2 gap-[3px] max-w-[1200px] mx-auto">
        {products.map((p) => (
          <div key={p.name} className="group relative cursor-pointer bg-[#1a1a1a]">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover brightness-85 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05] group-hover:brightness-65"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(184,150,90,0.92)] text-[#0a0a0a] text-[9px] font-semibold tracking-[0.3em] uppercase py-[13px] text-center opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Add to Cart
              </div>
            </div>
            <div className="p-[18px_14px]">
              <h4 className="font-[family-name:var(--font-display)] text-[17px] font-normal text-[#EDEDED] mb-[6px]">{p.name}</h4>
              <p className="text-[11px] tracking-[0.15em] text-[#C6A96B]">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[rgba(237,237,237,0.7)] mr-[6px]">PKR</span>
                {p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
