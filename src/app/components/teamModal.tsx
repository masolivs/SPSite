'use client';

import Image from 'next/image';
import { X } from 'phosphor-react';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: {
    name: string;
    role: string;
    description: string;
    image: string;
    linkedin: string;
  } | null;
}

export default function TeamModal({ isOpen, onClose, employee }: TeamModalProps) {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-40" onClick={onClose} />

      <div className="relative bg-dark w-full lg:w-2/3 h-full z-50 overflow-y-auto overflow-x-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray z-50 cursor-pointer"
          aria-label="Fechar"
        >
          <X size={48} weight="bold" />
        </button>

        <div className="hidden lg:flex flex-row items-start justify-end gap-16 text-gray sm:ml-20 pt-10 px-10">
          <div className="flex flex-col items-start w-[555px] ml-auto">
            <h2 className="font-dm-serif text-[30px] sm:text-[48px] text-color-gray">
              {employee.name}
            </h2>
            <p className="font-tahoma text-[20px] sm:text-[40px] sm:mb-4 text-color-gray  mb-4" >
              {employee.role}
            </p>

            <div className="relative w-[555px] h-[770px]">
              <Image
                src={employee.image || '/default-avatar.png'}
                alt={employee.name}
                fill
                className="object-cover"
              />
            </div>

            <a
              href={employee.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={49}
                height={49}
                className="object-contain sm:mt-4"
              />
            </a>
          </div>

          <div className="flex-1 h-[770px] flex items-center">
            <div className="overflow-y-auto max-h-[600px] pr-2 scrollbar-hide">
              <p className="text-color-gray text-[40px] leading-relaxed whitespace-pre-line">
                {employee.description}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden w-screen text-color-gray overflow-x-hidden">
          <div className="w-screen">
            <Image
              src={employee.image || '/default-avatar.png'}
              alt={employee.name}
              width={1000}
              height={600}
              className="w-screen h-auto object-contain"
              priority
            />
          </div>

          <div className="px-4 py-6 space-y-4">
            <h2 className="font-dm-serif text-[28px]">
              {employee.name}
            </h2>
            <p className="font-tahoma font-normal text-[24px]">
              {employee.role}
            </p>

            <p className="text-[22px] leading-relaxed whitespace-pre-line max-h-[300px] overflow-y-auto scrollbar-hide">
              {employee.description}
            </p>

            <a
              href={employee.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          overflow-x: hidden !important;
        }
      `}</style>
    </div>
  );
}
