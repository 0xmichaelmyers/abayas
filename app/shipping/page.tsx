import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function Shipping() {
  return (
    <PolicyBase title="Shipping Policy">
      <section className="mb-20">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Our Commitment</h2>
        <p className="text-[16px] leading-[2] text-[#EDEDED]/70 font-light mb-8 max-w-[800px]">
          We believe the arrival of your order should be as exceptional as the garments within. Each piece is meticulously packed with artisanal care to ensure it reaches you in pristine condition, regardless of its global destination.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Global Delivery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4 p-8 border border-[rgba(198,169,107,0.1)] bg-[rgba(198,169,107,0.02)]">
            <h3 className="text-[18px] font-normal">Standard Delivery</h3>
            <p className="text-[14px] leading-relaxed text-[#EDEDED]/60 font-light">
              Crafted for those who appreciate the journey. Delivered within 5–7 business days.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-8 border border-[rgba(198,169,107,0.1)] bg-[rgba(198,169,107,0.02)]">
            <h3 className="text-[18px] font-normal">Priority Atelier</h3>
            <p className="text-[14px] leading-relaxed text-[#EDEDED]/60 font-light">
              Express shipping for select pieces. Delivered within 48–72 hours across major metropolises.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Bespoke Handling</h2>
        <p className="text-[15px] leading-[2.2] text-[#EDEDED]/60 font-light max-w-[800px]">
          Our logistics partners are chosen for their discretion and dedication to handling high-value luxury garments. For our signature series and limited-edition items, specialized white-glove delivery is available upon request in selected regions.
        </p>
      </section>
    </PolicyBase>
  )
}
