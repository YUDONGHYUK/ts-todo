import { useEffect, useState } from 'react';
import { FilterName } from '../../App';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

function getFilteredItems(todos: Todo[], filter: FilterName) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodo() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

export type Todo = {
  id: string;
  text: string;
  status: 'active' | 'completed';
};

type TodoListProps = {
  filter: FilterName;
};

export default function TodoList({ filter }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(() => readTodo());

  const handleAdd = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleDelete = (deleted: Todo) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (updated: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredItems(todos, filter);

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>
      </section>
      <AddTodo onAdd={handleAdd} />
    </>
  );
}
