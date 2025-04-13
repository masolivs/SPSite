'use client'

import { useState } from 'react'

export default function Blog() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Enviar email para Resend:', email)
  }

  return (
    <section id="blog" className="bg-white py-16">
      <div className="px-6 sm:px-24 mb-10">
        <h3 className="text-[16px] sm:text-[18px] uppercase tracking-wider font-bodrumsans mb-2">
          BLOG
        </h3>
        <h2 className="font-dm-serif text-[48px] sm:text-[80px] font-bold leading-tight mb-6">
          Lorem Ipsum
        </h2>
        <p className="font-tahoma text-[16px] sm:text-[24px] max-w-[600px] mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula felis bibendum eros suscipit congue.
        </p>
        <div className="h-[4px] bg-[#C0B9B3] w-full sm:max-w-[600px] my-10"></div>
        <div className="max-w-[600px]">
          <h3 className="font-dm-serif text-[24px] sm:text-[32px] mb-2  font-bold">Newsletter</h3>
          <p className="font-tahoma text-[16px] sm:text-[24px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row sm:gap-0"
          >
            <input
              type="email"
              required
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-4 bg-[#e6e1db] placeholder-black text-black font-tahoma text-base focus:outline-none "
            />
            <button
              type="submit"
              className="bg-[#bfb1a5] px-2 py-2 font-tahoma text-base hover:opacity-90 transition "
            >
              Lorem Ipsum
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
