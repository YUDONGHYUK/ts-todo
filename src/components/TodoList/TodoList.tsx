import { useState } from 'react';
import { FilterName } from '../../App';
import AddTodo from '../AddTodo/AddTodo';
import TodoItem from '../TodoItem/TodoItem';

const TODOS: Todo[] = [
  { id: '1', text: '공부하기', status: 'active' },
  { id: '2', text: '운동하기', status: 'active' },
  { id: '3', text: '빨래하기', status: 'active' },
];

function getFilteredItems(todos: Todo[], filter: FilterName) {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
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
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const handleAdd = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const handleDelete = (deleted: Todo) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (updated: Todo) => {
    console.log(updated);
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? updated : todo))
    );
  };

  const filteredTodos = getFilteredItems(todos, filter);

  return (
    <>
      <section>
        <ul>
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
