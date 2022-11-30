import React from 'react';
import { Todo } from '../TodoList/TodoList';
import { FaRegTrashAlt } from 'react-icons/fa';
import styles from './TodoItem.module.css';

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
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={todo.id}
        checked={todo.status === 'completed'}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={todo.id}>
        {todo.text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleClick}>
          <FaRegTrashAlt />
        </button>
      </span>
    </li>
  );
}
