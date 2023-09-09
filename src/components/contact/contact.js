import React from "react";

import styles from "./contact.module.css";
import emailimg from '../../assets/contact/emailIcon.png';
import linkedinimg from '../../assets/contact/linkedinIcon.png';
import githubimg from '../../assets/contact/githubIcon.png'

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailimg} alt="Email icon" />
          <a href="mailto:krishnapalkp05@gmail.com">krishnapalkp05@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinimg}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/krishnapal-singh-chouhan-8a50a51aa/">linkedin.com/krishnapal-singh-chouhan</a>
        </li>
        <li className={styles.link}>
          <img src={githubimg} alt="Github icon" />
          <a href="https://github.com/kpsingh21">github.com/kpsingh21</a>
        </li>
      </ul>
    </footer>
  );
};