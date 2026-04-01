'use client'
import { useState, useEffect } from 'react'

const testimonials = [
  { text: '"The quality and elegance of Modesty\'s collection exceeded all my expectations. Each piece feels like a work of art that honors both tradition and contemporary style."', author: 'Sarah Ahmed', role: 'Verified Customer' },
  { text: '"Wearing Modesty gives me confidence and grace in equal measure. The craftsmanship is extraordinary and the fabric feels divine against the skin."', author: 'Fatima Al-Hassan', role: 'Verified Customer' },
  { text: '"I ordered for my daughter\'s wedding and every guest was in awe. Modesty truly delivers luxury modest fashion like no other brand."', author: 'Maryam Khalid', role: 'Verified Customer' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => { setCurrent(c => (c + 1) % testimonials.length); setVisible(true) }, 300)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i: number) => {
    setVisible(false)
    setTimeout(() => { setCurrent(i); setVisible(true) }, 300)
  }

  const t = testimonials[current]

  return (
    <section className="py-[100px] px-[60px] bg-[#0a0a0a] text-center max-[900px]:py-[70px] max-[900px]:px-6">
      <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-[50px]">Testimonials</p>
      <p
        className="font-[family-name:var(--font-display)] text-[clamp(18px,2.2vw,26px)] italic font-normal leading-[1.7] text-[#EDEDED] max-w-[700px] mx-auto mb-[30px] transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {t.text}
      </p>
      <p className="text-[11px] tracking-[0.25em] uppercase text-[#C6A96B] mb-1">{t.author}</p>
      <p className="text-[10px] tracking-[0.15em] text-[rgba(237,237,237,0.7)] mb-9">{t.role}</p>
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => goTo(i)}
            className={`w-[6px] h-[6px] rounded-full cursor-pointer transition-colors duration-300 ${i === current ? 'bg-[#C6A96B]' : 'bg-[rgba(237,237,237,0.12)]'}`}
          />
        ))}
      </div>
    </section>
  )
}
