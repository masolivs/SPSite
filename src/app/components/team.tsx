import Image from 'next/image';
import { prisma } from '@/lib/prisma'; 

export default async function Team() {
  const employees = await prisma.employee.findMany();

  return (
    <div>
      <h1>Nossa Equipe</h1>
      <div>
        {employees.map((employee) => (
          <div key={employee.id}>
            <Image
              src={employee.image || '/default-avatar.png'}
              alt={employee.name}
              width={128}
              height={128}
            />
            <h2>{employee.name}</h2>
            <p>{employee.role}</p>
            <p>{employee.description}</p>
            <div>
              <a href={employee.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
