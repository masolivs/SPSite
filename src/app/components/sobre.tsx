'use client';

import FadeInSection from './fadeInSection';

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-light py-20 md:py-24 lg:py-32 scroll-mt-32"
    >
      <div className="sobre-zoom px-6 sm:px-24">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-40 items-center">
          <div>
            <img
              src="/imgprov.png"
              alt="Sobre nós"
              className="w-full max-w-full object-cover aspect-[16/10] lg:h-[545px] border-4 border-dark"
            />
          </div>
          <div className="text-left lg:text-right space-y-4">
            <FadeInSection>
              <h3 className="font-bodrumsans text-dark text-[14px] sm:text-[20px] tracking-widest uppercase">
                SOBRE NÓS
              </h3>
            </FadeInSection>
            <FadeInSection>
              <h2 className="font-dm-serif text-dark font-bold text-[40px] sm:text-[80px] leading-tight">
                Dedicação, propósito <br className="hidden sm:inline" /> e experiência
              </h2>
            </FadeInSection>
            <FadeInSection>
              <p className="font-tahoma text-dark text-[20px] mt-2 sm:text-[32px] leading-relaxed">
                Somos um escritório de atuação corporativa, que alia experiência prática e acadêmica
                para oferecer soluções jurídicas claras e assertivas. Com foco no relacionamento de
                longo prazo, acompanhamos de perto cada cliente, traduzindo cenários complexos em
                estratégias eficazes.
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .sobre-zoom {
            zoom: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
