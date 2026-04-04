"use client"

import React from 'react'

const houseCodes = [
  {
    title: "Signature Silhouettes",
    description: "The architectural foundation of every piece. Defined by structured elegance and timeless forms that transcend seasonal trends."
  },
  {
    title: "Refined Drapery",
    description: "A study in movement and gravity. Our fabrics are chosen for their unique ability to fall with effortless grace and liquid fluidity."
  },
  {
    title: "Crafted Detail",
    description: "Excellence in the unseen. Every stitch and subtle embellishment is executed with uncompromising precision and artisanal mastery."
  },
  {
    title: "Elevated Modesty",
    description: "A contemporary expression of heritage. Redefining modest silhouettes through the lens of modern luxury and sophisticated restraint."
  }
]

export default function HouseCodes() {
  return (
    <section className="py-[180px] bg-[#0a0a0a] text-[#EDEDED] relative overflow-hidden border-t border-[rgba(198,169,107,0.1)]" id="house-codes">
      <div className="max-w-[1400px] mx-auto px-[60px] max-[900px]:px-6">
        {/* Header */}
        <div className="mb-[140px] flex flex-col items-center text-center">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#C6A96B] mb-8 opacity-80">The Philosophy</p>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(48px,6vw,92px)] font-normal leading-[1.1] mb-10 tracking-tight">
            The House Codes
          </h2>
          <div className="w-[80px] h-[1px] bg-[#C6A96B]/30 mb-10"></div>
          <p className="text-[20px] text-[#EDEDED]/50 font-light max-w-[700px] leading-relaxed tracking-wide italic">
             "A commitment to architectural precision and the fluid language of luxury modesty."
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-24">
          {houseCodes.map((code, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-start transition-all duration-700"
            >
              <div className="flex flex-col gap-8 w-full">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-[#C6A96B] font-medium tracking-[0.3em]">
                    0{index + 1}
                  </span>
                  <div className="h-[1px] flex-1 bg-[rgba(198,169,107,0.1)] group-hover:bg-[#C6A96B]/40 transition-colors duration-700"></div>
                </div>
                
                <h3 className="text-[22px] font-normal tracking-wide text-[#EDEDED] group-hover:text-[#C6A96B] transition-colors duration-500">
                  {code.title}
                </h3>
                
                <p className="text-[15px] leading-[1.9] text-[#EDEDED]/40 font-light tracking-wide group-hover:text-[#EDEDED]/70 transition-colors duration-500 min-h-[100px]">
                  {code.description}
                </p>

                <div className="pt-4 overflow-hidden">
                  <div className="h-[1px] w-0 bg-[#C6A96B] group-hover:w-full transition-all duration-1000 ease-in-out opacity-40"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Cinematic Elements */}
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#C6A96B]/[0.03] rounded-full blur-[150px] pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#C6A96B]/[0.02] rounded-full blur-[120px] pointer-events-none translate-x-1/2"></div>
    </section>
  )
}
