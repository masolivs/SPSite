'use client';

import Carousel from './carousel';
import FadeInSection from './fadeInSection';

export default function Atuacao() {
  const carouselItems = [
    <div key="1" className="bg-white">
      <FadeInSection>
        <h3 className="text-[24px] md:text-[36px] font-bold font-dm-serif mb-2">Compliance Anticorrupção</h3>
        <p className="text-[20px] md:text-[24px] font-tahoma mt-4">
          Elaboramos análises de riscos, códigos e políticas, due diligences, treinamentos, comunicações, além de conduzir investigações corporativas. Auxiliamos na obtenção de premiações (como o Pró-Ética da CGU) e certificações anticorrupção (como a ISO 37.001), e representamos organizações em inquéritos, processos sancionadores e acordos de leniência.
        </p>
      </FadeInSection>
    </div>,
    <div key="2" className="bg-white">
      <FadeInSection>
        <h3 className="text-[24px] md:text-[36px] font-bold font-dm-serif mb-2">Privacidade e Proteção de Dados</h3>
        <p className="text-[20px] md:text-[24px] font-tahoma mt-4">
          Prestamos apoio na conformidade com legislações de proteção de dados pessoais. Elaboramos políticas de privacidade, comunicações, treinamentos, contratos e relatórios de impacto à proteção de dados. 
          Atuamos junto à ANPD, incluindo na gestão de incidentes de segurança e vazamento de dados. Prestamos serviços como DPO as a Service.
        </p>
      </FadeInSection>
    </div>,
    <div key="3" className="bg-white">
      <FadeInSection>
        <h3 className="text-[24px] md:text-[36px] font-bold font-dm-serif mb-2">Relações Governamentais</h3>
        <p className="text-[20px] md:text-[24px] font-tahoma mt-4">
          Atuamos desde o diagnóstico do ambiente regulatório até a definição e execução de planos de ação. Monitoramos as agendas dos Poderes Legislativo e Executivo, elaborando estratégias de advocacy, mapeamento de stakeholders, análise de riscos regulatórios e posicionamentos técnicos. Prestamos assessoria jurídica em CPIs.
        </p>
      </FadeInSection>
    </div>,
    <div key="4" className="bg-white">
      <FadeInSection>
        <h3 className="text-[24px] md:text-[36px] font-bold font-dm-serif mb-2">PLDFT</h3>
        <p className="text-[20px] md:text-[24px] font-tahoma mt-4">
          Elaboramos análises de riscos, políticas internas, procedimentos de Know Your Client (KYC), Know Your Supplier (KYS) e Know Your Employee (KYE), due diligences, comunicações e treinamentos. Apoiamos na estruturação, implementação e aprimoramento do Programa de PLDFT, conforme as diretrizes do COAF e demais órgãos reguladores.
        </p>
      </FadeInSection>
    </div>,
    <div key="5" className="bg-white">
      <FadeInSection>
        <h3 className="text-[24px] md:text-[36px] font-bold font-dm-serif mb-2">Direito Concorrencial</h3>
        <p className="text-[20px] md:text-[24px] font-tahoma mt-4">
          Atuamos na elaboração de defesas em inquéritos e processos administrativos perante o CADE, além de assessorar em acordos de leniência e negociações de termos de compromisso de cessação. Representamos organizações em ações judiciais envolvendo questões concorrenciais. Também atuamos de forma consultiva, com foco em prevenção, estruturação de programas de compliance e análise de condutas comerciais sob a ótica antitruste.
        </p>
      </FadeInSection>
    </div>,
    <div key="6" className="bg-white">
      <FadeInSection>
        <h3 className="text-[24px] md:text-[36px] font-bold font-dm-serif mb-2">ESG</h3>
        <p className="text-[20px] md:text-[24px] font-tahoma mt-4">
          Elaboramos estratégias de práticas ESG, com foco em conformidade regulatória e mitigação de riscos. Atuamos na análise de riscos socioambientais e de governança, comunicações institucionais e treinamentos. Conduzimos diagnósticos de materialidade, estruturamos a governança ESG, acompanhamos indicadores e elaboramos Relatórios de Sustentabilidade alinhados às melhores práticas.
        </p>
      </FadeInSection>
    </div>,
  ];

  return (
    <section id="atuacao" className="bg-white py-16">
      <div className="atuacao-zoom px-6 sm:px-24 mb-10">
        <FadeInSection>
          <h3 className="font-bodrumsans text-[14px] sm:text-[20px] tracking-widest uppercase">
            ATUAÇÃO
          </h3>
        </FadeInSection>
        <FadeInSection>
          <h2 className="font-dm-serif mt-2 text-[40px] sm:text-[80px] font-bold leading-tight">
            Oferecemos clareza, confiança e alto desempenho em cada entrega.
          </h2>
        </FadeInSection>
        <FadeInSection>
          <p className="font-tahoma text-[20px] sm:text-[32px] mt-8">
            Confira as nossas especialidades:
          </p>
        </FadeInSection>
      </div>
      <Carousel items={carouselItems} contentPadding="px-6 sm:px-24" />
      <style jsx>{`
        @media (min-width: 1024px) {
          .atuacao-zoom {
            zoom: 0.8;
          }
        }
      `}</style>
    </section>
  );
}
