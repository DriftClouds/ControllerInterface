import React, { FunctionComponent } from "react";
import styles from "./StartButtonContainer.module.css";

type StartButtonContainerType = {
  iconText?: string;
  imageIconUrl?: string;
  imageIconText?: string;
  imageIconId?: string;
};

const StartButtonContainer: FunctionComponent<StartButtonContainerType> = ({
  iconText,
  imageIconUrl,
  imageIconText,
  imageIconId,
}) => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <button className={styles.startWrapper}>
          <div className={styles.start}>Start</div>
        </button>
        <img className={styles.goIcon} alt="" src={imageIconUrl} />
      </div>
      <div className={styles.frame2}>
        <button className={styles.startWrapper}>
          <div className={styles.start}>Pause</div>
        </button>
        <img className={styles.goIcon} alt="" src={imageIconId} />
      </div>
    </div>
  );
};

export default StartButtonContainer;
