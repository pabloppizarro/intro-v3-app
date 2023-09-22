import prisma from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const todos = await prisma.todo.findMany();
  return NextResponse.json({
    data: todos,
  });
};
export const POST = async (req: Request) => {
  const data = await req.json();
  const newTodo = prisma.todo.create({
    data,
  });
  return NextResponse.json({
    message: newTodo,
  });
};
