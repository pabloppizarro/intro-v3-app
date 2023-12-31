import TodoList from '@/components/TodoList';
import prisma from '@/utils/db';

const getData = async () => {
  const todos = await prisma.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  // await new Promise((res, rej) => setTimeout(() => res(''), 2000));
  const todos = await getData();
  return (
    <div>
      <h2>Todos Page!</h2>
      <div>
        <TodoList todos={todos}></TodoList>
      </div>
    </div>
  );
};

export default TodosPage;
