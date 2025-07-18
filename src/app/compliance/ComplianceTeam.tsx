import { ArrowsLeftRight } from 'phosphor-react';
import { TeamMember } from './TeamMember';


export const ComplianceTeam = () => {
  return (
    <div className="flex justify-center items-center gap-2 md:gap-8 p-2 md:p-10 w-full max-w-screen">
      <TeamMember
        name="Alan Bittar Prado"
        role="Sócio-Fundador e Administrador"
        imageUrl="/socios/ALAN.png"
      />
      <ArrowsLeftRight className="text-dark w-4 h-4 md:w-8 md:h-8" />
      <TeamMember
        name="Bruno Silva"
        role="Sócio-Fundador"
        imageUrl="/socios/BRUNO.jpeg"
      />
      <ArrowsLeftRight className="text-dark w-4 h-4 md:w-8 md:h-8" />
      <TeamMember
        name="Raíck Junio"
        role="Compliance Officer"
        imageUrl="/socios/RAICK.jpeg"
      />
    </div>
  );
};
