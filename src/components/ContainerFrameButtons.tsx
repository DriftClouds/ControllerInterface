import { FunctionComponent } from "react";
import styles from "./ContainerFrameButtons.module.css";

type ContainerFrameButtonsType = {
  imageDescription?: string;
};

const ContainerFrameButtons: FunctionComponent<ContainerFrameButtonsType> = ({
  imageDescription,
}) => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <button className={styles.offWrapper}>
          <div className={styles.off}>Off</div>
        </button>
        <img className={styles.shutdownIcon} alt="" src={imageDescription} />
      </div>
      <button className={styles.offWrapper}>
        <div className={styles.off}>Stop Text</div>
      </button>
    </div>
  );
};

export default ContainerFrameButtons;
