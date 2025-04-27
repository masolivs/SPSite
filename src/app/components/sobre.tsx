'use client';

import FadeInSection from './fadeInSection';

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-light py-32 scroll-mt-32"
    >
      <div className="px-6 sm:px-24">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-y-16 lg:gap-x-40 items-center">
          <div>
            <img
              src="/imgprov.png"
              alt="Sobre nós"
              className="w-full object-cover aspect-[16/10] lg:h-[545px]"
            />
          </div>
          <div className="text-right space-y-4">
            <FadeInSection>
              <h3 className="font-bodrumsans text-dark text-[18px] sm:text-[20px] tracking-widest uppercase">
                SOBRE NÓS
              </h3>
            </FadeInSection>
            <FadeInSection>
              <h2 className="font-dm-serif text-dark font-bold text-[48px] sm:text-[80px] leading-tight">
                Dedicação, propósito e experiência
              </h2>
            </FadeInSection>
            <FadeInSection>
              <p className="font-tahoma text-dark text-[20px] sm:text-[32px] leading-relaxed">
                Somos um escritório de atuação corporativa, que alia experiência prática e acadêmica
                para oferecer soluções jurídicas claras e assertivas. Com foco no relacionamento de
                longo prazo, acompanhamos de perto cada cliente, traduzindo cenários complexos em
                estratégias eficazes.
              </p>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
