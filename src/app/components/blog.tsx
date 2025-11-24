'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import FadeInSection from './fadeInSection';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [isDesktop, setIsDesktop] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const blogPosts = [
    { src: 'posts/post1.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_pldft-coaf-seprelad-activity-7320870221752229888-90CA' },
    { src: 'posts/post2.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_praejaeztica-licitaaexaeles-integridade-activity-7318692484417511424-93F2' },
    { src: 'posts/post3.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_praejaeztica-cgu-integridade-activity-7318376292737806338-fZ0l' },
    { src: 'posts/post4.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_praejaeztica-cgu-compliance-activity-7317989803545796608-cPfb' },
    { src: 'posts/post5.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_segurancapublica-integracaonacional-pecdaseguranca-activity-7315822132150611968-dDeY' },
    { src: 'posts/post6.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_compliance-ue-gdpr-activity-7315434994905063425-UXE7' },
    { src: 'posts/post7.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_governanaexacorporativa-integridade-aeztica-activity-7313928458194112513-AL_m' },
    { src: 'posts/post8.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_esg-cop30-sustentabilidade-activity-7313244574972297216-MTOO' },
    { src: 'posts/post9.png', link: 'https://www.linkedin.com/posts/silva-prado-advogados_anpd-ia-sandboxregulatorio-activity-7312882879879921666-fXg0' },
  ];

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const showModal = (type: 'success' | 'error', message: string) => {
    setModal({ type, message });
    setTimeout(() => setModal(null), 4000);
  };

  const itemsPerView = isDesktop ? 2 : 1;
  const totalPages = isDesktop ? Math.ceil(blogPosts.length / 2) : blogPosts.length;
  const maxCount = isDesktop ? totalPages : blogPosts.length;

  const next = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      const scrollLeft = mobileScrollRef.current.scrollLeft;
      const slideWidth = mobileScrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / slideWidth);
      setCurrentIndex(index);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        showModal('error', data.error || 'Erro ao inscrever.');
        return;
      }

      showModal('success', data.message || 'Inscrição realizada com sucesso!');
      setEmail('');
    } catch (err) {
      console.error(err);
      showModal('error', 'Erro ao enviar inscrição.');
    }
  };

  return (
    <section id="blog" className="bg-white py-16 relative">
      <div className="px-6 sm:px-24 flex flex-col lg:flex-row gap-36 items-start max-w-[1440px] mx-auto">
        {/* COLUNA ESQUERDA */}
        <div className="w-full lg:w-[40%]">
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
            <h3 className="font-dm-serif text-[26px] sm:text-[32px] mb-2 font-bold">
              Newsletter
            </h3>
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

        <div className="relative w-full lg:w-[60%]">
          {isDesktop && (
            <>
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="absolute top-1/2 left-[-60px] -translate-y-1/2 z-20 text-black disabled:opacity-30 cursor-pointer"
              >
                <ArrowLeft size={36} />
              </button>
              <button
                onClick={next}
                disabled={currentIndex >= totalPages - 1}
                className="absolute top-1/2 right-[-60px] -translate-y-1/2 z-20 text-black disabled:opacity-30 cursor-pointer"
              >
                <ArrowRight size={36} />
              </button>
            </>
          )}

          <div className="overflow-hidden relative">
            {isDesktop ? (
              <>
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100 / totalPages}%)`,
                    width: `${totalPages * 100}%`,
                  }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIndex) => {
                    const start = pageIndex * 2;
                    const end = start + 2;
                    const groupItems = blogPosts.slice(start, end);
                    return (
                      <div
                        key={pageIndex}
                        className="flex flex-shrink-0 justify-center gap-8"
                        style={{ width: `${100 / totalPages}%` }}
                      >
                        {groupItems.map((post, index) => (
                          <div
                            key={index}
                            className="flex justify-center items-center h-[540px]"
                            style={{ width: 'clamp(300px, 48%, 540px)' }}
                          >
                            <a href={post.link} target="_blank" rel="noopener noreferrer">
                              <img
                                src={post.src}
                                alt={`Post ${index}`}
                                className="w-full h-full object-contain hover:opacity-90 transition"
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>

              </>
            ) : (
              <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-6 -mx-6"
              >
                {blogPosts.map((post, index) => (
                  <div
                    key={index}
                    className="snap-center flex-shrink-0 w-full flex justify-center"
                  >
                    <div className="w-[300px]">
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        <img
                          src={post.src}
                          alt={`Post ${index}`}
                          className="object-contain w-full h-auto max-h-[484px] hover:opacity-90 transition"
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade">
          <div
            className={`bg-white shadow-lg p-6 max-w-sm w-full text-center border-t-4 ${
              modal.type === 'success' ? 'border-green-500' : 'border-red-500'
            }`}
          >
            <div className="text-4xl mb-2">{modal.type === 'success' ? '✅' : '❌'}</div>
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
  );
}
