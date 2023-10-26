import React from 'react';
import Image from 'next/image';
import styles from './about-me.module.scss';
import lines from '@public/images/lines.png';

import CurriculumVitaeButton from 'app/ui/cv-button/cv-button.component';

function AboutMe() {
  return (
    <section className={styles['about-me']} id="about-me">
      <h2>About Me</h2>
      <p>
        I&apos;m a driven and self-motivated software developer who&apos;s always seeking new
        opportunities to learn and grow.
      </p>
      <p>
        One of my biggest motivations is to improve my skills every day to keep growing as a
        professional.
      </p>
      <p>
        With a passion for troubleshooting and a deep understanding of programming languages and
        technologies, I enjoycreating innovative solutions that have the potential to make a real
        impact.
      </p>
      <p>
        Whether I&apos;m working on a complex project or tackling a new challenge, I&apos;m always
        pushing myself to be better and to achieve great results.
      </p>
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
