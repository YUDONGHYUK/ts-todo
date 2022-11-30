import { useState } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';

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
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
