'use client'

export default function Footer() {
  return (
    <div id="footer" className="bg-dark font-tahoma text-white px-6 sm:px-24 py-8">
      <h3 className="text-xl sm:text-3xl font-bold">Política de Privacidade</h3>   
      <div className="mt-4 flex flex-col sm:flex-row justify-between sm:mt-10 text-base sm:text-xl">
        <p className="text-left">© Copyright 2025. Todos os direitos reservados</p>
        <p className="text-left sm:text-right">Desenvolvido por Mariana Oliveira</p>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          #footer {
            zoom: 0.8;
          }
        }
      `}</style>
    </div>
  )
}
