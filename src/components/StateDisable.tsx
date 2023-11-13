import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StateDisable.module.css";

type StateDisableType = {
  textMenu?: string;

  /** Style props */
  stateDisableJustifyContent?: CSSProperties["justifyContent"];
  stateDisableMargin?: CSSProperties["margin"];
  stateDisableAlignSelf?: CSSProperties["alignSelf"];
  stateDisableFlex?: CSSProperties["flex"];
  stateDisableBorderRadius?: CSSProperties["borderRadius"];
  stateDisableCursor?: CSSProperties["cursor"];
  stateDisableBackgroundColor?: CSSProperties["backgroundColor"];
  stateDisablePadding?: CSSProperties["padding"];
  stateDisableBorderTop?: CSSProperties["borderTop"];
  stateDisableBorderRight?: CSSProperties["borderRight"];
  stateDisableBorderLeft?: CSSProperties["borderLeft"];
  menu1Color?: CSSProperties["color"];
  menu1FontWeight?: CSSProperties["fontWeight"];
  menu1FontSize?: CSSProperties["fontSize"];

  /** Action props */
  onTabsClick?: () => void;
};

const StateDisable: FunctionComponent<StateDisableType> = ({
  textMenu = "Menu 1",
  stateDisableJustifyContent,
  stateDisableMargin,
  stateDisableAlignSelf,
  stateDisableFlex,
  stateDisableBorderRadius,
  stateDisableCursor,
  stateDisableBackgroundColor,
  stateDisablePadding,
  stateDisableBorderTop,
  stateDisableBorderRight,
  stateDisableBorderLeft,
  menu1Color,
  menu1FontWeight,
  menu1FontSize,
  onTabsClick,
}) => {
  const stateDisableStyle: CSSProperties = useMemo(() => {
    return {
      justifyContent: stateDisableJustifyContent,
      margin: stateDisableMargin,
      alignSelf: stateDisableAlignSelf,
      flex: stateDisableFlex,
      borderRadius: stateDisableBorderRadius,
      cursor: stateDisableCursor,
      backgroundColor: stateDisableBackgroundColor,
      padding: stateDisablePadding,
      borderTop: stateDisableBorderTop,
      borderRight: stateDisableBorderRight,
      borderLeft: stateDisableBorderLeft,
    };
  }, [
    stateDisableJustifyContent,
    stateDisableMargin,
    stateDisableAlignSelf,
    stateDisableFlex,
    stateDisableBorderRadius,
    stateDisableCursor,
    stateDisableBackgroundColor,
    stateDisablePadding,
    stateDisableBorderTop,
    stateDisableBorderRight,
    stateDisableBorderLeft,
  ]);

  const menu1Style: CSSProperties = useMemo(() => {
    return {
      color: menu1Color,
      fontWeight: menu1FontWeight,
      fontSize: menu1FontSize,
    };
  }, [menu1Color, menu1FontWeight, menu1FontSize]);

  return (
    <div
      className={styles.statedisable}
      style={stateDisableStyle}
      onClick={onTabsClick}
    >
      <div className={styles.menu1} style={menu1Style}>
        {textMenu}
      </div>
    </div>
  );
};

export default StateDisable;
