import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Property1default.module.css";

type Property1defaultType = {
  /** Style props */
  property1defaultWidth?: CSSProperties["width"];
  property1defaultHeight?: CSSProperties["height"];
  property1defaultPosition?: CSSProperties["position"];
  property1defaultFlexShrink?: CSSProperties["flexShrink"];
};

const Property1default: FunctionComponent<Property1defaultType> = ({
  property1defaultWidth,
  property1defaultHeight,
  property1defaultPosition,
  property1defaultFlexShrink,
}) => {
  const property1defaultStyle: CSSProperties = useMemo(() => {
    return {
      width: property1defaultWidth,
      height: property1defaultHeight,
      position: property1defaultPosition,
      flexShrink: property1defaultFlexShrink,
    };
  }, [
    property1defaultWidth,
    property1defaultHeight,
    property1defaultPosition,
    property1defaultFlexShrink,
  ]);

  return (
    <div className={styles.property1default} style={property1defaultStyle}>
      <div className={styles.frame}>
        <div className={styles.name}>Ask me anything!</div>
      </div>
    </div>
  );
};

export default Property1default;
