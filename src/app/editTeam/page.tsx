'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabase';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import EmployeeModal from './employeeModal';
import TeamModal from '../components/teamModal';
import ConfirmDeleteModal from './confirmDeleteModal';

interface Employee {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

export default function EditTeam() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');
  const [editEmployee, setEditEmployee] = useState<Partial<Employee> | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null);

  const totalSlides = Math.ceil(filteredEmployees.length / 2);

  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      router.push('/login');
      return;
    }
    const email = data.user.email ?? '';
    if (email !== 'contato@silvapradoadv.com.br') {
      router.push('/?error=acesso-negado');
      return;
    }
    setUserEmail(email);
    fetchEmployees();
  };

  const fetchEmployees = async () => {
    try {
      const res = await fetch('/api/employees');
      if (!res.ok) throw new Error('Erro ao buscar funcionários');
      const data = await res.json();
      const sorted = data.sort((a: Employee, b: Employee) => a.id - b.id);
      setEmployees(sorted);
      setFilteredEmployees(sorted);
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar funcionários');
    }
  };

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, employees]);

  const uploadImage = async (file: File) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from('employeeimages')
      .upload(fileName, file);
    if (error) {
      console.error('Erro ao fazer upload da imagem:', error);
      alert('Erro ao fazer upload da imagem');
      return null;
    }
    const { data: publicUrl } = supabase.storage
      .from('employeeimages')
      .getPublicUrl(data.path);
    return publicUrl.publicUrl;
  };

  const handleCreateOrUpdate = async (
    formData: Partial<Employee>,
    imageFile: File | null
  ) => {
    setLoading(true);
    let imageUrl = formData.image || '';
    if (imageFile) {
      const uploadedImage = await uploadImage(imageFile);
      imageUrl = uploadedImage || '';
    }
    try {
      const endpoint = '/api/employees';
      const method = editEmployee ? 'PUT' : 'POST';
      const employeeData = {
        ...formData,
        image: imageUrl,
        id: editEmployee?.id,
      };
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData),
      });
      if (!response.ok) {
        throw new Error(editEmployee ? 'Erro ao atualizar funcionário' : 'Erro ao criar funcionário');
      }
      const updatedEmployee = await response.json();

      const updatedList = editEmployee
        ? employees.map((emp) =>
            emp.id === updatedEmployee.id ? updatedEmployee : emp
          )
        : [...employees, updatedEmployee];

      const sortedList = updatedList.sort((a, b) => a.id - b.id);
      setEmployees(sortedList);
      setFilteredEmployees(sortedList);
      setEditEmployee(null);
      setShowCreateModal(false);
    } catch (error) {
      console.error(error);
      alert(editEmployee ? 'Erro ao atualizar funcionário' : 'Erro ao criar funcionário');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch('/api/employees', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error('Erro ao deletar funcionário');
      const updated = employees.filter((emp) => emp.id !== id);
      const sorted = updated.sort((a, b) => a.id - b.id);
      setEmployees(sorted);
      setFilteredEmployees(sorted);
    } catch (error) {
      console.error(error);
      alert('Erro ao deletar funcionário');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if ((currentIndex + 1) * 2 < filteredEmployees.length)
      setCurrentIndex(currentIndex + 1);
  };

  const handleOpenViewModal = (emp: Employee) => {
    setSelectedEmployee(emp);
    setIsModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setSelectedEmployee(null);
    setIsModalOpen(false);
  };

  const handleDeleteWithConfirm = (empId: number) => {
    const emp = employees.find((e) => e.id === empId);
    if (emp) setEmployeeToDelete(emp);
  };

  const confirmDelete = async () => {
    if (!employeeToDelete) return;
    await handleDelete(employeeToDelete.id);
    setEmployeeToDelete(null);
  };

  if (userEmail === null) return <p>Verificando informações...</p>;

  return (
    <>
      <div className="flex min-h-screen w-full text-dark">
        <aside className="w-full max-w-[520px] bg-off-white px-10 py-16 flex flex-col justify-between min-h-screen">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-[340px] mx-auto">
              <h1 className="text-6xl font-dm-serif font-bold leading-tight mb-10">
                Editar<br />Funcionários
              </h1>
              <input
                type="text"
                placeholder="Buscar funcionário..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="mb-4 w-full px-4 py-3 text-lg bg-dark text-white outline-none focus:ring-0"
              />
              <button
                className="bg-white text-dark w-full py-3 px-4 text-left text-lg font-medium cursor-pointer"
                onClick={() => {
                  setEditEmployee(null);
                  setShowCreateModal(true);
                }}
              >
                Criar Funcionário
              </button>
            </div>
          </div>

          <button
            onClick={() => supabase.auth.signOut().then(() => router.push('/login'))}
            className="mb-6 bg-white text-dark font-bold text-lg py-3 px-6 w-full max-w-[220px] mx-auto cursor-pointer"
          >
            Sair
          </button>
        </aside>

        <main className="flex-1 bg-dark text-white px-8 py-12 min-h-screen relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -translate-y-1/2 left-4 z-20 p-2 cursor-pointer ${
              currentIndex === 0 ? 'opacity-30' : 'opacity-100'
            }`}
          >
            <ArrowLeft size={48} />
          </button>

          <div className="flex gap-[72px] justify-center overflow-hidden px-8">
            {filteredEmployees.slice(currentIndex * 2, currentIndex * 2 + 2).map((emp) => (
              <div
                key={emp.id}
                className="w-[555px] h-[770px] relative cursor-pointer group flex-shrink-0"
              >
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="object-cover w-full h-full"
                  onClick={() => handleOpenViewModal(emp)}
                />
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditEmployee(emp);
                      setShowCreateModal(true);
                    }}
                    className="text-sm bg-[#E1DCD8] px-4 py-2 cursor-pointer"
                  >
                    Editar
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteWithConfirm(emp.id);
                    }}
                    className="text-sm bg-white text-black px-4 py-2 cursor-pointer"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`absolute top-1/2 -translate-y-1/2 right-4 z-20 p-2 cursor-pointer ${
              currentIndex >= totalSlides - 1 ? 'opacity-30' : 'opacity-100'
            }`}
          >
            <ArrowRight size={48} />
          </button>
        </main>
      </div>

      <TeamModal
        isOpen={isModalOpen}
        onClose={handleCloseViewModal}
        employee={selectedEmployee}
      />

      <EmployeeModal
        isOpen={!!editEmployee || showCreateModal}
        onClose={() => {
          setEditEmployee(null);
          setShowCreateModal(false);
        }}
        employee={
          (editEmployee ?? {
            name: '',
            role: '',
            description: '',
            linkedin: '',
            image: '',
          }) as {
            name: string;
            role: string;
            description: string;
            linkedin: string;
            image?: string;
          }
        }
        onSubmit={handleCreateOrUpdate}
        loading={loading}
        isEditing={!!editEmployee}
      />

      {employeeToDelete && (
        <ConfirmDeleteModal
          employee={employeeToDelete}
          onCancel={() => setEmployeeToDelete(null)}
          onConfirm={confirmDelete}
        />
      )}
    </>
  );
}
