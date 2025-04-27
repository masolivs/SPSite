'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import FadeInSection from './fadeInSection';

export default function Blog() {
  const [email, setEmail] = useState("")
  const [isDesktop, setIsDesktop] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modal, setModal] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const mobileScrollRef = useRef<HTMLDivElement>(null)

  const blogPosts = ['posts/t1.png', 'posts/t2.png', 'posts/t1.png']

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  const showModal = (type: 'success' | 'error', message: string) => {
    setModal({ type, message })
    setTimeout(() => setModal(null), 4000)
  }

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        showModal('error', data.error || 'Erro ao inscrever.')
        return
      }

      showModal('success', data.message || 'Inscrição realizada com sucesso!')
      setEmail('')
    } catch (err) {
      console.error(err)
      showModal('error', 'Erro ao enviar inscrição.')
    }
  }

  return (
    <section id="blog" className="bg-white py-16 relative">
      <div className="px-6 sm:px-24 flex flex-col lg:flex-row gap-12 items-start">
        <div className="flex-1 max-w-[600px]">
          <FadeInSection>
            <h3 className="text-[14px] sm:text-[20px] uppercase tracking-wider font-bodrumsans mb-2">
              BLOG
            </h3>
            <h2 className="font-dm-serif text-[40px] sm:text-[74px] font-bold leading-tight mb-6">
              Publicações
            </h2>
            <p className="font-tahoma text-[18px] sm:text-[24px] mb-8">
              Confira os conteúdos do nosso LinkedIn sobre temas jurídicos relevantes, reflexões e atualizações do Silva Prado.
            </p>
            <div className="h-[4px] bg-[#C0B9B3] w-full my-4"></div>
            <h3 className="font-dm-serif text-[26px] sm:text-[32px] mb-2 font-bold">Newsletter</h3>
            <p className="font-tahoma text-[16px] sm:text-[20px] mb-4">
              Inscreva-se com seu e-mail e acompanhe as principais notícias, artigos e conteúdos do Silva Prado diretamente na sua caixa de entrada.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-row flex-nowrap">
              <input
                type="email"
                required
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-2 bg-[#e6e1db] placeholder-black text-black font-tahoma text-sm focus:outline-none rounded-none"
              />
              <button
                type="submit"
                className="bg-[#bfb1a5] px-4 py-2 font-tahoma text-sm hover:opacity-90 transition cursor-pointer rounded-none"
              >
                Inscrever-se
              </button>
            </form>
          </FadeInSection>
        </div>

        <div className="relative w-full lg:flex-1 sm:-right-[90px]">
          {isDesktop && (
            <>
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="absolute top-1/2 -translate-y-1/2 left-6 z-20 p-2 text-black disabled:opacity-30 cursor-pointer"
              >
                <ArrowLeft size={48} />
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= totalPages - 1}
                className="absolute top-1/2 -translate-y-1/2 right-6 z-20 p-2 text-black disabled:opacity-30 cursor-pointer"
              >
                <ArrowRight size={48} />
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
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-6 -mx-6"
              >
                {blogPosts.map((src, index) => (
                  <div
                    key={index}
                    className="snap-center flex-shrink-0 w-full flex justify-center"
                  >
                    <div className="w-[300px] flex justify-center">
                      <img
                        src={src}
                        alt={`Post ${index}`}
                        className="object-contain w-full h-auto max-h-[484px]"
                      />
                    </div>
                  </div>
                ))}
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

      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade">
          <div className={`bg-white shadow-lg p-6 max-w-sm w-full text-center border-t-4 ${
            modal.type === 'success' ? 'border-green-500' : 'border-red-500'
          }`}>
            <div className="text-4xl mb-2">
              {modal.type === 'success' ? '✅' : '❌'}
            </div>
            <p className="text-lg font-medium text-dark mb-4">{modal.message}</p>
            <button
              onClick={() => setModal(null)}
              className="text-sm text-gray-500 hover:underline cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <style jsx global>{`
        @keyframes fade {
          from { opacity: 0 }
          to { opacity: 1 }
        }
        .animate-fade {
          animation: fade 0.3s ease-in-out;
        }
      `}</style>
    </section>
  )
}
