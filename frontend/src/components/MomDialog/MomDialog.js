import React, { useEffect, useState } from "react";
import styles from "./MomDialog.module.css";
import Message from "./Message/Message";

const MomDialog = ({ onWatchAds = () => {} }) => {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setVisibleMessages(1);
      setTimeout(() => {
        setVisibleMessages(2);
        setTimeout(() => {
          setVisibleMessages(3);
        }, 1000);
      }, 3000);
    }, 1000);
  }, []);

  return (
    <div className={styles.MomDialog}>
      <div className={styles.header}>
        <h1 className={styles.chatName}>Mom</h1>
      </div>
      <div className={styles.chat}>
        <Message mine>Mom, can i have some more money pls</Message>
        <Message>Ofc honey but you gotta watch ur ads first</Message>
        <Message className={styles[`lastMessage_${visibleMessages}`]}>
          <button onClick={onWatchAds} className={styles.watchAds}>
            {"WATCH ADS>>>"}
          </button>
        </Message>
      </div>
      <div className={styles.bottomBar}>
        <input type="text" className={styles.textField} placeholder="Message" />
        <button className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

export default MomDialog;
