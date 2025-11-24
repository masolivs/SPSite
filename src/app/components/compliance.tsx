'use client';

import FadeInSection from './fadeInSection';
import Link from 'next/link';

export default function Compliance() {
  return (
    <section
      id="compliance"
      className="bg-gray py-18 md:py-24 scroll-mt-24"
    >
      <div className="compliance-zoom px-6 sm:px-24">
        <FadeInSection>
          <h3 className="font-bodrumsans text-dark text-[14px] sm:text-[20px] mb-4 tracking-widest uppercase">
            COMPLIANCE
          </h3>
        </FadeInSection>
        <FadeInSection>
          <h2 className="font-dm-serif text-dark font-bold text-[40px] sm:text-[80px] mb-6 leading-tight">
            Integridade como valor essencial
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="font-tahoma text-dark text-[20px] sm:text-[32px] leading-relaxed mb-8">
            Ética, responsabilidade e transparência estão no centro de tudo o que fazemos. 
            Nosso Programa de Compliance estrutura diretrizes claras, promove a cultura da integridade 
            e assegura a conformidade com as melhores práticas anticorrupção.
          </p>
        </FadeInSection>
        <FadeInSection>
          <div className="text-right">
            <Link
              href="/compliance"
              className="font-dm-serif text-[20px] sm:text-[40px] font-bold text-brown-dark hover:opacity-80 transition"
            >
              Saiba mais
            </Link>
          </div>
        </FadeInSection>
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .compliance-zoom {
            zoom: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
