import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; 

export async function GET() {
  try {
    const employees = await prisma.employee.findMany(); 

    return NextResponse.json(employees);
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
    return NextResponse.json({ error: 'Erro ao buscar funcionários' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, role, description, image, linkedin } = await req.json();

    if (!name || !role || !description || !image || !linkedin) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const newEmployee = await prisma.employee.create({
      data: { name, role, description, image, linkedin },
    });

    return NextResponse.json(newEmployee, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar funcionário:', error);
    return NextResponse.json({ error: 'Erro ao criar funcionário' }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, role, description, image, linkedin } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID do funcionário é obrigatório' }, { status: 400 });
    }

    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: { name, role, description, image, linkedin },
    });

    return NextResponse.json(updatedEmployee);
  } catch (error) {
    console.error('Erro ao atualizar funcionário:', error);
    return NextResponse.json({ error: 'Erro ao atualizar funcionário' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'ID é obrigatório para deletar um funcionário' }, { status: 400 });
    }

    await prisma.employee.delete({ where: { id } });

    return NextResponse.json({ message: 'Funcionário deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar funcionário:', error);
    return NextResponse.json({ error: 'Erro ao deletar funcionário' }, { status: 500 });
  }
}