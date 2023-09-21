import NewTodoForm from '@/components/NewTodoForm';

const TodosLayout = ({ children }) => {
  return (
    <div>
      <h2>Todos Layout</h2>
      <div>
        <NewTodoForm></NewTodoForm>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default TodosLayout;
