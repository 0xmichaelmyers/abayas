"use client"

import { useState } from 'react'

const faqs = [
  {
    question: "Do you offer bespoke sizing or alterations?",
    answer: "We offer complimentary length adjustments on all our main line collections. For complete bespoke sizing, we invite you to arrange a virtual consultation with our atelier team to ensure your piece drapes perfectly."
  },
  {
    question: "How should I care for my Abaya?",
    answer: "To preserve the architectural drape and fluid grace of our fabrics, we strictly recommend professional dry cleaning. For minor wrinkles, utilize a garment steamer on a delicate setting rather than a conventional iron."
  },
  {
    question: "What is your international shipping policy?",
    answer: "We provide premium worldwide shipping via priority courier services. All international orders are fully tracked and dispatched in our signature protective packaging. Delivery windows are calculated directly at checkout."
  },
  {
    question: "Can I exchange an unworn garment?",
    answer: "Returns and exchanges are graciously accepted within 14 days of delivery, provided the garment remains unworn, unaltered, and retains all original boutique tags and packaging."
  }
]

export default function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-[#0a0a0a] text-[#EDEDED] py-24 md:py-40 relative border-t border-[rgba(237,237,237,0.05)] overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A96B]/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Header Column */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C6A96B] mb-6 font-medium">Assistance</span>
            <h2 className="font-[family-name:var(--cormorant-font)] italic text-5xl md:text-6xl lg:text-7xl font-light text-[#EDEDED] leading-[1.1] mb-8">
              Client <br/> Inquiries
            </h2>
            <p className="text-[13px] leading-[2] text-[#EDEDED]/40 font-light tracking-wide max-w-[300px]">
              For matters beyond this compendium, our dedicated client concierge awaits your correspondence.
            </p>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8 lg:pl-16">
            <div className="flex flex-col">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                
                return (
                  <div 
                    key={index} 
                    className="border-b border-[#C6A96B]/20 py-8 first:pt-0 group border-opacity-50"
                  >
                    <button 
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                    >
                      <h3 className={`text-[15px] md:text-[18px] font-light tracking-wider transition-colors duration-500 ${isOpen ? 'text-[#C6A96B]' : 'text-[#EDEDED] group-hover:text-[#C6A96B]'}`}>
                        {faq.question}
                      </h3>
                      
                      <div className="relative w-4 h-4 ml-8 flex-shrink-0 flex items-center justify-center">
                        <span className={`absolute w-full h-[1px] bg-[#C6A96B] transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180 bg-opacity-40' : ''}`}></span>
                        <span className={`absolute w-full h-[1px] bg-[#C6A96B] transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-0 bg-opacity-40' : 'rotate-90'}`}></span>
                      </div>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <p className="overflow-hidden text-[13px] leading-[2] text-[#EDEDED]/50 font-light tracking-wide max-w-[600px] pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
