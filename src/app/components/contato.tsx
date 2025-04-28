'use client'

import FadeInSection from "./fadeInSection"

export default function Contato() {
  return (
    <section id="contato" className="bg-dark text-white py-16">
      <div className="px-6 sm:px-24 mb-2">
        <FadeInSection>
          <h3 className="font-bodrumsans text-[14px] sm:text-[20px] tracking-widest text-light uppercase">
            FALE CONOSCO
          </h3>
          <h2 className="font-dm-serif mt-2 text-[40px] sm:text-[80px] text-light font-bold mb-6">
            Contato
          </h2>
        </FadeInSection>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1 lg:flex-[1.1]">
          <div className="border-20 border-white w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.9341087827293!2d-47.8639124248686!3d-15.860060084789506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a25003dc5c913%3A0x7d81865a8e22c9f5!2sSilva%20Prado%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1744909866339!5m2!1spt-BR!2sbr"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="flex-1 lg:flex-[0.9] px-6 sm:px-24 font-tahoma text-light space-y-10 lg:self-center">
          <FadeInSection>
            <div>
              <h3 className="font-bold sm:text-[35px] text-[20px]">Email</h3>
              <p className="sm:text-[32px] text-[18px]">contato@silvapradoadv.com.br</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div>
              <h3 className="font-bold sm:text-[35px] text-[20px]">Endereço</h3>
              <p className="sm:text-3xl text-[18px]">
                St. de Habitações Individuais Sul QI 19, Lago Sul, Brasília/DF
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div>
              <h3 className="font-bold sm:text-[35px] text-[20px]">Horário de Funcionamento</h3>
              <p className="sm:text-3xl text-[18px]">
                Segunda a sexta, de 8h às 18h.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
