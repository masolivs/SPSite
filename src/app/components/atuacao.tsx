'use client';

import Carousel from './carousel';
import FadeInSection from './fadeInSection';

export default function Atuacao() {
  const carouselItems = [
    <div key="1" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
        <p className="text-xl md:text-[24px] font-tahoma">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam eu velit varius fermentum.
          Aliquam non aliquam est. Pellentesque elit dolor, cursus at velit id, fermentum ultrices nunc.
        </p>
      </FadeInSection>
    </div>,
    <div key="2" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
        <p className="text-xl md:text-[24px] font-tahoma">
          Pellentesque elit dolor, cursus at velit id, fermentum ultrices nunc. In hac habitasse platea dictumst.
        </p>
      </FadeInSection>
    </div>,
    <div key="3" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
        <p className="text-xl md:text-[24px] font-tahoma">
          Sed vitae tortor eu lorem pharetra volutpat et non orci.
        </p>
      </FadeInSection>
    </div>,
    <div key="4" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
        <p className="text-xl md:text-[24px] font-tahoma">
          Sed vitae tortor eu lorem pharetra volutpat et non orci.
        </p>
      </FadeInSection>
    </div>,
  ];

  return (
    <section id="atuação" className="bg-white py-16">
      <div className="px-6 sm:px-24 mb-10">
        <FadeInSection>
          <h3 className="font-bodrumsans text-[18px] sm:text-[20px] tracking-widest uppercase">
            ATUAÇÃO
          </h3>
        </FadeInSection>
        <FadeInSection>
          <h2 className="font-dm-serif mt-2 text-[48px] sm:text-[80px] font-bold">
            Lorem Ipsum
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="font-tahoma text-xl sm:text-3xl mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </FadeInSection>
      </div>

      <Carousel items={carouselItems} contentPadding="px-6 sm:px-24" />
    </section>
  );
}
