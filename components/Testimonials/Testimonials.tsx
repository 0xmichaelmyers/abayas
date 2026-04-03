'use client'
import { useState, useEffect } from 'react'

const testimonials = [
  { 
    text: "The quality and elegance of their collection exceeded all my expectations. Each piece feels like a work of art that honors both tradition and contemporary style.", 
    author: 'Sarah Ahmed', 
    role: 'Loyal Client'
  },
  { 
    text: "Wearing these garments gives me a sense of confidence and grace. The craftsmanship is extraordinary, and the fabrics are truly divine.", 
    author: 'Fatima Al-Hassan', 
    role: 'Verified Customer'
  },
  { 
    text: "I ordered for my daughter's wedding, and every guest was in awe of the detail. This brand delivers luxury modest fashion unlike any other.", 
    author: 'Maryam Khalid', 
    role: 'Premium Member'
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 7000)
    return () => clearInterval(timer)
  }, [current])

  const handleNext = () => {
    setIsChanging(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
      setIsChanging(false)
    }, 700)
  }

  const goTo = (i: number) => {
    if (i === current) return
    setIsChanging(true)
    setTimeout(() => {
      setCurrent(i)
      setIsChanging(false)
    }, 700)
  }

  const t = testimonials[current]

  return (
    <section className="py-[160px] bg-[#0a0a0a] px-6 relative overflow-hidden border-t border-[rgba(198,169,107,0.1)]" id="testimonials">
      
      {/* Symmetrical Header - Strictly Themed */}
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center mb-[80px]">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B]">Testimonials</p>
          <div className="w-[40px] h-[1px] bg-[#C6A96B]"></div>
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,5vw,56px)] font-normal text-[#EDEDED] leading-none mb-4">
          Voices of Grace
        </h2>
      </div>

      <div className="max-w-[1000px] mx-auto relative group">
        
        {/* The 'Museum Frame' Card */}
        <div className="border border-[rgba(198,169,107,0.15)] bg-[#0d0d0d]/40 p-[80px] max-[700px]:p-[40px] relative transition-all duration-700 group-hover:border-[#C6A96B]/30">
          
          {/* Decorative Corner Ornaments - Signature Theme Asset */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#C6A96B]/40 group-hover:border-[#C6A96B]"></div>
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#C6A96B]/40 group-hover:border-[#C6A96B]"></div>

          <div className={`transition-all duration-700 ease-in-out ${isChanging ? 'opacity-0 scale-[0.98] blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
            
            {/* Elegant Floating Quote Mark */}
            <div className="flex justify-center mb-10 opacity-60">
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16.3265L6.53061 0H13.8776L9.63265 13.6054H16.3265V25.8503H0V16.3265ZM17.6735 16.3265L24.2041 0H31.551L27.3061 13.6054H34V25.8503H17.6735V16.3265Z" fill="#C6A96B" fillOpacity="0.4"/>
              </svg>
            </div>

            <p className="font-[family-name:var(--font-display)] text-[clamp(22px,2.8vw,34px)] text-[#EDEDED] leading-[1.7] font-light text-center mb-12 italic">
              &ldquo;{t.text}&rdquo;
            </p>
            
            <div className="flex flex-col items-center">
              <div className="w-[40px] h-[1px] bg-[#C6A96B]/50 mb-6"></div>
              <p className="text-[13px] tracking-[0.4em] uppercase text-[#C6A96B] font-medium mb-1">{t.author}</p>
              <p className="text-[10px] tracking-[0.2em] text-[rgba(237,237,237,0.4)] uppercase font-light">{t.role}</p>
            </div>

          </div>
        </div>

        {/* Sophisticated Boutique Progress Navigation */}
        <div className="flex justify-center items-center gap-10 mt-[60px]">
           <div className="flex gap-4">
             {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="group py-2 px-1"
                >
                  <div className={`h-[2px] transition-all duration-700 rounded-full ${i === current ? 'w-[40px] bg-[#C6A96B]' : 'w-[20px] bg-[rgba(198,169,107,0.15)] group-hover:bg-[#C6A96B]/40'}`}></div>
                </button>
             ))}
           </div>
        </div>

      </div>

      {/* Signature corner brand element - matched to site DNA */}
      <div className="absolute top-[80px] left-[80px] max-[1024px]:hidden">
         <div className="w-[1px] h-[120px] bg-gradient-to-b from-[#C6A96B]/20 to-transparent"></div>
      </div>
      <div className="absolute bottom-[80px] right-[80px] max-[1024px]:hidden text-right">
         <div className="w-[120px] h-[1px] bg-gradient-to-l from-[#C6A96B]/20 to-transparent ml-auto mb-4"></div>
         <p className="text-[9px] tracking-[0.3em] uppercase text-[#C6A96B]/40">Authentic Voices</p>
      </div>

    </section>
  )
}
