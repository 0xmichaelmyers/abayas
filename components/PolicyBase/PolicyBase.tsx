"use client"

import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

interface PolicyBaseProps {
  title: string
  children: React.ReactNode
}

export default function PolicyBase({ title, children }: PolicyBaseProps) {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] text-[#EDEDED] min-h-screen pt-[180px] pb-[120px]">
        <div className="max-w-[1000px] mx-auto px-[60px] max-[900px]:px-6">
          {/* Header */}
          <header className="mb-[100px] border-b border-[rgba(198,169,107,0.1)] pb-12">
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(40px,5vw,72px)] font-normal leading-tight tracking-tight">
              {title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
