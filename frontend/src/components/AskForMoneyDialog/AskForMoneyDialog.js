import Phone from "../Phone/Phone";
import React, { useState } from "react";
import MomDialog from "../MomDialog/MomDialog";
import Ads from "../Ads/Ads";
import ReceiveMoney from "./ReceiveMoney/ReceiveMoney";

const AskForMoneyDialog = ({ onReceiveMoneyFromMom }) => {
  const [stage, setStage] = useState(0);

  const onRequestWatchAds = () => setStage(1);
  const onWatchAdsSuccess = () => setStage(2);

  return (
    <Phone>
      {stage === 0 && <MomDialog onWatchAds={onRequestWatchAds} />}
      {stage === 1 && <Ads onSuccess={onWatchAdsSuccess} />}
      {stage === 2 && (
        <ReceiveMoney onReceiveMoneyFromMom={onReceiveMoneyFromMom} />
      )}
    </Phone>
  );
};

export default AskForMoneyDialog;
