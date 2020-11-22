import React from "react";
import classNames from "classnames";
import styles from "./Message.module.css";

const Message = ({ mine = false, children, className }) => {
  const classes = classNames(styles.Message, className, {
    [styles.mine]: mine,
    [styles.their]: !mine,
  });
  return <div className={classes}>{children}</div>;
};

export default Message;
