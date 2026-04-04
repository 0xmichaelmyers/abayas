import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function Returns() {
  return (
    <PolicyBase title="Returns & Exchanges">
      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Our Policy</h2>
        <p className="text-[18px] leading-[2] text-[#EDEDED]/70 font-light mb-12 max-w-[800px] italic">
          "True luxury is peace of mind. We offer a seamless return process for our exceptional garments."
        </p>
        <p className="text-[15px] leading-[2.2] text-[#EDEDED]/60 font-light max-w-[800px]">
          We accept returns or exchanges within 14 days of receipt, provided the garments are in their original, immaculate condition with all luxury tags and packaging intact.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-12 font-normal">How to Return</h2>
        <div className="grid grid-cols-1 gap-12">
          {[
            { step: "01", title: "Initiate Request", desc: "Contact our client concierge to receive your authorized return label." },
            { step: "02", title: "Original Packaging", desc: "Ensure your piece is safe in its original atelier box." },
            { step: "03", title: "Global Collection", desc: "Our couriers will collect from your preferred location." },
            { step: "04", title: "Atelier Review", desc: "Once quality control is completed, your refund is processed within 48 hours." }
          ].map((item, i) => (
            <div key={i} className="flex gap-10 items-center">
              <span className="text-[32px] font-[family-name:var(--font-display)] text-[#C6A96B]/20 w-[60px]">{item.step}</span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-normal tracking-wide">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light max-w-[500px]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Exclusions</h2>
        <p className="text-[14px] leading-[2] text-[#EDEDED]/50 font-light max-w-[700px] bg-[#111] p-10 border-l border-[#C6A96B]">
          Custom-tailored orders and pieces from our "Heritage Series" created on a bespoke basis are final sale and not eligible for return. These are crafted uniquely for you and cannot be recreated.
        </p>
      </section>
    </PolicyBase>
  )
}
