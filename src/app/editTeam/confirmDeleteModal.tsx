'use client';

interface Props {
  employee: { name: string };
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmDeleteModal({ employee, onCancel, onConfirm }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-40">
      <div className="bg-white p-6 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-dark mb-4">Excluir Funcionário</h2>
        <p className="text-gray-700 mb-6">
          Tem certeza que deseja excluir <strong>{employee.name}</strong>?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-6 py-2 border border-gray-400 text-gray-800 cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-red-600 text-white cursor-pointer"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
