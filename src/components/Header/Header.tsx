import { Dispatch, SetStateAction } from 'react';
import { Filter, FilterName } from '../../App';

type HeaderProps = {
  filters: Filter[];
  onFilterChange: Dispatch<SetStateAction<FilterName>>;
};

export default function Header({ filters, onFilterChange }: HeaderProps) {
  return (
    <header>
      <ul>
        {filters.map((filter) => (
          <li key={filter.id}>
            <button onClick={() => onFilterChange(filter.name)}>
              {filter.name.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
