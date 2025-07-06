import styles from './Header.module.css';
import IconLogo from './icons/IconLogo';
import IconList from './icons/IconList';

export default function Header() {
  return (
    <header className={styles.header}>
      <IconLogo className={styles.headerLogo} />
      <button className={styles.headerMenu} aria-label="Меню">
        <IconList />
      </button>
    </header>
  );
} 