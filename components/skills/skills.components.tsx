import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import styles from './skills.module.scss';

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <section className={styles['skills-container']}>
        <article className={styles['skill-item']}>
          <FontAwesomeIcon icon={faUserCircle} className={styles['skill-icon']} />
          <h3>Personal</h3>
          <ul>
            <li>Organization</li>
            <li>Proactivity</li>
            <li>Responsability</li>
            <li>Teamwork</li>
          </ul>
        </article>
        <article className={styles['skill-item']}>
          <FontAwesomeIcon icon={faJs} className={styles['skill-icon']} />
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </article>
        <article className={styles['skill-item']}>
          <FontAwesomeIcon icon={faLaptopCode} className={styles['skill-icon']} />
          <h3>Technologies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
          </ul>
        </article>
      </section>
    </section>
  );
};

export default Skills;
