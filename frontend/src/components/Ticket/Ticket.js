import React, { useEffect, useState } from "react";
import styles from "./Ticket.module.css";
import TicketGlyph from "./TicketGlyph/TicketGlyph";
import TicketField from "./TicketField/TicketField";
import TicketRedeemPrize from "./TicketRedeemPrize/TicketRedeemPrize";

const Ticket = ({ ticket, onMoneyUpdate }) => {
  const [wonId, setWonId] = useState(null);

  useEffect(() => {
    setWonId(null);
  }, [ticket]);

  const onGameEnd = (id) => {
    setWonId(id);
  };

  return (
    <div className={styles.Ticket}>
      <span className={styles.price}>$1</span>
      <div className={styles.glyphContainer}>
        <TicketGlyph />
      </div>
      <div className={styles.ticketMainContainer}>
        <span className={styles.tip}>Match 3 to win</span>
        <div className={styles.ticketFieldContainer}>
          {wonId == null && (
            <TicketField ticket={ticket} onGameEnd={onGameEnd} />
          )}
          {wonId != null && (
            <TicketRedeemPrize id={wonId} onMoneyUpdate={onMoneyUpdate} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
