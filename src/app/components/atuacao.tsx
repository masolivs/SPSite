'use client';

import Carousel from './carousel';
import FadeInSection from './fadeInSection';

export default function Atuacao() {
  const carouselItems = [
    <div key="1" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Compliance Anticorrupção</h3>
        <p className="text-xl md:text-[24px] font-tahoma mt-4">
          Elaboramos análises de riscos, códigos e políticas, due diligences, treinamentos, comunicações, além de conduzir investigações corporativas. 
          Auxiliamos na obtenção de premiações (ex: Pró-Ética da CGU) e certificações anticorrupção (ex: ISO 37.001), e representamos organizações em inquéritos, processos sancionadores e acordos de leniência.
        </p>
      </FadeInSection>
    </div>,
    <div key="2" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Privacidade e Proteção de Dados </h3>
        <p className="text-xl md:text-[24px] font-tahoma mt-4">
        Prestamos apoio na conformidade com legislações de proteção de dados pessoais. Elaboramos políticas de privacidade, comunicações, treinamentos, contratos e relatórios de impacto à proteção de dados. 
        Atuamos junto à ANPD, incluindo na gestão de incidentes de segurança e vazamento de dados. Prestamos serviços como DPO as a Service.
        </p>
      </FadeInSection>
    </div>,
    <div key="3" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Relações Governamentais</h3>
        <p className="text-xl md:text-[24px] font-tahoma mt-4">
        Atuamos desde o diagnóstico do ambiente regulatório até a definição e execução de planos de ação. Monitoramos as agendas dos Poderes Legislativo e Executivo, elaborando estratégias de advocacy, mapeamento de stakeholders, análise de riscos regulatórios e posicionamentos técnicos. Prestamos assessoria jurídica em CPIs.
        </p>
      </FadeInSection>
    </div>,
    <div key="4" className="bg-white">
      <FadeInSection>
        <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">PLDFT</h3>
        <p className="text-xl md:text-[24px] font-tahoma mt-4">
          Elaboramos análises de riscos, políticas internas, procedimentos de Know Your Client (KYC), Know Your Supplier (KYS) e Know Your Employee (KYE), due diligences, comunicações e treinamentos. Apoiamos na estruturação, implementação e aprimoramento do Programa de PLDFT, conforme as diretrizes do COAF e demais órgãos reguladores. 
        </p>
      </FadeInSection>
    </div>,
    <div key="5" className="bg-white">
    <FadeInSection>
      <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">Direito Concorrencial</h3>
      <p className="text-xl md:text-[24px] font-tahoma mt-4">
      Atuamos na elaboração de defesas em inquéritos e processos administrativos perante o CADE. Prestamos assessoria em acordos de leniência, negociação de termos de compromisso de cessação e submissão de atos de concentração. Representamos organizações em ações judiciais envolvendo questões concorrenciais. 
      </p>
    </FadeInSection>
  </div>,
  <div key="6" className="bg-white">
    <FadeInSection>
      <h3 className="text-3xl md:text-4xl font-bold font-dm-serif mb-2">ESG</h3>
      <p className="text-xl md:text-[24px] font-tahoma mt-4">
      Elaboramos análise de riscos, comunicações e treinamentos de sustentabilidade. Analisamos indicadores de materialidade de ESG. Auxiliamos na definição da governança de ESG e na construção do Relatório de Sustentabilidade. Atuamos na promoção da sustentabilidade em face das exigências regulatórias de mercado. 
      </p>
    </FadeInSection>
  </div>,
  ];

  return (
    <section id="atuacao" className="bg-white py-16">
      <div className="px-6 sm:px-24 mb-10">
        <FadeInSection>
          <h3 className="font-bodrumsans text-[18px] sm:text-[20px] tracking-widest uppercase">
            ATUAÇÃO
          </h3>
        </FadeInSection>
        <FadeInSection>
        <h2 className="font-dm-serif mt-2 text-[48px] sm:text-[80px] font-bold leading-tight">
          Oferecemos clareza, confiança e alto desempenho  <br className="hidden sm:inline" /> em cada entrega.
        </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="font-tahoma text-xl sm:text-3xl mt-8">
          Confira as nossas especialidades: 
          </p>
        </FadeInSection>
      </div>

      <Carousel items={carouselItems} contentPadding="px-6 sm:px-24" />
    </section>
  );
}
