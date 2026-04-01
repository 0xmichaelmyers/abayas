import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-[70px] px-[60px] pb-10 bg-[#0a0a0a] border-t border-[rgba(184,150,90,0.12)] max-[900px]:py-[50px] max-[900px]:px-6 max-[900px]:pb-[30px]">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[50px] max-[900px]:gap-[30px] mb-[60px]">
        <div className="max-[900px]:col-span-2 max-[600px]:col-span-1">
          <Link href="/" className="block mb-[18px] font-[family-name:var(--font-display)] font-semibold text-[28px] tracking-[0.1em] uppercase text-[#EDEDED] no-underline">Modesty</Link>
          <p className="text-[12px] leading-[1.8] text-[rgba(237,237,237,0.7)] max-w-[240px] mb-6">
            Grace in every fold, empowerment in every choice. Premium modest fashion for the modern woman.
          </p>
          <div className="flex gap-[14px]">
            {[
              // Instagram
              { d: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></>, stroke: true },
              // Facebook
              { d: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />, stroke: true },
              // TikTok
              { d: <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" />, stroke: true },
              // WhatsApp
              { d: <><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></>, stroke: true },
            ].map(({ d, stroke }, i) => (
              <a key={i} href="#" className="text-[rgba(237,237,237,0.7)] no-underline transition-colors duration-300 hover:text-[#C6A96B]">
                <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5">{d}</svg>
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: 'Shop',
            links: [
              { label: 'New Arrivals', href: '/shop' },
              { label: 'Abayas', href: '/collections' },
              { label: 'Hijabs', href: '/collections' },
              { label: 'Chadars', href: '/collections' },
              { label: 'Evening Wear', href: '/collections' },
              { label: 'Bridal', href: '/collections' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'Our Story', href: '/about' },
              { label: 'Craftsmanship', href: '/about' },
              { label: 'Sustainability', href: '/about' },
              { label: 'Careers', href: '/contact' },
              { label: 'Press', href: '/contact' },
            ],
          },
          {
            title: 'Support',
            links: [
              { label: 'Contact Us', href: '/contact' },
              { label: 'Shipping Info', href: '/contact' },
              { label: 'Returns', href: '/contact' },
              { label: 'Size Guide', href: '/contact' },
              { label: 'FAQ', href: '/contact' },
            ],
          },
        ].map(({ title, links }) => (
          <div key={title}>
            <h5 className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B] font-normal mb-[22px]">{title}</h5>
            <ul className="list-none">
              {links.map(({ label, href }) => (
                <li key={label} className="mb-3">
                  <Link href={href} className="text-[12px] text-[rgba(237,237,237,0.7)] no-underline tracking-[0.05em] transition-colors duration-300 hover:text-[#C6A96B]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h5 className="text-[10px] tracking-[0.4em] uppercase text-[#C6A96B] font-normal mb-[22px]">Newsletter</h5>
          <p className="text-[11px] text-[rgba(237,237,237,0.7)] leading-[1.7] mb-[18px]">
            Subscribe for exclusive offers and new collection previews.
          </p>
          <div className="flex border border-[rgba(184,150,90,0.3)]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border-none py-3 px-4 text-[11px] text-[#EDEDED] outline-none placeholder:text-[rgba(245,240,235,0.35)]"
            />
            <button
              type="button"
              className="bg-[#C6A96B] border-none text-[#0a0a0a] text-[9px] font-semibold tracking-[0.25em] uppercase px-[18px] cursor-pointer transition-colors duration-300 hover:bg-[#d4af74]"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.06)] pt-[30px] flex justify-between items-center">
        <p className="text-[11px] text-[rgba(245,240,235,0.3)] tracking-[0.05em]">© Modesty 2025. All rights reserved.</p>
        <div>
          {['Privacy Policy', 'Terms of Use', 'Cookies'].map(l => (
            <a key={l} href="#" className="text-[11px] text-[rgba(245,240,235,0.3)] no-underline ml-6 tracking-[0.05em] transition-colors duration-300 hover:text-[#C6A96B]">{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
