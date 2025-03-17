import Image from 'next/image';

async function getEmployees() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/employees`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erro ao buscar funcionários');
  }

  return res.json();
}

export default async function Team() {
  const employees = await getEmployees();

  return (
    <div>
      <h1>Nossa Equipe</h1>
      <div>
        {employees.map((employee: any) => (
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
