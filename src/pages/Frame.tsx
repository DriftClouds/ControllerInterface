import React, { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TabContainer1 from "../components/TabContainer1";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabContainer1Click = useCallback(() => {
    navigate("/frame-main");
  }, [navigate]);

  const onTabs1Click = useCallback(() => {
    navigate("/frame-main");
  }, [navigate]);

  const onTabs2Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onTabs3Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onTabs4Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onTabs5Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  return (
    <div className={styles.tabContainer1Parent}>
      <TabContainer1
        menu1="Bike"
        menu11="Motorbike"
        menu12="Car"
        menu13="Boat"
        menu14="Train"
        imageIconUrl="/go@2x.png"
        imageIconId="/pause@2x.png"
        imageDescription="/shutdown@2x.png"
        onTabContainer1Click={onTabContainer1Click}
        onTabs1Click={onTabs1Click}
        onTabs2Click={onTabs2Click}
        onTabs3Click={onTabs3Click}
        onTabs4Click={onTabs4Click}
        onTabs5Click={onTabs5Click}
      />
    </div>
  );
};

export default Frame;
