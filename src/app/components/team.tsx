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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [disableTransition, setDisableTransition] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetchEmployees()
      .then((data: Employee[]) => {
        const sorted = data.sort(
          (a: Employee, b: Employee) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        setEmployees(sorted);
      })
      .catch(console.error);
  }, []);

  const groupSize = 3;

  const desktopSlides = isDesktop
    ? Array.from({ length: Math.ceil(employees.length / groupSize) }).map((_, i) =>
        employees.slice(i * groupSize, i * groupSize + groupSize)
      )
    : [];

  const loopedSlides = isDesktop
    ? [
        desktopSlides[desktopSlides.length - 1],
        ...desktopSlides,
        desktopSlides[0],
      ]
    : [];

  const totalSlides = loopedSlides.length;

  useEffect(() => {
    if (!isDesktop) return;

    if (currentIndex === 0) {
      setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(totalSlides - 2);
      }, 700);
    } else if (currentIndex === totalSlides - 1) {
      setTimeout(() => {
        setDisableTransition(true);
        setCurrentIndex(1);
      }, 700);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (disableTransition) {
      setTimeout(() => {
        setDisableTransition(false);
      }, 50);
    }
  }, [disableTransition]);

  const handleNext = () => setCurrentIndex((i) => i + 1);
  const handlePrev = () => setCurrentIndex((i) => i - 1);

  const openModal = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  const mobileSlides = [
    employees[employees.length - 1],
    ...employees,
    employees[0],
  ];

  const handleMobileScroll = () => {
    if (!mobileRef.current) return;
    const width = mobileRef.current.offsetWidth;
    const index = Math.round(mobileRef.current.scrollLeft / width);

    if (index === mobileSlides.length - 1) {
      setTimeout(() => {
        mobileRef.current?.scrollTo({ left: width, behavior: 'auto' });
      }, 700);
    } else if (index === 0) {
      setTimeout(() => {
        mobileRef.current?.scrollTo({
          left: (mobileSlides.length - 2) * width,
          behavior: 'auto',
        });
      }, 700);
    }
  };

  const isLoading = employees.length === 0;

  return (
    <section id="equipe" className="bg-dark text-gray py-20 overflow-hidden">
      <div className="px-6 sm:px-24 mb-10">
        <FadeInSection>
          <h3 className="font-bodrumsans text-[14px] sm:text-[20px] tracking-widest uppercase">
            EQUIPE
          </h3>
          <h1 className="font-dm-serif mt-2 text-[40px] sm:text-[80px] font-bold">
            Conheça nossos profissionais
          </h1>
        </FadeInSection>
      </div>

      {isLoading ? (
        <div className="text-center text-gray text-xl py-20">Carregando equipe...</div>
      ) : (
        <div className="relative px-6 sm:px-24">
          {isDesktop ? (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 bg-dark bg-opacity-80 rounded-full cursor-pointer"
              >
                <ArrowLeft size={48} />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-dark bg-opacity-80 rounded-full cursor-pointer"
              >
                <ArrowRight size={48} />
              </button>

              <div className="overflow-hidden w-full">
                <div
                  className={`flex ${
                    !disableTransition ? 'transition-transform duration-700 ease-in-out' : ''
                  }`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {loopedSlides.map((group, idx) => (
                    <div
                      key={idx}
                      className="flex flex-shrink-0 justify-between w-full gap-8"
                    >
                      {Array.isArray(group) &&
                        group.map((employee) => (
                          <div
                            key={employee.id}
                            className="flex flex-col cursor-pointer w-[32%] min-w-[300px]"
                            onClick={() => openModal(employee)}
                          >
                            <div
                              className="relative w-full"
                              style={{ aspectRatio: '555 / 770' }}
                            >
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
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div
              ref={mobileRef}
              onScroll={handleMobileScroll}
              className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {mobileSlides.map((employee, idx) => (
                <div
                  key={idx}
                  className="snap-center shrink-0 w-full min-w-full max-w-full px-6 cursor-pointer"
                  onClick={() => openModal(employee)}
                >
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: '555 / 770' }}
                  >
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
          )}
        </div>
      )}

      <TeamModal
        isOpen={isModalOpen}
        onClose={closeModal}
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
