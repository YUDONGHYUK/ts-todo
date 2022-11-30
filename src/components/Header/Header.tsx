import { Dispatch, SetStateAction } from 'react';
import { Filter, FilterName } from '../../App';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import styles from './Header.module.css';
import { useDarkMode } from '../../context/DarkModeContext';

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
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button
        className={`${styles.darkmode} ${darkMode && styles.active}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
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
