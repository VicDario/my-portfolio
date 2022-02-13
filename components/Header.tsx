import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-left']}>
        <h2>Víctor Fernández</h2>
      </div>
      <nav className={styles['header-right']}>
        <ul className={styles['header-nav']}>
          <li>
            <Link href="#work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="#work">
              <a>About Me</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
