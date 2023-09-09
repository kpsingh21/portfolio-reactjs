import React from "react";

import styles from "./Experience.module.css";
import experience from "../../data/experience.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}> 
        <ul className={styles.history}>
          {experience.map((experienceItem, id) => {
            return (
              <li key={id} className={styles.historyItem}> 
                <div className={styles.historyItemDetails}>
                  <h3>{`${experienceItem.role}`}</h3>
                  <h4>{` ${experienceItem.organisation}`}</h4>

                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
   
  );
};