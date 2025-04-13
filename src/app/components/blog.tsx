'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

export default function Blog() {
  const [email, setEmail] = useState("")
  const [isDesktop, setIsDesktop] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const mobileScrollRef = useRef<HTMLDivElement>(null)

  const blogPosts = ['/t1.png', '/t2.png', '/t1.png']

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const itemsPerView = isDesktop ? 2 : 1
  const totalPages = Math.ceil(blogPosts.length / itemsPerView)
  const maxCount = isDesktop ? totalPages : blogPosts.length

  const next = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft
      const slideWidth = mobileScrollRef.current.offsetWidth
      const index = Math.round(scrollLeft / slideWidth)
      setCurrentIndex(index)
    }
  }

  return (
    <section id="blog" className="bg-white py-16">
      <div className="px-6 sm:px-24 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 max-w-[600px] sm::mr-20 "> 
          <h3 className="text-[16px] sm:text-[20px] uppercase tracking-wider font-bodrumsans mb-2">
            BLOG
          </h3>
          <h2 className="font-dm-serif text-[48px] sm:text-[74px] font-bold leading-tight mb-6">
            Lorem Ipsum
          </h2>
          <p className="font-tahoma text-[16px] sm:text-[24px] mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula felis bibendum eros suscipit congue.
          </p>
          <div className="h-[4px] bg-[#C0B9B3] w-full my-10"></div>
          <h3 className="font-dm-serif text-[24px] sm:text-[32px] mb-2 font-bold">Newsletter</h3>
          <p className="font-tahoma text-[16px] sm:text-[24px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log('Enviar email para Resend:', email)
            }}
            className="flex flex-col sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-4 bg-[#e6e1db] placeholder-black text-black font-tahoma text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#bfb1a5] px-2 py-2 font-tahoma text-base hover:opacity-90 transition cursor-pointer"
            >
              Lorem Ipsum
            </button>
          </form>
        </div>

        <div className="relative w-full lg:flex-1">
          {isDesktop && (
            <>
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="absolute top-1/2 -translate-y-1/2 left-8 z-20 p-2 text-black disabled:opacity-30 cursor-pointer"
              >
                <ArrowLeft size={48} weight="bold" />
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= totalPages - 1}
                className="absolute top-1/2 -translate-y-1/2 right-8 z-20 p-2 text-black disabled:opacity-30 cursor-pointer"
              >
                <ArrowRight size={48} weight="bold" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            {isDesktop ? (
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100 / totalPages}%)`,
                  width: `${totalPages * 100}%`,
                }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                  const start = pageIndex * itemsPerView
                  const end = start + itemsPerView
                  const groupItems = blogPosts.slice(start, end)
                  return (
                    <div
                      key={pageIndex}
                      className="flex flex-shrink-0 justify-center items-center gap-12"
                      style={{ width: `${100 / totalPages}%` }}
                    >
                      {groupItems.map((src, index) => (
                        <div
                          key={index}
                          className="w-[484px] h-[484px] flex justify-center"
                        >
                          <img
                            src={src}
                            alt={`Post ${index}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
                style={{ scrollPaddingLeft: '1rem', scrollPaddingRight: '1rem' }}
              >
                <div className="flex gap-8 px-4">
                  {blogPosts.map((src, index) => (
                    <div
                      key={index}
                      className="snap-start shrink-0 w-full flex justify-center"
                    >
                      <img
                        src={src}
                        alt={`Post ${index}`}
                        className="max-w-full max-h-[484px] object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="mt-10 px-6 sm:px-24 flex justify-end">
          <div className="flex items-center gap-4 text-sm min-w-[120px]">
            <span>{currentIndex + 1}</span>
            <div className="h-px bg-gray flex-grow" />
            <span>{maxCount}</span>
          </div>
        </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}