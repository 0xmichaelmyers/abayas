import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function Cookies() {
  return (
    <PolicyBase title="Cookie Preference">
      <section className="mb-20">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Our Experience</h2>
        <p className="text-[16px] leading-[2] text-[#EDEDED]/70 font-light mb-8 max-w-[800px] italic">
          "Like the scent of a signature fragrance, our cookies enhance the presence and experience of our digital atelier."
        </p>
        <p className="text-[15px] leading-[2.2] text-[#EDEDED]/60 font-light max-w-[800px]">
          We use small pieces of data known as cookies to understand how you interact with our collections and to ensure your digital experience is as tailored as our signature tailoring.
        </p>
      </section>

      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4 p-10 bg-[#111] border border-[rgba(198,169,107,0.1)]">
           <h3 className="text-[18px] font-normal tracking-wide">Necessary</h3>
           <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light">
             Essential for the security and operation of your shopping experience.
           </p>
        </div>
        <div className="flex flex-col gap-4 p-10 bg-[#111] border border-[rgba(255,255,255,0.05)]">
           <h3 className="text-[18px] font-normal tracking-wide">Performance</h3>
           <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light">
             Anonymous data that help us refine the speed and elegance of our website.
           </p>
        </div>
        <div className="flex flex-col gap-4 p-10 bg-[#111] border border-[rgba(255,255,255,0.05)]">
           <h3 className="text-[18px] font-normal tracking-wide">Personalization</h3>
           <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light">
             Remembering your preferred silhouettes and collection interests.
           </p>
        </div>
        <div className="flex flex-col gap-4 p-10 bg-[#111] border border-[rgba(255,255,255,0.05)]">
           <h3 className="text-[18px] font-normal tracking-wide">Marketing</h3>
           <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light">
             Discreet social integration for our most frequent visitors.
           </p>
        </div>
      </section>

      <section className="mb-24 p-12 bg-[rgba(198,169,107,0.02)] border border-[rgba(198,169,107,0.08)]">
        <h3 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal italic leading-relaxed">Your Preferences</h3>
        <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 font-light mb-8 max-w-[600px]">
          By continuing to explore the Abayas collection, you consent to our use of these specialized tools. You may adjust these at any time via your browser settings.
        </p>
        <button className="border border-[#C6A96B] text-[#C6A96B] px-10 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-[#C6A96B] hover:text-[#0a0a0a] transition-all">Reject Optional</button>
        <button className="bg-[#C6A96B] text-[#0a0a0a] px-10 py-3 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4af74] transition-all ml-4">Accept All</button>
      </section>
    </PolicyBase>
  )
}
