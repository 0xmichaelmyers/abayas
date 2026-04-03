'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Collections', href: '/collections' },
  { label: 'Shop', href: '/shop' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const showSolid = !isHome || scrolled

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-[22px] transition-all duration-300 max-[900px]:px-6 max-[900px]:py-[18px]"
      style={{
        background: showSolid
          ? 'rgba(10,10,10,0.97)'
          : 'linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)',
      }}
    >
      {/* Border line — opacity transitions smoothly, no class toggling */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: 'rgba(184,150,90,0.15)',
          opacity: showSolid ? 1 : 0,
        }}
      />

      <Link href="/" className="font-[family-name:var(--cormorant-font)] font-light italic text-[36px] tracking-[0.08em] text-[#EDEDED] no-underline">
        Abayas
      </Link>

      <ul className="flex gap-9 list-none max-[900px]:hidden">
        {navLinks.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className={`text-[9.23px] font-normal tracking-[0.2em] uppercase no-underline transition-colors duration-300 hover:text-[#d4af74] ${pathname === href ? 'text-[#C6A96B]' : 'text-[#EDEDED]'}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex gap-5 items-center">
        {[
          { label: 'Search', path: <><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="22" y2="22" /></> },
          { label: 'Account', path: <><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></> },
          { label: 'Cart', path: <><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></> },
        ].map(({ label, path }) => (
          <a key={label} href="#" aria-label={label} className="text-[rgba(237,237,237,0.7)] no-underline flex items-center transition-colors duration-300 hover:text-[#d4af74]">
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-none stroke-current stroke-[1.5]">{path}</svg>
          </a>
        ))}
      </div>

      <button
        className="hidden max-[900px]:flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-[22px] h-px bg-[#EDEDED] transition-transform duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
        <span className={`block w-[22px] h-px bg-[#EDEDED] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-[22px] h-px bg-[#EDEDED] transition-transform duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
      </button>

      {menuOpen && (
        <ul className="fixed top-[70px] left-0 right-0 flex flex-col items-center gap-6 list-none bg-[rgba(10,10,10,0.98)] py-8 px-6 border-t border-[rgba(184,150,90,0.1)] min-[901px]:hidden">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-[9.23px] font-normal tracking-[0.2em] uppercase no-underline ${pathname === href ? 'text-[#C6A96B]' : 'text-[#EDEDED]'}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
