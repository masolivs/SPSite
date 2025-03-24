'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Sobre() {
  useEffect(() => {
    AOS.init({
      duration: 1000,        
      once: false,            
      easing: 'ease-out',    
      offset: 100            
    });
  }, []);

  return (
    <section
      id="sobre"
      className="bg-light py-32 px-6 sm:px-12 scroll-mt-32"
    >
      <div
        data-aos="fade-up"
        className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-24"
      >
        <div className="w-full lg:w-1/2">
          <img
            src="/imgprov.png"
            alt="Sobre nós"
            className="w-full aspect-[3/2] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 text-right">
          <h3 className="font-bodrumsans text-dark text-[18px] sm:text-[20px] mb-4 tracking-widest uppercase">
            SOBRE NÓS
          </h3>
          <h2 className="font-dm-serif text-dark font-bold text-[48px] sm:text-[80px] mb-6 leading-tight">
            Lorem Ipsum
          </h2>
          <p className="font-tahoma text-dark text-[20px] sm:text-[32px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam eu velit
            varius fermentum. Aliquam non aliquam est. Pellentesque elit dolor, cursus at velit id,
            fermentum ultrices nunc.
          </p>
        </div>
      </div>
    </section>
  );
}
