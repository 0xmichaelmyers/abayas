import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-start px-20 overflow-hidden max-[900px]:px-[30px]">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(10,10,10,0.15) 0%, rgba(10,10,10,0.5) 60%, rgba(10,10,10,0.92) 100%), url(/Hero-main.png) center / cover no-repeat',
          animation: 'heroZoom 12s ease-out forwards',
        }}
      />

      <div className="relative z-[2]" style={{ animation: 'fadeUp 1.2s ease-out 0.3s both' }}>
        <p className="text-[14px] font-normal tracking-[0.3em] uppercase text-[#C6A96B] mb-5">
          Modest Luxury Fashion
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[130px] max-[900px]:text-[72px] font-semibold leading-[1.05] text-[#EDEDED] mb-5">
          Redefining<br />Modest Luxury
        </h1>
        <p className="text-[28px] font-light text-[#EDEDED] mb-10">Elegance in every detail</p>
        <Link
          href="#collections"
          className="inline-flex items-center justify-center w-[200px] h-[50.8px] border border-[#C6A96B] text-[#C6A96B] text-[13px] font-medium tracking-[0.1em] uppercase no-underline transition-all duration-300 hover:bg-[#C6A96B] hover:text-[#0a0a0a]"
        >
          Explore Collection
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]">
        <div
          className="w-px h-10 bg-gradient-to-b from-[#C6A96B] to-transparent"
          style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
        />
        <span className="text-[9px] tracking-[0.3em] uppercase text-[#C6A96B]">Scroll</span>
      </div>
    </section>
  )
}
