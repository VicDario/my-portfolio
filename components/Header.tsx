import React from 'react';
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
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#work">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
