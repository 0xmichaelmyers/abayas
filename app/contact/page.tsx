import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import PageHero from '@/components/PageHero/PageHero'
import RevealWrapper from '@/components/RevealWrapper/RevealWrapper'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Modesty',
  description: 'Get in touch with the Modesty team.',
}

const faqs = [
  { q: 'What is your return policy?', a: 'We accept returns within 14 days of delivery for unworn, unaltered items in original packaging.' },
  { q: 'Do you ship internationally?', a: 'Yes, we ship worldwide. International orders typically arrive within 7–14 business days.' },
  { q: 'Can I request custom sizing?', a: 'Absolutely. Contact us with your measurements and we will create a bespoke piece for you.' },
  { q: 'How do I care for my garments?', a: 'Most pieces require dry cleaning or gentle hand wash. Care instructions are included with every order.' },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Get In Touch"
          title="Contact Us"
          subtitle="We'd love to hear from you"
          image="/Editorial-BL.png"
        />

        <section className="py-[100px] px-[60px] bg-[#0a0a0a] max-[900px]:py-[70px] max-[900px]:px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_1.4fr] max-[900px]:grid-cols-1 gap-[80px] max-[900px]:gap-[60px]">

            {/* Info */}
            <RevealWrapper>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-[14px]">Our Details</p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] font-normal text-[#EDEDED] mb-8 leading-[1.15]">
                Let's Connect
              </h2>
              <div className="space-y-8">
                {[
                  { label: 'Email', value: 'hello@modestly.com' },
                  { label: 'Phone', value: '+92 300 000 0000' },
                  { label: 'Address', value: 'Gulberg III, Lahore, Pakistan' },
                  { label: 'Hours', value: 'Mon – Sat, 10am – 7pm PKT' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-[9px] tracking-[0.35em] uppercase text-[rgba(237,237,237,0.4)] mb-1">{label}</p>
                    <p className="text-[14px] text-[#EDEDED] tracking-[0.03em]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-[rgba(184,150,90,0.1)]">
                <p className="text-[9px] tracking-[0.35em] uppercase text-[rgba(237,237,237,0.4)] mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'Pinterest'].map((s) => (
                    <a key={s} href="#" className="text-[9px] tracking-[0.25em] uppercase text-[rgba(237,237,237,0.6)] no-underline border-b border-[rgba(184,150,90,0.3)] pb-[2px] transition-colors duration-300 hover:text-[#C6A96B]">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </RevealWrapper>

            {/* Form */}
            <RevealWrapper>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] mb-[14px]">Send a Message</p>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,2.5vw,36px)] font-normal text-[#EDEDED] mb-8">
                Write to Us
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-5">
                  <div>
                    <label className="block text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.5)] mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border border-[rgba(184,150,90,0.2)] py-3 px-4 text-[12px] text-[#EDEDED] outline-none focus:border-[rgba(198,169,107,0.6)] transition-colors duration-300 placeholder:text-[rgba(237,237,237,0.2)]"
                      placeholder="Aisha"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.5)] mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border border-[rgba(184,150,90,0.2)] py-3 px-4 text-[12px] text-[#EDEDED] outline-none focus:border-[rgba(198,169,107,0.6)] transition-colors duration-300 placeholder:text-[rgba(237,237,237,0.2)]"
                      placeholder="Malik"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.5)] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-[rgba(184,150,90,0.2)] py-3 px-4 text-[12px] text-[#EDEDED] outline-none focus:border-[rgba(198,169,107,0.6)] transition-colors duration-300 placeholder:text-[rgba(237,237,237,0.2)]"
                    placeholder="hello@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.5)] mb-2">Subject</label>
                  <select className="w-full bg-[#0a0a0a] border border-[rgba(184,150,90,0.2)] py-3 px-4 text-[12px] text-[rgba(237,237,237,0.7)] outline-none focus:border-[rgba(198,169,107,0.6)] transition-colors duration-300 cursor-pointer">
                    <option value="">Select a topic</option>
                    <option value="order">Order Enquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-[rgba(237,237,237,0.5)] mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border border-[rgba(184,150,90,0.2)] py-3 px-4 text-[12px] text-[#EDEDED] outline-none focus:border-[rgba(198,169,107,0.6)] transition-colors duration-300 resize-none placeholder:text-[rgba(237,237,237,0.2)]"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-[50px] bg-transparent border border-[#C6A96B] text-[#C6A96B] text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#C6A96B] hover:text-[#0a0a0a] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </RevealWrapper>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-[80px] px-[60px] bg-[#111111] max-[900px]:py-[60px] max-[900px]:px-6">
          <RevealWrapper>
            <p className="text-[9px] tracking-[0.4em] uppercase text-[#C6A96B] text-center mb-3">Common Questions</p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(28px,3vw,40px)] font-normal text-[#EDEDED] text-center mb-[60px]">
              FAQ
            </h2>
          </RevealWrapper>
          <RevealWrapper className="max-w-[800px] mx-auto space-y-[1px]">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[#0a0a0a] border border-[rgba(184,150,90,0.08)] p-8 hover:border-[rgba(184,150,90,0.2)] transition-colors duration-300">
                <p className="font-[family-name:var(--font-display)] text-[17px] font-normal text-[#EDEDED] mb-3">{faq.q}</p>
                <p className="text-[12px] leading-[1.8] text-[rgba(237,237,237,0.6)]">{faq.a}</p>
              </div>
            ))}
          </RevealWrapper>
        </section>
      </main>
      <Footer />
    </>
  )
}
