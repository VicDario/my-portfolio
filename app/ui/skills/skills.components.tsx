import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import styles from './skills.module.scss';

function Skills() {
  const personal: string[] = ['Organization', 'Proactivity', 'Responsibility', 'Teamwork'];
  const languages: string[] = ['C#', 'JavaScript', 'TypeScript'];
  const technologies: string[] = [
    'ASP.NET',
    'NestJS',
    'Express',
    'GraphQL',
    'React',
    'Next.js',
    'Angular',
  ];
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Skills</h2>
      <section className={styles['skills-container']}>
        <article className={styles['skill-item']}>
          <FontAwesomeIcon icon={faUserCircle} className={styles['skill-icon']} />
          <h3>Personal</h3>
          <ul>
            {personal.map((skill) => (
              <li  key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
        <article className={styles['skill-item']}>
          <FontAwesomeIcon icon={faJs} className={styles['skill-icon']} />
          <h3>Languages</h3>
          <ul>
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </article>
        <article className={styles['skill-item']}>
          <FontAwesomeIcon icon={faLaptopCode} className={styles['skill-icon']} />
          <h3>Technologies</h3>
          <ul>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Skills;
