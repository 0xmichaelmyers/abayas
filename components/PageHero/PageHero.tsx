interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  image?: string
}

export default function PageHero({ label, title, subtitle, image = '/Hero-main.png' }: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[380px] flex items-end pb-16 px-[60px] overflow-hidden max-[900px]:px-6 max-[900px]:pb-10">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.75) 100%), url(${image}) center / cover no-repeat`,
        }}
      />
      <div className="relative z-[2]" style={{ animation: 'fadeUp 0.9s ease-out both' }}>
        <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-3">{label}</p>
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,6vw,80px)] font-semibold leading-[1.05] text-[#EDEDED]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[14px] font-light text-[rgba(237,237,237,0.7)] mt-4 tracking-[0.05em]">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
