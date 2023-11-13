import React, { FunctionComponent } from "react";
import WaveContainer from "./WaveContainer";
import styles from "./WaveCard.module.css";

const WaveCard: FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.frame}>
        <WaveContainer greetingText="wave" actionButtonText="Pause" />
        <WaveContainer greetingText="Salute" actionButtonText="ABORT" />
      </div>
      <WaveContainer greetingText="T-pose" actionButtonText="Default" />
    </div>
  );
};

export default WaveCard;
