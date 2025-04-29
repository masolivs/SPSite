import Image from 'next/image';


interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}


export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex flex-col items-center w-32 md:w-60">
      <div className="relative -mb-4 z-10 w-20 h-20 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-dark bg-white">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-dark text-white pt-10 pb-2 md:pt-12 md:pb-4 px-2 md:px-4 rounded-lg text-center w-full h-24 md:h-32 flex flex-col justify-center">
        <h3 className="font-bold leading-tight font-dm-serif text-[10px] md:text-lg">{name}</h3>
        <p className="text-[8px] md:text-base font-tahoma">{role}</p>
      </div>
    </div>
  );
};
