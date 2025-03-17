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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Nossa Equipe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map((employee: any) => (
          <div key={employee.id} className="bg-white shadow-lg rounded-lg p-4">
            <Image
              src={employee.image || '/default-avatar.png'}
              alt={employee.name}
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold text-center mt-4">{employee.name}</h2>
            <p className="text-gray-600 text-center">{employee.role}</p>
            <p className="text-gray-500 text-sm text-center">{employee.description}</p>
            <div className="flex justify-center mt-3">
              <a href={employee.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
