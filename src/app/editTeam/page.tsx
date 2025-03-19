'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabase';

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
  const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({
    name: '',
    role: '',
    description: '',
    image: '',
    linkedin: '',
  });
  const [editEmployee, setEditEmployee] = useState<Partial<Employee> | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

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
      setEmployees(data);
      setFilteredEmployees(data);
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

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl: string = editEmployee?.image ?? newEmployee.image ?? ''; 

    if (imageFile) {
      const uploadedImage = await uploadImage(imageFile);
      imageUrl = uploadedImage || ''; 
    }

    try {
      const endpoint = '/api/employees';
      const method = editEmployee ? 'PUT' : 'POST';
      const employeeData = editEmployee
        ? { ...editEmployee, image: imageUrl }
        : { ...newEmployee, image: imageUrl };

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error(editEmployee ? 'Erro ao atualizar funcionário' : 'Erro ao criar funcionário');
      }

      const updatedEmployee = await response.json();

      setEmployees((prev) =>
        prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
      );

      setFilteredEmployees((prev) =>
        prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
      );

      setNewEmployee({ name: '', role: '', description: '', image: '', linkedin: '' });
      setEditEmployee(null);
      setImageFile(null);
    } catch (error) {
      console.error(error);
      alert(editEmployee ? 'Erro ao atualizar funcionário' : 'Erro ao criar funcionário');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este funcionário?')) return;

    try {
      const response = await fetch('/api/employees', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error('Erro ao deletar funcionário');

      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      setFilteredEmployees((prev) => prev.filter((emp) => emp.id !== id));
    } catch (error) {
      console.error(error);
      alert('Erro ao deletar funcionário');
    }
  };

  if (userEmail === null) {
    return <p>Verificando informações...</p>;
  }

  return (
    <div>
      <h1>Gerenciar Equipe</h1>

      <input
        type="text"
        placeholder="Buscar funcionário..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>{editEmployee ? 'Editar Funcionário' : 'Criar Novo Funcionário'}</h2>
      <form onSubmit={handleCreateOrUpdate}>
        <input
          type="text"
          placeholder="Nome"
          value={editEmployee ? editEmployee.name : newEmployee.name}
          onChange={(e) =>
            editEmployee
              ? setEditEmployee({ ...editEmployee, name: e.target.value })
              : setNewEmployee({ ...newEmployee, name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Cargo"
          value={editEmployee ? editEmployee.role : newEmployee.role}
          onChange={(e) =>
            editEmployee
              ? setEditEmployee({ ...editEmployee, role: e.target.value })
              : setNewEmployee({ ...newEmployee, role: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="LinkedIn"
          value={editEmployee ? editEmployee.linkedin : newEmployee.linkedin}
          onChange={(e) =>
            editEmployee
              ? setEditEmployee({ ...editEmployee, linkedin: e.target.value })
              : setNewEmployee({ ...newEmployee, linkedin: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Descrição"
          value={editEmployee ? editEmployee.description : newEmployee.description}
          onChange={(e) =>
            editEmployee
              ? setEditEmployee({ ...editEmployee, description: e.target.value })
              : setNewEmployee({ ...newEmployee, description: e.target.value })
          }
          required
        />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
        <button type="submit" disabled={loading}>
          {loading ? (editEmployee ? 'Atualizando...' : 'Criando...') : editEmployee ? 'Atualizar' : 'Criar'}
        </button>
        {editEmployee && (
          <button type="button" onClick={() => setEditEmployee(null)}>
            Cancelar
          </button>
        )}
      </form>

      <h2>Funcionários</h2>
      {filteredEmployees.map((emp) => (
        <div key={emp.id}>
          {emp.image && <img src={emp.image} alt={emp.name} width="100" height="100" />}
          <h3>{emp.name}</h3>
          <p>{emp.role}</p>
          <p>{emp.description}</p>
          <a href={emp.linkedin} target="_blank" rel="noopener noreferrer">{emp.linkedin}</a>
          <button onClick={() => setEditEmployee(emp)}>Editar</button>
          <button onClick={() => handleDelete(emp.id)}>Excluir</button>
        </div>
      ))}

      <button onClick={() => supabase.auth.signOut().then(() => router.push('/login'))}>
        Sair
      </button>
    </div>
  );
}
