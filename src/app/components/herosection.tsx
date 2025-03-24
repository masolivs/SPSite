'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function Herosection() {
  return (
    <section className="bg-off-white pt-20 sm:pt-20 ">
      <div className="pl-8 sm:pl-24 mb-12">
        <h2 className="font-tahoma text-dark text-xl mb-1 sm:text-[32px] sm:mb-2">
          Silva Prado Advogados
        </h2>
        <h1 className="font-dm-serif font-bold text-[60px] sm:text-[128px] text-brown-dark leading-tight">
          <Typewriter
            words={['Inovação.', 'Rigor Técnico.', 'Integridade.']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>
      </div>
      <div className="w-full h-[200px] sm:h-auto overflow-hidden">
        <img
          src="/image.png"
          alt="fachada"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
