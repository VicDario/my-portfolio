import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ContactButton from '@components/contact-button/contact-button.component';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h3>Let&apos;s build something together</h3>
      <ContactButton />
      <nav className={styles.nav}>
        <Link href="https://github.com/VicDario" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </Link>
        <Link href="https://www.linkedin.com/in/victordfernandez/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
