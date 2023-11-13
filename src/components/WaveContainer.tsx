import { FunctionComponent } from "react";
import styles from "./WaveContainer.module.css";

type WaveContainerType = {
  greetingText?: string;
  actionButtonText?: string;
};

const WaveContainer: FunctionComponent<WaveContainerType> = ({
  greetingText,
  actionButtonText,
}) => {
  return (
    <div className={styles.frame}>
      <button className={styles.waveWrapper}>
        <div className={styles.wave}>{greetingText}</div>
      </button>
      <button className={styles.waveWrapper}>
        <div className={styles.wave}>{actionButtonText}</div>
      </button>
    </div>
  );
};

export default WaveContainer;
