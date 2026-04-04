import PolicyBase from '@/components/PolicyBase/PolicyBase'

export default function FAQ() {
  const faqs = [
    { 
      question: "What defines an Abayas signature silk?", 
      answer: "Our signature silks are sourced exclusively from traditional weaving houses in Italy and the Middle East, chosen for their unparalleled weight, liquid durability, and the way they reflect light without compromising on modesty. Every yard is inspected for imperfections before it enters our atelier." 
    },
    { 
      question: "Are your items ready-to-ship or made-to-order?", 
      answer: "We carry a curated range of signature pieces that are limited-edition ready-to-ship. However, our more intricate 'Heritage' series is crafted on a made-to-order basis, requiring 14-21 days of artisanal devotion before being dispatched." 
    },
    { 
      question: "Do you offer international shipping?", 
      answer: "Yes, we ship our luxury garments globally with DHL and specialized high-value logistics partners. Each piece arrives in our signature climate-controlled packaging to ensure it reaches you in the same condition it left the atelier." 
    },
    { 
      question: "How do I care for my abaya?", 
      answer: "Due to the delicate nature of high-grade silk, fine wool, and hand-applied embellishments, we recommend professional dry cleaning only. Store your garment in the provided breathable cotton garment bag, away from direct sunlight, to preserve the fabric's integrity and color depth." 
    },
    { 
      question: "Is custom tailoring available?", 
      answer: "Indeed. We offer a bespoke tailoring service for our 'Signature Series' upon request. Once you place an order, you can arrange a virtual measurement session with our atelier lead to ensure your piece is tailored uniquely to your silhouette." 
    }
  ]

  return (
    <PolicyBase title="Common Enquiries">
      <section className="mb-24">
        <h2 className="text-[12px] tracking-[0.4em] uppercase text-[#C6A96B] mb-12 font-normal">Our Service</h2>
        <p className="text-[18px] leading-[2] text-[#EDEDED]/70 font-light mb-16 max-w-[800px] italic">
          "Each question is an opportunity to share our passion for modest excellence and artisanal craft."
        </p>

        <div className="flex flex-col gap-12">
          {faqs.map((f, i) => (
            <div key={i} className="group pb-12 border-b border-[rgba(198,169,107,0.1)] hover:border-[rgba(198,169,107,0.3)] transition-colors duration-500">
              <h3 className="text-[22px] font-normal mb-6 tracking-wide group-hover:text-[#C6A96B] transition-colors duration-500">
                {f.question}
              </h3>
              <p className="text-[15px] leading-[2.2] text-[#EDEDED]/50 font-light max-w-[800px]">
                {f.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-24 text-center py-20 bg-[rgba(198,169,107,0.03)] border border-[rgba(198,169,107,0.08)]">
        <h3 className="text-[20px] font-normal mb-6">Need Further Assistance?</h3>
        <p className="text-[14px] leading-relaxed text-[#EDEDED]/50 mb-10">Our concierge is available via live chat or direct consultation.</p>
        <div className="flex justify-center gap-8">
           <button className="border border-[#C6A96B] text-[#C6A96B] px-10 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-[#C6A96B] hover:text-[#0a0a0a] transition-all">Live Chat</button>
           <button className="bg-[#C6A96B] text-[#0a0a0a] px-10 py-3 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#d4af74] transition-all">Email Us</button>
        </div>
      </section>
    </PolicyBase>
  )
}
