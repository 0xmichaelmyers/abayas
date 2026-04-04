"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#EDEDED] border-t border-[rgba(198,169,107,0.15)] relative w-full selection:bg-[#C6A96B] selection:text-[#0A0A0A]">
      
      {/* Structural Split Layout */}
      <div className="flex flex-col md:flex-row w-full min-h-[600px] lg:min-h-[80vh] max-w-[2000px] mx-auto relative overflow-hidden">
        
        {/* Cinematic Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C6A96B]/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

        {/* LEFT COMPARTMENT: The Brand Monument */}
        <div className="flex-1 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[rgba(198,169,107,0.15)] p-10 md:p-14 lg:p-24 relative z-10">
          
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C6A96B] font-medium mb-1">Maison</span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#EDEDED]/30 font-light">Global</span>
            </div>
            
            {/* Social Links as minimal circles */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[rgba(198,169,107,0.2)] flex items-center justify-center text-[#EDEDED]/40 hover:text-[#0A0A0A] hover:bg-[#C6A96B] hover:border-[#C6A96B] transition-all duration-500">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[rgba(198,169,107,0.2)] flex items-center justify-center text-[#EDEDED]/40 hover:text-[#0A0A0A] hover:bg-[#C6A96B] hover:border-[#C6A96B] transition-all duration-500">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
              </a>
            </div>
          </div>
          
          {/* Main Identifier */}
          <div className="mt-20 md:mt-auto">
            <h2 className="font-[family-name:var(--cormorant-font)] italic font-light text-[22vw] md:text-[14vw] leading-[0.75] text-[#EDEDED] tracking-tight -ml-1 md:-ml-2 hover:text-[#C6A96B] transition-colors duration-1000 select-none pb-4">
              Abayas
            </h2>
            
            <div className="flex flex-col xl:flex-row gap-12 mt-10 md:mt-16 xl:items-end justify-between">
              <p className="max-w-[320px] text-[13px] text-[#EDEDED]/40 font-light tracking-wide leading-[2]">
                Architectural purity. Fluid grace. Constructing the definitive language of modest luxury for the modern era.
              </p>
              
              <div className="w-full xl:w-[320px] relative border-b border-[rgba(237,237,237,0.15)] pb-3 group">
                <span className="absolute -top-6 left-0 text-[9px] uppercase tracking-[0.2em] text-[#C6A96B] font-medium opacity-60">Join the Atelier</span>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-transparent text-[13px] text-[#EDEDED] placeholder-[#EDEDED]/20 outline-none focus:border-[#C6A96B] transition-colors pr-[80px]" 
                />
                <button className="absolute right-0 bottom-3 text-[9px] uppercase tracking-[0.15em] font-medium text-[#EDEDED]/30 group-hover:text-[#C6A96B] transition-colors duration-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
        </div>

        {/* RIGHT COMPARTMENT: The Matrix */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col z-10 relative">
          
          {/* Top Half: Collections Typography List */}
          <div className="flex-1 flex flex-col justify-center border-b border-[rgba(198,169,107,0.15)] p-10 md:p-14 lg:p-24 bg-[#0a0a0a]">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C6A96B]/50 font-medium mb-10">01 — The Library</span>
            <ul className="flex flex-col gap-6">
              <li>
                <Link href="/collections/signature" className="group flex items-baseline gap-6">
                  <span className="text-[10px] text-[#EDEDED]/20 font-light font-[family-name:var(--inter-font)] group-hover:text-[#C6A96B] transition-colors">01</span>
                  <span className="text-4xl lg:text-5xl font-[family-name:var(--cormorant-font)] italic font-light text-[#EDEDED]/70 group-hover:text-[#C6A96B] group-hover:translate-x-4 transition-all duration-700">Signature Forms</span>
                </Link>
              </li>
              <li>
                <Link href="/collections/evening" className="group flex items-baseline gap-6 border-t border-[rgba(237,237,237,0.03)] pt-6">
                  <span className="text-[10px] text-[#EDEDED]/20 font-light font-[family-name:var(--inter-font)] group-hover:text-[#C6A96B] transition-colors">02</span>
                  <span className="text-4xl lg:text-5xl font-[family-name:var(--cormorant-font)] italic font-light text-[#EDEDED]/70 group-hover:text-[#C6A96B] group-hover:translate-x-4 transition-all duration-700">Evening Grace</span>
                </Link>
              </li>
              <li>
                <Link href="/collections/statement-black" className="group flex items-baseline gap-6 border-t border-[rgba(237,237,237,0.03)] pt-6">
                  <span className="text-[10px] text-[#EDEDED]/20 font-light font-[family-name:var(--inter-font)] group-hover:text-[#C6A96B] transition-colors">03</span>
                  <span className="text-4xl lg:text-5xl font-[family-name:var(--cormorant-font)] italic font-light text-[#EDEDED]/70 group-hover:text-[#C6A96B] group-hover:translate-x-4 transition-all duration-700">Statement Black</span>
                </Link>
              </li>
              <li className="pt-6">
                <Link href="/collections" className="inline-block text-[9px] uppercase tracking-[0.2em] text-[#C6A96B] font-medium border-b border-[#C6A96B]/30 pb-1 hover:border-[#C6A96B] transition-all duration-500">
                  Explore Entire Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Half: Information Grid */}
          <div className="p-10 md:p-14 lg:p-24 flex flex-col justify-center bg-[#070707]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col gap-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A96B]/50 font-medium">Inside The Maison</span>
                <ul className="flex flex-col gap-5 border-l border-[rgba(198,169,107,0.1)] pl-4">
                  <li><Link href="/about" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">House Origin</Link></li>
                  <li><Link href="/#house-codes" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Design Philosophy</Link></li>
                  <li><Link href="/lookbook" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Campaign Archive</Link></li>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A96B]/50 font-medium">Client Assistance</span>
                <ul className="flex flex-col gap-5 border-l border-[rgba(198,169,107,0.1)] pl-4">
                  <li><Link href="/shipping" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Shipping Operations</Link></li>
                  <li><Link href="/returns" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Return Policy</Link></li>
                  <li><Link href="/faq" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">General Inquiry</Link></li>
                </ul>
              </div>
              <div className="flex flex-col gap-8">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C6A96B]/50 font-medium">MENU</span>
                <ul className="flex flex-col gap-5 border-l border-[rgba(198,169,107,0.1)] pl-4">
                  <li><Link href="/collections" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Collections</Link></li>
                  <li><Link href="/shop" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Shop</Link></li>
                  <li><Link href="/lookbook" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">Lookbook</Link></li>
                  <li><Link href="/about" className="text-[12px] tracking-wide font-light text-[#EDEDED]/40 hover:text-[#C6A96B] transition-colors">About</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* The Final Edge: Legal Strip */}
      <div className="border-t border-[rgba(198,169,107,0.15)] flex flex-col md:flex-row justify-between items-center px-10 md:px-14 lg:px-24 py-8 bg-[#0a0a0a]">
        <div className="flex gap-8 mb-4 md:mb-0">
          <Link href="/privacy-policy" className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#EDEDED]/20 hover:text-[#C6A96B] transition-colors duration-500">Privacy Policy</Link>
          <Link href="/terms" className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#EDEDED]/20 hover:text-[#C6A96B] transition-colors duration-500">Terms of Use</Link>
          <Link href="/cookies" className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#EDEDED]/20 hover:text-[#C6A96B] transition-colors duration-500">Cookie Data</Link>
        </div>
        <p className="text-[9px] uppercase tracking-[0.3em] font-light text-[#EDEDED]/20 text-center md:text-right">
          © {new Date().getFullYear()} Abayas. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
