import { ticketPrize } from "../tickets.config";
import TicketCell from "../TicketCell/TicketCell";
import React from "react";
import styles from "./TicketRedeemPrize.module.css";

const { useEffect } = require("react");

const TicketRedeemPrize = ({ id, onMoneyUpdate }) => {
  useEffect(() => {
    const redeem = async () => {
      const response = await fetch("/redeemPrize", {
        method: "POST",
        body: ticketPrize[id].toString(),
      });
      const money = await response.text();
      onMoneyUpdate(money);
    };

    redeem();
  }, []);

  return (
    <div className={styles.TicketRedeemPrize}>
      <div className={styles.cells}>
        <TicketCell glyph={id} prize={ticketPrize[id]} isInitiallyOpened />
        <TicketCell glyph={id} prize={ticketPrize[id]} isInitiallyOpened />
        <TicketCell glyph={id} prize={ticketPrize[id]} isInitiallyOpened />
      </div>
      <span className={styles.prize}>You won ${ticketPrize[id]}</span>
    </div>
  );
};

export default TicketRedeemPrize;
