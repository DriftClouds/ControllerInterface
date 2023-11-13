import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TabContainer2 from "../components/TabContainer2";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabsClick = useCallback(() => {
    navigate("/");
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
    <div className={styles.tabContainer2Parent}>
      <TabContainer2 />
    </div>
  );
};

export default Frame1;
