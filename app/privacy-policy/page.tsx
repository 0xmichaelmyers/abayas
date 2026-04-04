import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function PrivacyPolicy() {
  return (
    <PolicyBase title="Privacy Policy">
      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Our Stewardship</h2>
        <p className="text-[18px] leading-[2] text-[#EDEDED]/70 font-light mb-12 max-w-[800px] italic">
          "Discretion is the ultimate hallmark of luxury. We protect your information with the same care we use to craft our garments."
        </p>
        <p className="text-[15px] leading-[2.2] text-[#EDEDED]/60 font-light max-w-[800px]">
          By engaging with Abayas, you choose to share your preferences and information with us. This policy outlines our commitment to ensuring that your data remains as your own, used only to enhance your experience within our digital atelier.
        </p>
      </section>

      <section className="mb-24 flex flex-col gap-12">
        <div>
          <h3 className="text-[20px] font-normal mb-6">Information we gather</h3>
          <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light max-w-[700px] mb-4">
            We collect only what is essential for the creation of your account, the delivery of your orders, and the customization of our collections to your tastes. This include:
          </p>
          <ul className="list-disc pl-6 text-[14px] text-[#EDEDED]/40 leading-relaxed font-light">
            <li>Your contact and delivery information.</li>
            <li>Purchase history and preferred styles.</li>
            <li>Information gathered during bespoke consultations.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[20px] font-normal mb-6">Uncompromising Discretion</h3>
          <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light max-w-[700px]">
            We do not sell, rent, or trade your data to any third parties for marketing purposes. Your information is shared only with our trusted logistics and payment partners to complete your acquisition of our garments.
          </p>
        </div>

        <div>
          <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Your Rights</h2>
          <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light max-w-[700px]">
            You have the right to request a copy of the information we hold, to rectify errors, or to request the complete erasure of your profile from our systems at any time.
          </p>
        </div>
      </section>
    </PolicyBase>
  )
}
