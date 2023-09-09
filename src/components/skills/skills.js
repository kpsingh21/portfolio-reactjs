import React from 'react';
import styles from "./skills.module.css";

const skills = () => {
  return (
    <section className={styles.skillsContainer}>
    <h2 className={styles.title}>Skills</h2>
     <div className={styles.skills}>
         <div className={styles.item}>HTML</div>
         <div className={styles.item}>CSS</div>
         <div className={styles.item}>Python</div>
         <div className={styles.item}>Django</div>
         <div className={styles.item}>Drupal</div>
         <div className={styles.item}>Mysql</div>
     </div>
   </section>
  );
}

export default skills;
