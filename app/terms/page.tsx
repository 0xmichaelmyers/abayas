import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function Terms() {
  return (
    <PolicyBase title="Terms of Use">
      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Our Values</h2>
        <p className="text-[18px] leading-[2] text-[#EDEDED]/70 font-light mb-12 max-w-[800px] italic">
          "Each interaction with Abayas is an agreement of mutual respect, transparency, and a Shared appreciation for modest excellence."
        </p>
        <p className="text-[15px] leading-[2.2] text-[#EDEDED]/60 font-light max-w-[800px]">
          By accessing and using this website, you are agreeing to the terms that govern our digital presence and our artisanal relationship. We invite you to read these with the same attention we pay to our craftsmanship.
        </p>
      </section>

      <section className="mb-24 flex flex-col gap-12">
        <div>
          <h3 className="text-[20px] font-normal mb-6">Our Proprietary Designs</h3>
          <p className="text-[14px] leading-[2.1] text-[#EDEDED]/50 font-light max-w-[700px]">
            Every pattern, image, text, and design featured on this website is the intellectual property of Abayas. Reproduction, imitation, or use of our creative works for commercial purposes is strictly prohibited unless written consent is provided by our lead designer.
          </p>
        </div>

        <div>
          <h3 className="text-[20px] font-normal mb-6">Accurate Representation</h3>
          <p className="text-[14px] leading-[2.1] text-[#EDEDED]/50 font-light max-w-[700px]">
            We make every effort to display the true color, texture, and detail of our fabrics. However, due to individual monitor specifications, we cannot guarantee that the visual representation will precisely match the physical garment. Small variations are evidence of our artisanal hand-finishing.
          </p>
        </div>

        <div>
          <h3 className="text-[20px] font-normal mb-6">Order Acceptance</h3>
          <p className="text-[14px] leading-[2.1] text-[#EDEDED]/50 font-light max-w-[700px]">
            The placement of an order does not constitute a legally binding agreement until your acquisition is accepted and dispatched by our atelier. We reserve the right to cancel orders should fabric availability or quality control standards not be met.
          </p>
        </div>
      </section>

      <section className="mb-24 border border-[rgba(255,255,255,0.05)] p-12 bg-[rgba(198,169,107,0.02)]">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal italic">Contact Us</h2>
        <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light mb-8">
          For any legal enquiries, please reach out to our legal concierge at <span className="text-[#C6A96B]">legal@abayas.com</span>
        </p>
      </section>
    </PolicyBase>
  )
}
