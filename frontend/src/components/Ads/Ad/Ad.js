import React, { useEffect, useRef } from "react";
import styles from "./Ad.module.css";
import img1 from "./ad1.gif";
import img2 from "./ad2.gif";
import img3 from "./ad3.gif";

const images = [img1, img2, img3];

const Ad = ({ id = 0, onSuccess = () => {}, onFail = () => {} }) => {
  const adContainerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const containerDiv = adContainerRef.current;
      const closeButton = closeButtonRef.current;
      if (containerDiv != null && closeButton != null) {
        const x = Math.random() * containerDiv.offsetWidth - 10;
        const y = Math.random() * containerDiv.offsetHeight - 10;

        closeButton.style.top = `${y}px`;
        closeButton.style.left = `${x}px`;
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const buttonOnClick = (e) => {
    e.stopPropagation();
    onSuccess();
  };

  const buttonOnFocus = (e) => {
    e.stopPropagation();
    e.target.blur();
  };

  const imgOnClick = () => {
    onFail();
  };

  return (
    <div className={styles.Ad} ref={adContainerRef}>
      <button
        className={styles.closeButton}
        ref={closeButtonRef}
        onClick={buttonOnClick}
        onFocus={buttonOnFocus}
        tabIndex={-1}
      >
        X
      </button>
      <img
        src={images[(id + 3) % 3]}
        alt="Ad"
        className={styles.img}
        onClick={imgOnClick}
      />
    </div>
  );
};

export default Ad;
