import React from "react";
import img from "./img.png";
import styles from "./TicketGlyph.module.css";

const TicketGlyph = () => {
  return (
    <div className={styles.TicketGlyph}>
      <span className={styles.title}>HOT FIRE!</span>
      <img className={styles.fire} src={img} alt="Fire" />
      <img className={styles.fire} src={img} alt="Fire" />
      <img className={styles.fire} src={img} alt="Fire" />
    </div>
  );
};

export default TicketGlyph;
