'use client';

import FadeInSection from './fadeInSection'; 

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-light py-32 px-6 sm:px-12 scroll-mt-32"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="w-full lg:w-1/2">
          <img
            src="/imgprov.png"
            alt="Sobre nós"
            className="w-full aspect-[3/2] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-right space-y-4">
          <FadeInSection>
            <h3 className="font-bodrumsans text-dark text-[18px] sm:text-[20px] tracking-widest uppercase">
              SOBRE NÓS
            </h3>
          </FadeInSection>
          <FadeInSection>
            <h2 className="font-dm-serif text-dark font-bold text-[48px] sm:text-[80px] leading-tight">
              Lorem Ipsum
            </h2>
          </FadeInSection>
          <FadeInSection>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam eu velit
              varius fermentum. Aliquam non aliquam est. Pellentesque elit dolor, cursus at velit id,
              fermentum ultrices nunc.
            </p>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
