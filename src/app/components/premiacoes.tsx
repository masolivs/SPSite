'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import FadeInSection from './fadeInSection';

export default function Premiacao() {
  const imageSources = [
    '/fc.png',
    '/fc.png',
    '/fc.png',
    '/fc.png',
    '/fc.png',
    '/fc.png',
    '/fc.png',
    '/fc.png',
  ];

  const [isDesktop, setIsDesktop] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupSize = 4;
  const totalSlides = isDesktop
    ? Math.ceil(imageSources.length / groupSize)
    : imageSources.length;

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleMobileScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const slideWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / slideWidth);
      setCurrentIndex(index);
    }
  };

  return (
    <section id="premiacoes" className="bg-dark text-white py-16">
      <div className="px-6 sm:px-24 mb-10">
        <FadeInSection>
        <h3 className="font-bodrumsans text-[18px] sm:text-[20px] tracking-widest uppercase">
          CONQUISTAS
        </h3>
        <h2 className="font-dm-serif mt-2 text-[48px] sm:text-[80px] font-bold">
          Reconhecimentos Institucionais
        </h2>
        </FadeInSection>
      </div>
      <div className="relative w-full">
        {isDesktop && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute top-1/2 -translate-y-1/2 left-4 z-20 p-2 cursor-pointer disabled:opacity-30"
            >
              <ArrowLeft size={48} weight="light" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= totalSlides - 1}
              className="absolute top-1/2 -translate-y-1/2 right-4 z-20 p-2 cursor-pointer disabled:opacity-30"
            >
              <ArrowRight size={48} weight="light" />
            </button>
          </>
        )}
        <div className="px-6 sm:px-24 overflow-hidden">
          {isDesktop ? (
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, groupIndex) => {
                const start = groupIndex * groupSize;
                const end = start + groupSize;
                const group = imageSources.slice(start, end);
                return (
                  <div
                    key={groupIndex}
                    className="min-w-full flex justify-center gap-x-4"
                  >
                    {group.map((src, index) => (
                      <div
                        key={index}
                        className="w-1/4 h-[220px] flex justify-center items-center"
                      >
                        <Image
                          src={src}
                          alt={`Premiação ${start + index + 1}`}
                          width={180}
                          height={180}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              ref={scrollRef}
              onScroll={handleMobileScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 -mx-6 scrollbar-hide"
            >
              {imageSources.map((src, index) => (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-full max-w-full flex justify-center items-center"
                >
                  <Image
                    src={src}
                    alt={`Premiação ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-contain w-full h-auto max-h-[200px]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-20 px-6 sm:px-24">
          <div className="flex items-center gap-2 max-w-[100px] text-sm ml-0 lg:ml-0">
            <span>{currentIndex + 1}</span>
            <div className="flex-1 h-px bg-white" />
            <span>{totalSlides}</span>
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
  );
}
