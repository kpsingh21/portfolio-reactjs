import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>B.tech </h3>
              <p>
                Govt Enginerring College Rewa<br></br>
                2018-2022 RGPV Bhopal<br></br>
                Electrical Enginerring<br></br>
                7.87 CGPA<br></br>
              </p>
            </div>
          </li> 
        </ul>
      </div>
    </section>
  );
};
