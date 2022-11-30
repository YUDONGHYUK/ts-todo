import { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import './App.css';

export type FilterName = 'all' | 'active' | 'completed';

export type Filter = {
  id: string;
  name: FilterName;
};

const filters: Filter[] = [
  { id: '1', name: 'all' },
  { id: '2', name: 'active' },
  { id: '3', name: 'completed' },
];

function App() {
  const [filter, setFilter] = useState<FilterName>('all');

  return (
    <div>
      <Header filters={filters} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;
