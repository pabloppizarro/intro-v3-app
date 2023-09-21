import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <h2>New Todo</h2>
      <form action={newTodo}>
        <input name="content" className="border border-black/25" />
        <button type="submit" className="border">
          Add!
        </button>
      </form>
    </div>
  );
};

export default NewTodoForm;
