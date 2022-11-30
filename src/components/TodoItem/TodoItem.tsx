import React from 'react';
import { Todo } from '../TodoList/TodoList';
import { FaRegTrashAlt } from 'react-icons/fa';

type TodoItemProps = {
  todo: Todo;
  onDelete: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
};

export default function TodoItem({ todo, onDelete, onUpdate }: TodoItemProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleClick = () => {
    onDelete(todo);
  };

  return (
    <li>
      <input
        type='checkbox'
        id={todo.id}
        checked={todo.status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={handleClick}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
}
