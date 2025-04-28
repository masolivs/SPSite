import { NextResponse } from 'next/server';
import supabase from '@/lib/supabase';

export async function GET() {
  try {
    const { data: employees, error } = await supabase.from('Employee').select('*');

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(employees);
  } catch (error) {
    return NextResponse.json({ error: 'Erro inesperado ao buscar funcionários' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, role, description, image, linkedin } = await req.json();

    if (!name || !role || !description || !image || !linkedin) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const { data: newEmployee, error } = await supabase
      .from('Employee')
      .insert([{ name, role, description, image, linkedin }])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro inesperado ao criar funcionário' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, role, description, image, linkedin } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID do funcionário é obrigatório' }, { status: 400 });
    }

    const { data: updatedEmployee, error } = await supabase
      .from('Employee')
      .update({ name, role, description, image, linkedin })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    return NextResponse.json({ error: 'Erro inesperado ao atualizar funcionário' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID é obrigatório para deletar um funcionário' }, { status: 400 });
    }

    const { error } = await supabase
      .from('Employee')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Funcionário deletado com sucesso' });
  } catch (error) {
    return NextResponse.json({ error: 'Erro inesperado ao deletar funcionário' }, { status: 500 });
  }
}
