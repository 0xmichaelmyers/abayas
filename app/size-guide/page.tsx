import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function SizeGuide() {
  return (
    <PolicyBase title="Size Guide">
      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-8 font-normal">Our Measurements</h2>
        <p className="text-[16px] leading-[2] text-[#EDEDED]/70 font-light mb-12 max-w-[800px]">
          We believe modesty is about how a piece moves around your silhouette. Our sizing is based on traditional abaya measurements to ensure perfect drape and length that honors your grace.
        </p>
        
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#C6A96B]/20">
                <th className="py-6 text-left text-[14px] font-normal text-[#C6A96B] uppercase tracking-widest px-4">Size</th>
                <th className="py-6 text-left text-[14px] font-normal text-[#C6A96B] uppercase tracking-widest px-4">Height (Approx)</th>
                <th className="py-6 text-left text-[14px] font-normal text-[#C6A96B] uppercase tracking-widest px-4">Length (Inches)</th>
                <th className="py-6 text-left text-[14px] font-normal text-[#C6A96B] uppercase tracking-widest px-4">Width (Inches)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
              {[
                { size: "52", height: "5'0\" - 5'1\"", length: "52", width: "22" },
                { size: "54", height: "5'2\" - 5'3\"", length: "54", width: "23.5" },
                { size: "56", height: "5'4\" - 5'5\"", length: "56", width: "25" },
                { size: "58", height: "5'6\" - 5'7\"", length: "58", width: "26.5" },
                { size: "60", height: "5'8\" - 5'9\"", length: "60", width: "28" }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-[rgba(198,169,107,0.03)] transition-colors">
                  <td className="py-8 text-[18px] font-normal px-4">{row.size}</td>
                  <td className="py-8 text-[14px] text-[#EDEDED]/60 font-light px-4">{row.height}</td>
                  <td className="py-8 text-[14px] text-[#EDEDED]/60 font-light px-4">{row.length}</td>
                  <td className="py-8 text-[14px] text-[#EDEDED]/60 font-light px-4">{row.width}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-24 p-12 bg-[rgba(198,169,107,0.05)] border border-[rgba(198,169,107,0.1)]">
        <h3 className="text-[20px] font-normal mb-6">Concierge Support</h3>
        <p className="text-[14px] leading-[2.2] text-[#EDEDED]/60 font-light max-w-[700px] mb-8">
          If you require bespoke tailoring or assistance with choosing the perfect silhouette for your height and form, our atelier concierge is available for video call consultations to ensure an immaculate fit.
        </p>
        <button className="bg-[#C6A96B] text-[#0a0a0a] px-8 py-3 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4af74] transition-colors">
          Book Consultation
        </button>
      </section>
    </PolicyBase>
  )
}
