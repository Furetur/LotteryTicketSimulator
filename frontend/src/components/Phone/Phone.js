import React from "react";
import styles from "./Phone.module.css";

const Phone = ({ children }) => (
  <div className={styles.Phone}>
    <div className={styles.topPanel} />
    <div className={styles.screen}>{children}</div>
    <div className={styles.bottomPanel}>
      <div className={styles.homeButton} />
    </div>
  </div>
);

export default Phone;
