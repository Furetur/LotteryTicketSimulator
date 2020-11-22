import React, { useState } from "react";
import TicketCell from "../TicketCell/TicketCell";
import styles from "./TicketField.module.css";
import { ticketPrize } from "../tickets.config";

const TicketField = ({ ticket, onGameEnd = () => {} }) => {
  const [counters, setCounters] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    8: 0,
    777: 0,
  });

  const onOpen = (id) => () => {
    const newCounter = {
      ...counters,
      [id]: counters[id] + 1,
    };
    if (newCounter[id] === 3) {
      onGameEnd(id);
    } else {
      setCounters(newCounter);
    }
  };

  return (
    <div className={styles.TicketField}>
      {ticket.map((id, index) => (
        <TicketCell
          key={index}
          glyph={id}
          prize={ticketPrize[id]}
          onOpen={onOpen(id)}
        />
      ))}
    </div>
  );
};

export default TicketField;
