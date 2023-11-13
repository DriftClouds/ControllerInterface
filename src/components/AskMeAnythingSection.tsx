import { FunctionComponent } from "react";
import Property1default from "./Property1default";
import styles from "./AskMeAnythingSection.module.css";

const AskMeAnythingSection: FunctionComponent = () => {
  return (
    <div className={styles.faqParent}>
      <img className={styles.faqIcon} alt="" src="/faq@2x.png" />
      <Property1default
        property1defaultWidth="429px"
        property1defaultHeight="83px"
        property1defaultPosition="relative"
        property1defaultFlexShrink="0"
      />
      <img className={styles.enterIcon} alt="" src="/enter@2x.png" />
    </div>
  );
};

export default AskMeAnythingSection;
