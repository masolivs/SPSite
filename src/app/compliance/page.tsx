'use client';

import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import { ComplianceTeam } from "./ComplianceTeam";

export default function CompliancePage() {
  return (
    <div className="bg-off-white min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="px-6 sm:px-24 lg:px-[250px] space-y-12">
          <div className="space-y-6">
            <h3 className="font-bodrumsans text-dark text-[14px] sm:text-[20px] tracking-widest uppercase">
              COMPLIANCE
            </h3>
            <h1 className="font-dm-serif text-dark text-[40px] sm:text-[80px] font-bold">
              Programa de Integridade
            </h1>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
              Acreditamos que a prática requer mais do que técnica: exige ética, comprometimento e responsabilidade.
            </p>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
              Conheça nossas boas práticas anticorrupção.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[48px] font-bold">
              Ética e Integridade
            </h2>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
              A ética e a integridade são valores essenciais para o Silva Prado. Atuamos de forma preventiva, identificando e mitigando riscos, e promovemos uma cultura organizacional para que nossos profissionais e terceiros estejam alinhados com os melhores padrões de conduta.
              <br /><br />
              Acreditamos que agir com integridade é indispensável para uma advocacia sólida, moderna e comprometida com a sociedade.
              <br /><br />
              Abaixo compartilhamos as principais informações do nosso Programa de Compliance!
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[48px] font-bold">
              Comitê de Ética
            </h2>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
              O Comitê de Ética, órgão independente e autônomo, é a instância responsável pela aplicação, atualização e monitoramento do Programa de Compliance.
              <br /><br />
              O Comitê é composto pelos dois sócios-fundadores e um advogado associado, que exerce o cargo de Compliance Officer.
            </p>
            <div className="flex mt-16 mb-16 justify-center">
              <ComplianceTeam/>
            </div>
            
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
            Os membros do Comitê têm independência e autoridade para desempenhar suas atividades. As principais responsabilidades dos membros do Comitê de Ética são: 
            </p>
            <ul className="list-decimal list-inside space-y-3 font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
              <li >Zelar pelo cumprimento do Programa de Compliance e do Sistema de Gestão Antissuborno do escritório, assegurando que os negócios do Silva Prado sejam conduzidos com ética; </li>
              <li >Assessorar, apoiar e orientar os colaboradores e terceiros em assuntos relacionados ao Programa de Compliance e ao Sistema de Gestão Antissuborno; </li>
              <li >Interpretar o texto, esclarecer eventuais dúvidas e se posicionar a respeito de condutas ou situações que não tenham sido previstas pelo Código de Conduta e demais normativos; e</li>
              <li >Gerir o Canal de Integridade, incluindo apurar e deliberar em conjunto sobre eventuais violações ao Programa de Compliance e ao Sistema de Gestão Antissuborno, praticados pelos colaboradores ou terceiros, e recomendar a aplicação das medidas disciplinares.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            <div className="space-y-4">
              <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[38px] font-bold">
                Código de Conduta
              </h2>
              <p className="font-tahoma text-dark text-[20px] sm:text-[24px] text-justify">
                O Código de Conduta é o principal documento do nosso Programa de Compliance. Nele, detalhamos as regras de conduta que orientam a atuação de nossos colaboradores e terceiros.
              </p>
              <div className="w-full max-w-[313px] md:max-w-[600px] h-[339px] md:h-[500px] mx-auto">
                <iframe
                  src="/docs/Silva Prado_Código de Conduta - Silva Prado - versão do site_ 3ª ed_13.02.2025.pptx.pptx.pdf#zoom=30"
                  className="w-full h-full"
                  title="Código de Conduta"
                />
                <div className="text-right mt-2">
                  <Link href="/docs/Silva Prado_Código de Conduta - Silva Prado - versão do site_ 3ª ed_13.02.2025.pptx.pptx.pdf" target="_blank" className="text-black text-sm">
                    Abrir em nova aba
                  </Link>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[38px] font-bold">
                Código de Conduta para Terceiros
              </h2>
              <p className="font-tahoma text-dark text-[20px] sm:text-[24px] text-justify">
                O Silva Prado também tem o Código de Conduta para Terceiros, que apresenta as condutas específicas esperadas dos fornecedores e parceiros de negócios com os quais nos relacionamos.
              </p>
              <div className="w-full max-w-[313px] md:max-w-[600px] h-[339px] md:h-[500px] mx-auto">
                <iframe
                  src="/docs/Silva Prado_Código de Conduta para Terceiros - Silva Prado - versão do site_ 1ª ed_13.02.2025.pptx.ppt.pdf#zoom=30"
                  className="w-full h-full"
                  title="Código de Conduta para Terceiros"
                />
                <div className="text-right mt-2">
                  <Link href="/docs/Silva Prado_Código de Conduta para Terceiros - Silva Prado - versão do site_ 1ª ed_13.02.2025.pptx.ppt.pdf" target="_blank" className="text-black text-sm">
                    Abrir em nova aba
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[40px] font-bold">
              Políticas de Compliance
            </h2>
            <p className="font-tahoma text-dark text-[20px] sm:text-[24px] text-justify">
            Essas são as principais Políticas do nosso Programa de Compliance: 
            </p>
            <ul className="list-none font-tahoma  text-[#625140] text-[20px] sm:text-[24px] space-y-3">
              <li className="flex flex-col md:flex-row md:gap-x-8 gap-y-3">
                <Link href="/docs/Silva Prado_Política Anticorrupção e Antissuborno v4.0_13.02.2025.docx.pdf" target="_blank" className="font-bold hover:opacity-80">
                  Política Anticorrupção
                </Link>
                <Link href="/docs/Silva Prado_Anti-Corruption and Anti-Bribery Policy v1.0_2025.02.20.docx.pdf" target="_blank" className="font-bold hover:opacity-80">
                  Anti-Corruption and Anti-Bribery Policy
                </Link>
              </li>
              <li>
                <Link href="/docs/Silva Prado_Política de Relacionamento com Agentes Públicos_v4.0 - 13.02.2025.docx.pdf" target="_blank" className="font-bold hover:opacity-80">
                  Política de Relacionamento com Agentes Públicos
                </Link>
              </li>
              <li>
                <Link href="/docs/Silva Prado_Política de Conflito de Interesses v4.0_13.02.2025.docx.pdf" target="_blank" className="font-bold hover:opacity-80">
                  Política de Conflito de Interesses
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[48px] font-bold">
              Canal de Integridade
            </h2>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
             O Canal de Integridade é um espaço seguro que permite a qualquer pessoa fazer denúncias de irregularidades relacionadas ao Programa de Compliance do Silva Prado, incluindo suspeitas de atos de corrupção e fraude previstos na Lei Federal nº 12.846/2013 (“Lei Anticorrupção”) e outras legislações aplicáveis.
             <br /><br />
             O Canal também poderá ser utilizado para fazer denúncias relacionadas a violações de direitos humanos e à degradação do meio ambiente impactado pelas atividades do Silva Prado.
            </p>
            <div className="bg-dark p-6 mt-10 mb-10 w-full  md:w-[500px]">
              <p className="font-tahoma text-off-white text-[18px] sm:text-[20px]">
                Entre em contato com o Comitê de Ética:
              </p>
              <p className="mt-4 font-bold text-[18px] sm:text-[20px] text-off-white break-words">
                <a href="mailto:compliance@silvapradoadv.com.br">
                  compliance@silvapradoadv.com.br
                </a>
              </p>
            </div>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
            O Canal é orientado pelas seguintes garantias: (i) profissionalismo, (ii) confidencialidade, (iii) imparcialidade e (iv) proteção aos denunciantes de boa-fé contra abusos ou retaliações.
            <br /><br />
            Caso o denunciante não se sinta confortável em deixar o relato registrado por e-mail, os membros do nosso Comitê de Ética estão disponíveis para ouvi-lo, reservadamente, a qualquer momento.
            <br /><br />
            Há possibilidade de fazer denúncias anônimas, se o denunciante assim quiser. 
            <br /><br />
            É possível fazer denúncias anônimas, caso o denunciante assim prefira.
Para garantir o anonimato, recomendamos que a comunicação seja feita exclusivamente por meio de uma conta de e-mail criada especificamente para este fim, sem qualquer vínculo com informações pessoais do denunciante.
            <br /><br />
            O Silva Prado assegura ao denunciante de boa-fé a possibilidade de acompanhamento da apuração, mediante solicitação no próprio e-mail do Canal.
            <br /><br />
            Por fim, o Canal poderá ser utilizado para tirar dúvidas relacionadas ao nosso Compliance e solicitar auxílio de como agir no dia a dia, a fim de evitar a prática de atos ilícitos.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[48px] font-bold">
              Patrocínios e Doações
            </h2>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify">
              Acreditamos que integridade e transparência caminham juntas. É possível verificar nossos patrocínios realizados aqui:
            </p>
            <Link href="/docs/Silva Prado_Tabela de Patrocínios do escritório - item 23.1.8  - Página1.pdf" target="_blank">
              <div className="bg-dark text-white font-bold text-center  mt-10 mb-10 px-4 md:px-2 py-3 hover:opacity-80 transition w-full sm:w-[400px] ">
                Tabela de Patrocínios
              </div>
            </Link>
            <p className="font-tahoma text-dark text-[20px] sm:text-[32px] text-justify mt-4">
            O Silva Prado informa que não fez doações para terceiros até o momento.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="font-dm-serif text-[#625140] text-[32px] sm:text-[48px] mb-10 font-bold">
              Estrutura Organizacional
            </h2>
            <div className="flex justify-center">
                <div className="inline-block">
                  <Image
                    src="/img/estrutura.png"
                    width={863}
                    height={448}
                    alt="Estrutura Organizacional"
                  />
              </div>
            </div>
          </div>

          <div className="pt-10 text-right">
            <Link href="/" className="font-dm-serif text-[20px] sm:text-[32px] font-bold text-brown-dark hover:opacity-80 transition">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
