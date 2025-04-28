'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

interface CarouselProps {
  items: React.ReactNode[];
  itemsPerViewDesktop?: number;
  contentPadding?: string;
}

export default function Carousel({
  items,
  itemsPerViewDesktop = 3,
  contentPadding = 'px-6 sm:px-24',
}: CarouselProps) {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [currentIndex, setCurrentIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreen = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScreenSize('desktop');
      } else if (width >= 640) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const itemsPerView = screenSize === 'desktop'
    ? itemsPerViewDesktop
    : screenSize === 'tablet'
    ? 2
    : 1;

  const totalPages = Math.ceil(items.length / itemsPerView);
  const maxCount = screenSize === 'desktop' ? totalPages : items.length;

  const next = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
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

  return (
    <div className="relative w-full overflow-hidden py-2">
      {screenSize === 'desktop' && (
        <>
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -translate-y-1/2 left-4 z-20 p-2 disabled:opacity-30 cursor-pointer"
          >
            <ArrowLeft size={48} weight="light" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= totalPages - 1}
            className="absolute top-1/2 -translate-y-1/2 right-4 z-20 p-2 disabled:opacity-30 cursor-pointer"
          >
            <ArrowRight size={48} weight="light" />
          </button>
        </>
      )}

      <div className={contentPadding}>
        {screenSize === 'desktop' ? (
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${totalPages * 100}%`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => {
              const start = pageIndex * itemsPerView;
              const end = start + itemsPerView;
              const groupItems = items.slice(start, end);

              return (
                <div
                  key={pageIndex}
                  className="flex flex-shrink-0 w-full justify-start gap-6"
                >
                  {groupItems.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white w-full max-w-[680px] h-auto whitespace-normal break-words pr-16"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <div
            ref={mobileScrollRef}
            onScroll={handleMobileScroll}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
            style={{ scrollPaddingLeft: '1.5rem' }}
          >
            <div className="flex space-x-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 w-full max-w-[680px] bg-white h-auto"
                >
                  <div className="w-full break-words whitespace-normal">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2 max-w-[100px] text-sm ml-6 sm:ml-24">
          <span>{currentIndex + 1}</span>
          <div className="flex-1 h-px bg-black" />
          <span>{maxCount}</span>
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
    </div>
  );
}
