import React from 'react';
import styles from './cv-button.module.scss';

function CurriculumVitaeButton() {
  return (
    <a className={styles.button} href="/files/resume.pdf" download="victor-curriculum">
      DOWNLOAD MY RESUME
    </a>
  );
}

export default CurriculumVitaeButton;
