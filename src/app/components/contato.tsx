'use client'

export default function Contato() {
  return (
    <section id="contato" className="bg-dark text-white py-16">
      <div className="px-6 sm:px-24 mb-10">
        <h3 className="font-bodrumsans text-[18px] sm:text-[20px] tracking-widest text-light uppercase">
          FALE CONOSCO
        </h3>
        <h2 className="font-dm-serif mt-2 text-[48px] sm:text-[80px] text-light font-bold">
          Contato
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start gap-28">
        <div className="flex-1">
          <img
            src="/fb.png"
            alt="imagem de fundo"
            className="w-full h-auto object-top"
          />
        </div>
        <div className="flex-1 px-6 sm:px-24 font-tahoma text-light space-y-10">
          <div>
            <h3 className="font-bold sm:text-[35px] text-2xl">Telefone</h3>
            <p className="sm:text-3xl text-lg">3000-0000</p>
          </div>
          <div>
            <h3 className="font-bold sm:text-[35px] text-2xl">Email</h3>
            <p className="sm:text-3xl text-lg">email@email.com</p>
          </div>
          <div>
            <h3 className="font-bold sm:text-[35px] text-2xl">Endereço</h3>
            <p className="sm:text-3xl text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="font-bold sm:text-[35px] text-2xl">Horário de Funcionamento</h3>
            <p className="sm:text-3xl text-lg">
              Segunda a sexta, de 8h às 18h.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
