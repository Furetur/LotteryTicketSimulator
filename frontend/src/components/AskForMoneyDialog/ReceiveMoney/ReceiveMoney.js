import React, { useEffect } from "react";
import styles from "./ReceiveMoney.module.css";

const ReceiveMoney = ({ onReceiveMoneyFromMom = () => {} }) => {
  useEffect(() => {
    const requestMoney = async () => {
      const response = await fetch("/askForMoney", {
        method: "POST",
      });
      const text = await response.text();
      onReceiveMoneyFromMom(text);
    };
    requestMoney();
  }, []);

  return (
    <div className={styles.ReceiveMoney}>
      <span className={styles.text}>Mom sent you $5</span>
    </div>
  );
};

export default ReceiveMoney;
