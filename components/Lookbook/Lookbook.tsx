const cards = {
  tall: { img: '/Editorial-Large.png', tag: 'Spring 2026', title: 'Shadows of Elegance' },
  topRight: { img: '/Editorial-Top-Right.png', tag: 'New Arrival', title: 'The Noir Collection' },
  bottomLeft: { img: '/Editorial-BL.png', tag: '', title: 'Silk Edit' },
  bottomRight: { img: '/Editorial-BR.png', tag: '', title: 'Artisan Craft' },
}

export default function Lookbook() {
  return (
    <section className="py-[100px] px-[60px] bg-[#121212] max-[900px]:py-[70px] max-[900px]:px-5" id="lookbook">

      {/* Header */}
      <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B] text-center mb-4">
        Editorial
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,4vw,52px)] font-normal text-center text-[#EDEDED] mb-[50px]">
        The Lookbook
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-[12px] max-w-[1300px] mx-auto" style={{ gridTemplateRows: 'auto' }}>

        {/* Left — tall card spanning 2 rows */}
        <div className="group relative overflow-hidden rounded-xl cursor-pointer row-span-2" style={{ minHeight: '600px' }}>
          <img
            src={cards.tall.img}
            alt={cards.tall.title}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
            style={{ position: 'absolute', inset: 0 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,4,4,0.9)] via-[rgba(4,4,4,0.15)] to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#C6A96B] mb-3">{cards.tall.tag}</p>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,42px)] font-normal text-[#EDEDED] leading-tight">
              {cards.tall.title}
            </h3>
          </div>
        </div>

        {/* Right top — wide landscape card */}
        <div className="group relative overflow-hidden rounded-xl cursor-pointer" style={{ height: '290px' }}>
          <img
            src={cards.topRight.img}
            alt={cards.topRight.title}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,4,4,0.85)] via-[rgba(4,4,4,0.1)] to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="text-[9px] tracking-[0.35em] uppercase text-[#C6A96B] mb-2">{cards.topRight.tag}</p>
            <h3 className="font-[family-name:var(--font-display)] text-[clamp(20px,2vw,28px)] font-normal text-[#EDEDED] leading-tight">
              {cards.topRight.title}
            </h3>
          </div>
        </div>

        {/* Right bottom — two equal cards side by side */}
        <div className="grid grid-cols-2 gap-[12px]" style={{ height: '290px' }}>
          {[cards.bottomLeft, cards.bottomRight].map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-xl cursor-pointer h-full">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,4,4,0.85)] via-[rgba(4,4,4,0.1)] to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-[family-name:var(--font-display)] text-[clamp(16px,1.5vw,22px)] font-normal text-[#EDEDED] leading-tight">
                  {c.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
