'use client';

import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { X, UserPlus } from 'phosphor-react';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any, file: File | null) => void;
  loading: boolean;
  employee: {
    name: string;
    role: string;
    description: string;
    linkedin: string;
    image?: string;
  };
  isEditing: boolean;
}

export default function EmployeeModal({
  isOpen,
  onClose,
  onSubmit,
  loading,
  employee,
  isEditing,
}: Props) {
  const [form, setForm] = useState(employee);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(employee.image || '');

  useEffect(() => {
    setForm(employee);
    setImageFile(null);
    setPreviewUrl(employee.image || '');
  }, [employee]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(form, imageFile);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end overflow-hidden font-tahoma">
      <div className="absolute inset-0 bg-black/60 z-40" onClick={onClose} />

      <div className="relative bg-dark w-full lg:w-2/3 h-full z-50 overflow-y-auto overflow-x-hidden text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray z-50 cursor-pointer"
          aria-label="Fechar"
        >
          <X size={48} weight="bold" />
        </button>

        <div className="hidden lg:flex flex-row items-start justify-center gap-16 text-gray px-16 pt-20">
          <div className="flex flex-col items-start w-[555px]">
            <div className="relative w-[555px] h-[770px]">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-off-white text-dark">
                  Sem imagem
                </div>
              )}

              <label className="absolute bottom-4 right-4 bg-white rounded-full p-2 cursor-pointer z-50 shadow-md">
                <UserPlus size={20} className="text-dark" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between h-[770px] w-full max-w-[555px]"
          >
            <div className="space-y-5 text-dark">
              <input
                name="name"
                placeholder="Nome"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 bg-off-white outline-none text-lg"
                required
              />
              <input
                name="role"
                placeholder="Cargo"
                value={form.role}
                onChange={handleChange}
                className="w-full p-3 bg-off-white outline-none text-lg"
                required
              />
              <textarea
                name="description"
                placeholder="Mini currículo"
                value={form.description}
                onChange={handleChange}
                className="w-full h-[300px] p-3 bg-off-white resize-none outline-none text-lg"
                required
              />
              <input
                name="linkedin"
                placeholder="LinkedIn"
                value={form.linkedin}
                onChange={handleChange}
                className="w-full p-3 bg-off-white outline-none text-lg"
                required
              />
            </div>
            <div className="mt-6 flex gap-4 justify-start">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#E1DCD8] text-dark min-w-[180px] px-6 py-3 text-lg font-medium cursor-pointer"
              >
                {loading
                  ? 'Salvando...'
                  : isEditing
                  ? 'Salvar Alterações'
                  : 'Criar'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-white text-dark min-w-[180px] px-6 py-3 text-lg font-medium cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <style jsx global>{`
        input:focus,
        textarea:focus,
        button:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}
