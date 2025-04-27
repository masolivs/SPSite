'use client';

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="bg-off-white min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="px-6 sm:px-24 lg:px-[250px] space-y-8">
          <div>
            <h3 className="font-bodrumsans text-dark text-[18px] sm:text-[20px] tracking-widest uppercase mb-4">
              COMPLIANCE
            </h3>
            <h1 className="font-dm-serif text-dark text-[48px] sm:text-[80px] font-bold leading-tight mb-6">
              Programa de Integridade
            </h1>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-4">
              Acreditamos que a prática requer mais do que técnica: exige ética, comprometimento e responsabilidade.
            </p>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed text-right">
              Conheça nossas boas práticas anticorrupção.
            </p>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Ética e Integridade
            </h2>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed">
              A ética e a integridade são valores essenciais para o Silva Prado. Atuamos de forma preventiva, identificando e mitigando riscos, e promovemos uma cultura organizacional para que nossos profissionais e terceiros estejam alinhados com os melhores padrões de conduta.
              <br /><br />
              Acreditamos que agir com integridade é indispensável para uma advocacia sólida, moderna e comprometida com a sociedade.
              <br /><br />
              Abaixo compartilhamos as principais informações do nosso Programa de Compliance!
            </p>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Comitê de Ética
            </h2>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-4">
              O Comitê de Ética, órgão independente e autônomo, é a instância responsável pela aplicação, atualização e monitoramento do Programa de Compliance.
              <br /><br />
              O Comitê é composto pelos dois sócios-fundadores e um advogado associado:
            </p>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-4">
              Os membros do Comitê têm independência e autoridade para desempenhar suas atividades. As principais responsabilidades dos membros do Comitê de Ética são:
            </p>
            <ul className="list-decimal list-inside space-y-3 font-tahoma text-dark text-[18px] sm:text-[24px]">
              <li>Zelar pelo cumprimento do Programa de Compliance e do Sistema de Gestão Antissuborno do escritório, assegurando que os negócios do Silva Prado sejam conduzidos com ética;</li>
              <li>Assessorar, apoiar e orientar os colaboradores e terceiros em assuntos relacionados ao Programa de Compliance e ao Sistema de Gestão Antissuborno;</li>
              <li>Interpretar o texto, esclarecer eventuais dúvidas e se posicionar a respeito de condutas ou situações que não tenham sido previstas pelo Código de Conduta e demais normativos;</li>
              <li>Gerir o Canal de Integridade, incluindo apurar e deliberar em conjunto sobre eventuais violações ao Programa de Compliance e ao Sistema de Gestão Antissuborno, praticadas pelos colaboradores ou terceiros, e recomendar a aplicação das medidas disciplinares.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Código de Conduta
            </h2>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-2">
              O Código de Conduta é o principal documento do nosso Programa de Compliance. Nele, detalhamos as regras de conduta que orientam a atuação de nossos colaboradores e terceiros.
            </p>
            <Link
              href="/docs/codigo-conduta.pdf"
              className="text-brown-dark font-bold underline hover:opacity-80 transition text-[18px] sm:text-[24px]"
              target="_blank"
            >
              Acessar o Código de Conduta
            </Link>
          </div>
          <div>
            <h3 className="font-dm-serif text-dark text-[24px] sm:text-[36px] font-bold mb-4">
              Código de Conduta para Terceiros
            </h3>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-2">
              O Silva Prado também tem o Código de Conduta para Terceiros, que apresenta as condutas específicas esperadas dos fornecedores e parceiros de negócios com os quais nos relacionamos.
            </p>
            <Link
              href="/docs/codigo-terceiros.pdf"
              className="text-brown-dark font-bold underline hover:opacity-80 transition text-[18px] sm:text-[24px]"
              target="_blank"
            >
              Acessar Código para Terceiros
            </Link>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Políticas de Compliance
            </h2>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] mb-4">
              Essas são as principais Políticas do nosso Programa de Compliance:
            </p>
            <ul className="list-disc list-inside space-y-3 font-tahoma text-dark text-[18px] sm:text-[24px]">
              <li>
                <Link href="/docs/Silva Prado_Política Anticorrupção e Antissuborno v4.0_13.02.2025.docx.pdf" target="_blank" className="text-brown-dark underline hover:opacity-80">
                  Política Anticorrupção
                </Link>
              </li>
              <li>
                <Link href="/docs/Silva Prado_Política de Relacionamento com Agentes Públicos_v4.0 - 13.02.2025.docx.pdf" target="_blank" className="text-brown-dark underline hover:opacity-80">
                  Política de Relacionamento com Agentes Públicos
                </Link>
              </li>
              <li>
                <Link href="/docs/Silva Prado_Política de Conflito de Interesses v4.0_13.02.2025.docx.pdf" target="_blank" className="text-brown-dark underline hover:opacity-80">
                  Política de Conflito de Interesses
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Canal de Integridade
            </h2>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-4">
              O Canal de Integridade é um espaço seguro que permite a qualquer pessoa fazer denúncias de irregularidades relacionadas ao Programa de Compliance do Silva Prado, incluindo suspeitas de atos de corrupção e fraude previstos na Lei Federal nº 12.846/2013 (“Lei Anticorrupção”) e outras legislações aplicáveis.
              <br /><br />
              O Canal também poderá ser utilizado para fazer denúncias relacionadas a violações de direitos humanos e à degradação do meio ambiente impactado pelas atividades do Silva Prado.
            </p>
            <div className="bg-white border border-dark rounded-lg p-6 mt-4 shadow-sm">
              <p className="text-dark font-tahoma text-[18px] sm:text-[24px] leading-relaxed">
                Entre em contato com o Comitê de Ética através do nosso Canal de Integridade:
              </p>
              <p className="mt-4 font-bold text-[18px] sm:text-[24px] text-brown-dark underline break-words">
                <a href="mailto:compliance@silvapradoadv.com.br">
                  compliance@silvapradoadv.com.br
                </a>
              </p>
            </div>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mt-6">
              O Canal é orientado pelas seguintes garantias:  (i) profissionalismo, (ii) confidencialidade, (iii) imparcialidade e (iv) proteção aos denunciantes de boa-fé contra abusos ou retaliações.
            </p>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mt-6">
              Caso o denunciante não se sinta confortável em deixar o relato registrado por e-mail, os membros do nosso Comitê de Ética estão disponíveis para ouvi-lo, reservadamente, a qualquer momento.
              <br /><br />
              Há possibilidade de fazer denúncias anônimas, se o denunciante assim quiser.
              <br /><br />
              O Silva Prado assegura ao denunciante de boa-fé a possibilidade de acompanhamento da apuração, mediante solicitação no próprio e-mail do Canal.
              <br /><br />
              Por fim, o Canal poderá ser utilizado para tirar dúvidas relacionadas ao nosso Compliance e solicitar auxílio de como agir no dia a dia, a fim de evitar a prática de atos ilícitos.
            </p>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Patrocínios e Doações
            </h2>
            <p className="font-tahoma text-dark text-[18px] sm:text-[24px] leading-relaxed mb-2">
              Acreditamos que integridade e transparência caminham juntas. É possível verificar nossos patrocínios realizados aqui:
            </p>
            <Link
              href="/docs/Silva Prado_Tabela de Patrocínios do escritório - item 23.1.8  - Página1.pdf"
              target="_blank"
              className="text-brown-dark font-bold underline hover:opacity-80 transition text-[18px] sm:text-[24px]"
            >
              Ver patrocínios realizados
            </Link>
            <p className="mt-2 font-tahoma text-dark text-[18px] sm:text-[24px]">
              O Silva Prado informa que não fez doações para terceiros até o momento.
            </p>
          </div>
          <div>
            <h2 className="font-dm-serif text-dark text-[32px] sm:text-[48px] font-bold mb-4">
              Estrutura Organizacional
            </h2>
          </div>
          <div className="pt-10 text-right">
            <Link
              href="/"
              className="font-dm-serif text-[24px] sm:text-[32px] font-bold text-brown-dark hover:opacity-80 transition"
            >
              Voltar
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
