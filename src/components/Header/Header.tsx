import { Dispatch, SetStateAction } from 'react';
import { Filter, FilterName } from '../../App';
import styles from './Header.module.css';

type HeaderProps = {
  filters: Filter[];
  filter: FilterName;
  onFilterChange: Dispatch<SetStateAction<FilterName>>;
};

export default function Header({
  filters,
  filter,
  onFilterChange,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        {filters.map((item) => (
          <li key={item.id}>
            <button
              className={`${styles.filter} ${
                filter === item.name && styles.selected
              }`}
              onClick={() => onFilterChange(item.name)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
