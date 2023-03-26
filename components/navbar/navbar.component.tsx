import React, { useEffect, useState } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();
  const [active, setActive] = useState('');
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/#work', name: 'Work' },
    { path: '/#about-me', name: 'About Me' },
  ];
  useEffect(() => {
    setActive(router.asPath);
  }, [router, router.asPath]);
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar-list']}>
        {routes.map((route) => (
          <li key={route.path} className={active === route.path ? styles.active : ''}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
