import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TabContainer1 from "../components/TabContainer1";
import styles from "./FrameMain.module.css";

const FrameMain: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabsClick = useCallback(() => {
    navigate("/frame-main");
  }, [navigate]);

  const onTabs1Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onTabs2Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onTabs3Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onTabs4Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  return (
    <div className={styles.frameMain}>
      <TabContainer1
        menu1="Start Screen"
        menu11="System Controls"
        menu12="Preset Controls"
        menu13="Manual Controls"
        menu14="CV"
        frame4Id="start"
        imageIconUrl="/go1@2x.png"
        frame5Id="pause"
        imageIconId="/pause1@2x.png"
        imageDescription="/shutdown1@2x.png"
        tabsPosition="unset"
        tabsTop="unset"
        tabsLeft="unset"
        tabsWidth="1076px"
        tabsHeight="537px"
        tabsCursor="unset"
        tabsMargin="0"
        tabsOverflow="hidden"
        tabsFlexShrink="0"
        tabsMargin1="unset"
        tabsAlignItems="center"
        tabsJustifyContent="flex-start"
        tabsBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        menu1Flex="unset"
        tabsFontSize="20px"
        tabsFontSize1="20px"
        tabsFontSize2="20px"
        tabsFontSize3="20px"
        contentFontSize="20px"
        tabsBoxSizing="border-box"
        onTabs1Click={onTabsClick}
        onTabs2Click={onTabs1Click}
        onTabs3Click={onTabs2Click}
        onTabs4Click={onTabs3Click}
        onTabs5Click={onTabs4Click}
      />
    </div>
  );
};

export default FrameMain;
