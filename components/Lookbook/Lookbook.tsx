import Link from 'next/link'

const cards = {
  tall: { img: '/Editorial-Large.png', tag: 'Spring 2026', title: 'Shadows of Elegance' },
  topRight: { img: '/Editorial-Top-Right.png', tag: 'New Arrival', title: 'The Noir Collection' },
  bottomLeft: { img: '/Editorial-BL.png', tag: '', title: 'Silk Edit' },
  bottomRight: { img: '/Editorial-BR.png', tag: '', title: 'Artisan Craft' },
}

export default function Lookbook() {
  return (
    <section className="py-[120px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[80px] max-[900px]:px-6 border-t border-[rgba(198,169,107,0.1)]" id="lookbook">
      
      {/* Header aligned properly with the site's design language */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center mb-[80px]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B]">Editorial</p>
          <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,5vw,60px)] font-normal text-[#EDEDED] leading-none">
          The Lookbook
        </h2>
      </div>

      <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-4 max-w-[1200px] mx-auto">
        
        {/* Left — tall card spanning full height */}
        <Link href="/lookbook" className="group relative overflow-hidden bg-[#111] block no-underline h-[600px] max-[700px]:h-[450px]">
          <img
            src={cards.tall.img}
            alt={cards.tall.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[rgba(10,10,10,0.2)] to-transparent transition-opacity duration-700"></div>
          
          <div className="absolute inset-4 border border-[rgba(198,169,107,0)] transition-all duration-500 group-hover:border-[rgba(198,169,107,0.3)] pointer-events-none"></div>

          <div className="absolute bottom-10 left-10 right-10">
            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
              <p className="text-[9px] tracking-[0.35em] uppercase text-[#C6A96B] mb-3">{cards.tall.tag}</p>
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(32px,3vw,46px)] font-normal text-[#EDEDED] leading-tight mb-6 group-hover:text-[#C6A96B] transition-colors duration-500">
                {cards.tall.title}
              </h3>
              
              <div className="flex items-center gap-4 overflow-hidden">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#EDEDED] group-hover:text-white transition-colors duration-300">
                  View Editorial
                </span>
                <div className="w-[40px] h-[1px] bg-[#C6A96B] transform -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
              </div>
            </div>
          </div>
        </Link>

        {/* Right side wrapper */}
        <div className="flex flex-col gap-4 h-[600px] max-[700px]:h-auto">
          
          {/* Right top — wide landscape card */}
          <Link href="/lookbook" className="group relative overflow-hidden bg-[#111] block no-underline flex-1 min-h-[290px]">
             <img
              src={cards.topRight.img}
              alt={cards.topRight.title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
             
             <div className="absolute inset-4 border border-[rgba(198,169,107,0)] transition-all duration-500 group-hover:border-[rgba(198,169,107,0.3)] pointer-events-none"></div>

             <div className="absolute bottom-8 left-8 right-8">
               <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
                 <p className="text-[9px] tracking-[0.35em] uppercase text-[#C6A96B] mb-2">{cards.topRight.tag}</p>
                 <h3 className="font-[family-name:var(--font-display)] text-[clamp(24px,2vw,32px)] font-normal text-[#EDEDED] leading-tight mb-5 group-hover:text-[#C6A96B] transition-colors duration-500">
                   {cards.topRight.title}
                 </h3>
                 
                 <div className="flex items-center gap-4 overflow-hidden">
                   <span className="text-[10px] tracking-[0.3em] uppercase text-[#EDEDED] group-hover:text-white transition-colors duration-300">
                     View Editorial
                   </span>
                   <div className="w-[40px] h-[1px] bg-[#C6A96B] transform -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                 </div>
               </div>
             </div>
          </Link>

          {/* Right bottom — two equal cards side by side */}
          <div className="flex gap-4 flex-1 min-h-[290px] max-[500px]:flex-col">
            {[cards.bottomLeft, cards.bottomRight].map((c) => (
              <Link href="/lookbook" key={c.title} className="group relative overflow-hidden bg-[#111] block no-underline flex-1 min-h-[290px]">
                 <img
                   src={c.img}
                   alt={c.title}
                   className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90"></div>
                 
                 <div className="absolute inset-3 border border-[rgba(198,169,107,0)] transition-all duration-500 group-hover:border-[rgba(198,169,107,0.3)] pointer-events-none"></div>

                 <div className="absolute bottom-6 left-6 right-6">
                   <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-out">
                     <h3 className="font-[family-name:var(--font-display)] text-[clamp(20px,1.5vw,26px)] font-normal text-[#EDEDED] leading-tight mb-4 group-hover:text-[#C6A96B] transition-colors duration-500">
                       {c.title}
                     </h3>
                     
                     <div className="flex items-center gap-3 overflow-hidden">
                       <span className="text-[9px] tracking-[0.25em] uppercase text-[#EDEDED] group-hover:text-white transition-colors duration-300">
                         Explore
                       </span>
                       <div className="w-[30px] h-[1px] bg-[#C6A96B] transform -translate-x-[150%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out"></div>
                     </div>
                   </div>
                 </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
