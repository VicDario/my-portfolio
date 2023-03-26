import React from 'react';
import styles from './contact-button.module.scss';

function ContactButton() {
  return (
    <a
      className={styles.button}
      href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%64%61%72%69%6F%63%6F%6E%74%72%65%72%61%73%66%63%40%67%6D%61%69%6C%2E%63%6F%6D"
    >
      Say Hello
    </a>
  );
}

export default ContactButton;
