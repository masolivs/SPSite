'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import Image from 'next/image';
import TeamModal from './teamModal';
import FadeInSection from './fadeInSection';

async function fetchEmployees() {
  const res = await fetch('/api/employees', { cache: 'no-store' });
  if (!res.ok) throw new Error('Erro ao buscar funcionários');
  return res.json();
}

interface Employee {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
  createdAt: string;
}

export default function Team() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isDesktop, setIsDesktop] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        const sorted = data.sort(
          (a: Employee, b: Employee) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        setEmployees(sorted);
      } catch (error) {
        console.error('Erro ao carregar funcionários:', error);
      }
    };

    loadEmployees();
  }, []);

  const groupSize = 3;
  const totalSlides = isDesktop
    ? Math.ceil(employees.length / groupSize)
    : employees.length;

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

  const handleOpenModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  return (
    <section id="equipe" className="bg-dark text-gray py-20">
      <div className="px-6 sm:px-24 mb-10">
        <FadeInSection>
        <h3 className="font-bodrumsans text-[18px] sm:text-[20px] tracking-widest uppercase">
          EQUIPE
        </h3>
        <h1 className="font-dm-serif mt-2 text-[48px] sm:text-[80px] font-bold">
          Conheça nossos profissionais
        </h1>
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
                const group = employees.slice(start, end);
                return (
                  <div
                    key={groupIndex}
                    className="min-w-full flex flex-shrink-0 justify-center gap-[72px] "
                  >
                    {group.map((employee) => (
                      <div
                        key={employee.id}
                        className="w-[555px] flex flex-col cursor-pointer"
                        onClick={() => handleOpenModal(employee)}
                      >
                        <div className="relative w-full h-[770px]">
                          <Image
                            src={employee.image || '/default-avatar.png'}
                            alt={employee.name}
                            fill
                            className="object-cover"
                          />
                        </div>
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
              {employees.map((employee) => (
                <div
                  key={employee.id}
                  className="snap-start flex-shrink-0 w-full max-w-full flex justify-center"
                >
                  <div
                    className="w-[320px] flex flex-col cursor-pointer"
                    onClick={() => handleOpenModal(employee)}
                  >
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={employee.image || '/default-avatar.png'}
                        alt={employee.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 px-6 sm:px-24 flex justify-end">
          <div className="flex items-center gap-4 text-sm min-w-[120px]">
            <span>{currentIndex + 1}</span>
            <div className="h-px bg-gray flex-grow" />
            <span>{totalSlides}</span>
          </div>
        </div>
      </div>
      <TeamModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        employee={selectedEmployee}
      />

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
