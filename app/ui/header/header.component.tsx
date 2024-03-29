'use client';
import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import NavBar from 'app/ui/navbar/navbar.component';
import ContactButton from 'app/ui/contact-button/contact-button.component';

import background from '@public/images/header_image.png';

function Header() {
  return (
    <header className={styles.header}>
      <Image
        alt="Background"
        src={background}
        placeholder="blur"
        quality={80}
        fill
        className={styles['header-background']}
        sizes="100vw"
      />
      <NavBar />
      <div className={styles.content}>
        <div className={styles['content-title']}>
          <h1>Víctor Fernández</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <ContactButton />
      </div>
      <div className={styles.redirect}>
        <div className={styles.line}></div>
        <Link href="#">View Projects</Link>
      </div>
    </header>
  );
}

export default Header;
