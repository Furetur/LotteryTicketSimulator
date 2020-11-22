import React from "react";
import classNames from "classnames";
import styles from "./TicketCell.module.css";
import { useState } from "react";

const TicketCell = ({
  glyph,
  prize,
  onOpen = () => {},
  isInitiallyOpened = false,
}) => {
  const [closed, setClosed] = useState(!isInitiallyOpened);

  const open = () => {
    setClosed(false);
    onOpen();
  };

  const ticketCellClasses = classNames(styles.TicketCell, {
    [styles.opened]: !closed,
  });

  return (
    <div className={ticketCellClasses}>
      <button className={classNames(styles.face, styles.front)} onClick={open}>
        <span className={styles.wildcard}>$</span>
      </button>
      <div className={classNames(styles.face, styles.back)}>
        <span className={styles.glyph}>{glyph}</span>
        <span className={styles.prize}>${prize}.00</span>
      </div>
    </div>
  );
};

export default TicketCell;
