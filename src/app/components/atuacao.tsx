'use client';

import Carousel from './carousel';

export default function Atuacao() {
  const carouselItems = [
    <div key="1" className="bg-white">
      <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
      <p className="text-xl md:text-[24px] font-tahoma">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam eu velit varius fermentum.
        Aliquam non aliquam est. Pellentesque elit dolor, cursus at velit id, fermentum ultrices nunc.
      </p>
    </div>,
    <div key="2" className="bg-white">
      <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
      <p className="text-xl md:text-[24px] font-tahoma">
        Pellentesque elit dolor, cursus at velit id, fermentum ultrices nunc. In hac habitasse platea dictumst.
      </p>
    </div>,
    <div key="3" className="bg-white">
      <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
      <p className="text-xl md:text-[24px] font-tahoma">
        Sed vitae tortor eu lorem pharetra volutpat et non orci.
      </p>
    </div>,
    <div key="4" className="bg-white">
      <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Lorem Ipsum</h3>
      <p className="text-xl md:text-[24px] font-tahoma">
        Sed vitae tortor eu lorem pharetra volutpat et non orci.
      </p>
    </div>,
  ];
  return (
    <section id="atuação" className="bg-white py-16">
      <div className="px-6 sm:px-24 mb-10">
        <h3 className="font-bodrumsans text-[18px] sm:text-[20px] tracking-widest uppercase">
          ATUAÇÃO
        </h3>
        <h2 className="font-dm-serif mt-2 text-[48px] sm:text-[80px] font-bold">
          Lorem Ipsum
        </h2>
        <p className="font-tahoma text-xl sm:text-3xl mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <Carousel items={carouselItems} contentPadding="px-6 sm:px-24" />
    </section>
  );
}
