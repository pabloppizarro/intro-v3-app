'use client';

import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

useTransition;
const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition();
  return (
    <div
      onClick={() => startTransition(() => completeTodo(todo.id))}
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
