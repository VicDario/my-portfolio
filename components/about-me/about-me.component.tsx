import React from 'react';
import Image from 'next/image';
import styles from './about-me.module.scss';
import lines from '@public/images/lines.png';

import CurriculumVitaeButton from '@components/cv-button/cv-button.component';

function AboutMe() {
  return (
    <section className={styles['about-me']} id="about-me">
      <h2>About Me</h2>
      <p>I am passionate about organization and proactivity in every job I do.</p>
      <p>
        One of my biggest motivations is to improve my skills every day to keep growing as a
        professional.
      </p>
      <p>
        I love programming because I combine technology with my interest in solving problems. <br />
      </p>
      <p>I know that by applying this formula I can create products with great potential.</p>
      <div className={styles['button-container']}>
        <CurriculumVitaeButton />
      </div>
      <Image
        alt="Decorative lines"
        src={lines}
        placeholder="blur"
        quality={80}
        fill
        className={styles.background}
      />
    </section>
  );
}

export default AboutMe;
