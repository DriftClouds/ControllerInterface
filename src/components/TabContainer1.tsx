import React, { FunctionComponent, useMemo, type CSSProperties } from "react";
import StateDisable from "./StateDisable";
import StartButtonContainer from "./StartButtonContainer";
import ContainerFrameButtons from "./ContainerFrameButtons";
import styles from "./TabContainer1.module.css";

type TabContainer1Type = {
  menu1?: string;
  menu11?: string;
  menu12?: string;
  menu13?: string;
  menu14?: string;
  frame4Id?: string;
  imageIconUrl?: string;
  frame5Id?: string;
  imageIconId?: string;
  imageDescription?: string;

  /** Style props */
  tabsPosition?: CSSProperties["position"];
  tabsTop?: CSSProperties["top"];
  tabsLeft?: CSSProperties["left"];
  tabsWidth?: CSSProperties["width"];
  tabsHeight?: CSSProperties["height"];
  tabsCursor?: CSSProperties["cursor"];
  tabsMargin?: CSSProperties["margin"];
  tabsOverflow?: CSSProperties["overflow"];
  tabsFlexShrink?: CSSProperties["flexShrink"];
  tabsMargin1?: CSSProperties["margin"];
  tabsAlignItems?: CSSProperties["alignItems"];
  tabsJustifyContent?: CSSProperties["justifyContent"];
  tabsBoxShadow?: CSSProperties["boxShadow"];
  menu1Flex?: CSSProperties["flex"];
  tabsFontSize?: CSSProperties["fontSize"];
  tabsFontSize1?: CSSProperties["fontSize"];
  tabsFontSize2?: CSSProperties["fontSize"];
  tabsFontSize3?: CSSProperties["fontSize"];
  contentFontSize?: CSSProperties["fontSize"];
  tabsBoxSizing?: CSSProperties["boxSizing"];

  /** Action props */
  onTabContainer1Click?: () => void;
  onTabs1Click?: () => void;
  onTabs2Click?: () => void;
  onTabs3Click?: () => void;
  onTabs4Click?: () => void;
  onTabs5Click?: () => void;
};

const TabContainer1: FunctionComponent<TabContainer1Type> = ({
  menu1,
  menu11,
  menu12,
  menu13,
  menu14,
  frame4Id,
  imageIconUrl,
  frame5Id,
  imageIconId,
  imageDescription,
  tabsPosition,
  tabsTop,
  tabsLeft,
  tabsWidth,
  tabsHeight,
  tabsCursor,
  tabsMargin,
  tabsOverflow,
  tabsFlexShrink,
  tabsMargin1,
  tabsAlignItems,
  tabsJustifyContent,
  tabsBoxShadow,
  menu1Flex,
  tabsFontSize,
  tabsFontSize1,
  tabsFontSize2,
  tabsFontSize3,
  contentFontSize,
  tabsBoxSizing,
  onTabContainer1Click,
  onTabs1Click,
  onTabs2Click,
  onTabs3Click,
  onTabs4Click,
  onTabs5Click,
}) => {
  const tabContainer1Style: CSSProperties = useMemo(() => {
    return {
      position: tabsPosition,
      top: tabsTop,
      left: tabsLeft,
      width: tabsWidth,
      height: tabsHeight,
      cursor: tabsCursor,
      margin: tabsMargin,
      overflow: tabsOverflow,
      flexShrink: tabsFlexShrink,
    };
  }, [
    tabsPosition,
    tabsTop,
    tabsLeft,
    tabsWidth,
    tabsHeight,
    tabsCursor,
    tabsMargin,
    tabsOverflow,
    tabsFlexShrink,
  ]);

  const tabsStyle: CSSProperties = useMemo(() => {
    return {
      margin: tabsMargin1,
      alignItems: tabsAlignItems,
      justifyContent: tabsJustifyContent,
      boxShadow: tabsBoxShadow,
    };
  }, [tabsMargin1, tabsAlignItems, tabsJustifyContent, tabsBoxShadow]);

  const stateDisableStyle: CSSProperties = useMemo(() => {
    return {
      flex: menu1Flex,
    };
  }, [menu1Flex]);

  const menu1Style: CSSProperties = useMemo(() => {
    return {
      fontSize: tabsFontSize,
    };
  }, [tabsFontSize]);

  const menu1Style1: CSSProperties = useMemo(() => {
    return {
      fontSize: tabsFontSize1,
    };
  }, [tabsFontSize1]);

  const menu1Style2: CSSProperties = useMemo(() => {
    return {
      fontSize: tabsFontSize2,
    };
  }, [tabsFontSize2]);

  const menu1Style3: CSSProperties = useMemo(() => {
    return {
      fontSize: tabsFontSize3,
    };
  }, [tabsFontSize3]);

  const menu1Style4: CSSProperties = useMemo(() => {
    return {
      fontSize: contentFontSize,
    };
  }, [contentFontSize]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: tabsBoxSizing,
    };
  }, [tabsBoxSizing]);

  return (
    <div
      className={styles.tabContainer1}
      onClick={onTabContainer1Click}
      style={tabContainer1Style}
    >
      <nav className={styles.tabs} style={tabsStyle}>
        <StateDisable
          textMenu="Bike"
          stateDisableJustifyContent="space-between"
          stateDisableMargin="0"
          stateDisableAlignSelf="stretch"
          stateDisableFlex="1"
          stateDisableBorderRadius="var(--br-xs) var(--br-xs) 0px 0px"
          stateDisableCursor="pointer"
          stateDisableBackgroundColor="#fff"
          stateDisablePadding="var(--padding-xs) var(--padding-5xl)"
          stateDisableBorderTop="1px solid var(--color-whitesmoke-200)"
          stateDisableBorderRight="1px solid var(--color-whitesmoke-200)"
          stateDisableBorderLeft="1px solid var(--color-whitesmoke-200)"
          menu1Color="#3d5af1"
          menu1FontWeight="600"
          menu1FontSize="16px"
          onTabsClick={onTabs1Click}
        />
        <StateDisable
          textMenu="Motorbike"
          stateDisableJustifyContent="space-between"
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
          textMenu="Car"
          stateDisableJustifyContent="space-between"
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
          onTabsClick={onTabs3Click}
        />
        <StateDisable
          textMenu="Boat"
          stateDisableJustifyContent="space-between"
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
          onTabsClick={onTabs4Click}
        />
        <StateDisable
          textMenu="Train"
          stateDisableJustifyContent="space-between"
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
          onTabsClick={onTabs5Click}
        />
      </nav>
      <div className={styles.content}>
        <StartButtonContainer
          imageIconUrl="/go@2x.png"
          imageIconId="/pause@2x.png"
        />

        <ContainerFrameButtons imageDescription="/shutdown@2x.png" />
      </div>
    </div>
  );
};

export default TabContainer1;
