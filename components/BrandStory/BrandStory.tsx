export default function BrandStory() {
  return (
    <section className="relative bg-[#0d0d0d] py-[120px] px-[80px] max-[900px]:px-6 max-[900px]:py-[80px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/Story-BG.png')" }}
      />

      <div className="relative z-[1] max-w-[1400px] mx-auto">

        {/* Row */}
        <div className="flex items-end gap-[80px] max-[900px]:flex-col max-[900px]:gap-[40px]">

          {/* Left — Text */}
          <div className="flex-1 max-w-[520px] max-[900px]:max-w-none">
            <div>
              {/* Top fading line — above "Our Heritage" */}
              <div
                className="w-[120px] h-px mb-[36px]"
                style={{ background: 'linear-gradient(to right, #C6A96B, transparent)' }}
              />
              <p className="text-[9px] tracking-[0.45em] uppercase text-[#C6A96B] mb-[36px]">
                Our Heritage
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(34px,3.5vw,52px)] font-normal text-[#EDEDED] mb-[40px] leading-[1.1]">
                The Art of Modest Fashion
              </h2>
              <p className="text-[13px] leading-[1.85] text-[rgba(237,237,237,0.55)] max-w-[480px] mb-[48px]">
                Every piece in our collection tells a story of craftsmanship and devotion. We blend traditional artistry with contemporary design, creating garments that honor your values while celebrating your individuality. From the finest fabrics sourced globally to the intricate details finished by skilled artisans.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center justify-center border border-[#C6A96B] text-[#C6A96B] text-[12px] font-normal tracking-[0.15em] no-underline py-[14px] px-[32px] transition-all duration-300 hover:bg-[#C6A96B] hover:text-[#0a0a0a]"
              >
                Discover the Craft
              </a>
            </div>
          </div>

          {/* Right — Image only */}
          <div className="flex-[1.2] max-[900px]:w-full">
            <img
              src="/heritage-image.png"
              alt="Artisan craft"
              className="w-full h-[420px] max-[900px]:h-[280px] object-cover"
            />
          </div>

        </div>

        {/* Bottom fading line — outside the row, aligned right */}
        <div className="flex justify-end mt-[16px]">
          <div
            className="w-[120px] h-px"
            style={{ background: 'linear-gradient(to left, #C6A96B, transparent)' }}
          />
        </div>

      </div>
    </section>
  )
}
