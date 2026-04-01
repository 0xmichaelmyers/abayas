const images = ['/rectangle-2.png', '/rectangle-3.png', '/rectangle-4.png', '/rectangle-5.png', '/rectangle-6.png']

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function InstagramFeed() {
  return (
    <section className="py-[80px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[60px] max-[900px]:px-6">
      <p className="text-center text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-2">Follow Us On</p>
      <p className="text-center font-[family-name:var(--font-display)] text-[24px] font-normal text-[rgba(237,237,237,0.7)] mb-10">
        <a href="#" className="text-[rgba(237,237,237,0.7)] no-underline">@modestlyonline</a>
      </p>
      <div className="reveal grid grid-cols-5 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 gap-[3px] max-w-[1200px] mx-auto">
        {images.map((src, i) => (
          <div key={i} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover brightness-75 grayscale-[0.1] transition-all duration-[600ms] ease-in-out group-hover:scale-[1.07] group-hover:brightness-50 group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-[rgba(10,10,10,0.4)] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <IgIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
