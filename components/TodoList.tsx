import { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((t: any) => (
        <Todo todo={t} key={t.id}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
