'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type Employee = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
};

export default function Team() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('/api/employees');
        if (!response.ok) throw new Error('Erro ao buscar funcionários');

        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Nossa Equipe</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map((employee) => (
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
