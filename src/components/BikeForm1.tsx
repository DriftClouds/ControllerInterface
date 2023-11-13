import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import StateDisable from "./StateDisable";
import styles from "./BikeForm1.module.css";

const BikeForm1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabs1Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onTabs2Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onTabs4Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  return (
    <div className={styles.tabContainer4}>
      <div className={styles.tabs}>
        <StateDisable
          textMenu="Bike"
          stateDisableJustifyContent="center"
          stateDisableMargin="0"
          stateDisableAlignSelf="stretch"
          stateDisableFlex="1"
          stateDisableBorderRadius="var(--br-5xs) 0px 0px 0px"
          stateDisableCursor="pointer"
          stateDisableBackgroundColor="#f3f3f3"
          stateDisablePadding="var(--padding-5xs) var(--padding-5xl)"
          stateDisableBorderTop="unset"
          stateDisableBorderRight="unset"
          stateDisableBorderLeft="unset"
          menu1Color="#c0c0c0"
          menu1FontWeight="unset"
          menu1FontSize="16px"
          onTabsClick={onTabsClick}
        />
        <StateDisable
          textMenu="Motorbike"
          stateDisableJustifyContent="center"
          stateDisableMargin="0"
          stateDisableAlignSelf="stretch"
          stateDisableFlex="1"
          stateDisableBorderRadius="unset"
          stateDisableCursor="pointer"
          stateDisableBackgroundColor="#f3f3f3"
          stateDisablePadding="var(--padding-5xs) var(--padding-5xl)"
          stateDisableBorderTop="unset"
          stateDisableBorderRight="unset"
          stateDisableBorderLeft="unset"
          menu1Color="#c0c0c0"
          menu1FontWeight="unset"
          menu1FontSize="16px"
          onTabsClick={onTabs1Click}
        />
        <StateDisable
          textMenu="Car"
          stateDisableJustifyContent="center"
          stateDisableMargin="0"
          stateDisableAlignSelf="stretch"
          stateDisableFlex="1"
          stateDisableBorderRadius="unset"
          stateDisableCursor="pointer"
          stateDisableBackgroundColor="#f3f3f3"
          stateDisablePadding="var(--padding-5xs) var(--padding-5xl)"
          stateDisableBorderTop="unset"
          stateDisableBorderRight="unset"
          stateDisableBorderLeft="unset"
          menu1Color="#c0c0c0"
          menu1FontWeight="unset"
          menu1FontSize="16px"
          onTabsClick={onTabs2Click}
        />
        <StateDisable
          textMenu="Boat"
          stateDisableJustifyContent="flex-start"
          stateDisableMargin="0"
          stateDisableAlignSelf="stretch"
          stateDisableFlex="1"
          stateDisableBorderRadius="var(--br-xs) var(--br-xs) 0px 0px"
          stateDisableCursor="unset"
          stateDisableBackgroundColor="#fff"
          stateDisablePadding="var(--padding-xs) var(--padding-5xl)"
          stateDisableBorderTop="1px solid var(--color-whitesmoke-200)"
          stateDisableBorderRight="1px solid var(--color-whitesmoke-200)"
          stateDisableBorderLeft="1px solid var(--color-whitesmoke-200)"
          menu1Color="#3d5af1"
          menu1FontWeight="600"
          menu1FontSize="18px"
        />
        <StateDisable
          textMenu="Train"
          stateDisableJustifyContent="center"
          stateDisableMargin="0"
          stateDisableAlignSelf="stretch"
          stateDisableFlex="1"
          stateDisableBorderRadius="0px var(--br-5xs) 0px 0px"
          stateDisableCursor="pointer"
          stateDisableBackgroundColor="#f3f3f3"
          stateDisablePadding="var(--padding-5xs) var(--padding-5xl)"
          stateDisableBorderTop="unset"
          stateDisableBorderRight="unset"
          stateDisableBorderLeft="unset"
          menu1Color="#c0c0c0"
          menu1FontWeight="unset"
          menu1FontSize="16px"
          onTabsClick={onTabs4Click}
        />
      </div>
      <div className={styles.content} />
    </div>
  );
};

export default BikeForm1;
