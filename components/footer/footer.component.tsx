import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ContactButton from '@components/contact-button/contact-button.component';
import lines from '@public/images/lines.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Image
        alt="Decorative lines"
        src={lines}
        placeholder="blur"
        quality={80}
        fill
        className={styles.background}
      />
      <div className={styles.title}>
        <h3>Let&apos;s build something together</h3>
        <ContactButton />
      </div>
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
