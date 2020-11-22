import React, { useState } from "react";
import styles from "./Ads.module.css";
import Ad from "./Ad/Ad";

const Ads = ({ onSuccess = () => {} }) => {
  const [currentAdId, setCurrentAdId] = useState(0);
  const [adsToWatch, setAdsToWatch] = useState(1);

  const incrementId = () => {
    setCurrentAdId((currentAdId + 1) % 3);
  };

  const onFail = () => {
    setAdsToWatch(Math.min(3, adsToWatch + 1));
    incrementId();
  };

  const onAdSuccess = () => {
    if (adsToWatch === 1) {
      onSuccess();
    } else {
      setAdsToWatch(adsToWatch - 1);
      incrementId();
    }
  };

  return (
    <div className={styles.Ads}>
      <span className={styles.counter}>Ads left {adsToWatch}</span>
      <Ad id={currentAdId} onFail={onFail} onSuccess={onAdSuccess} />
    </div>
  );
};

export default Ads;
