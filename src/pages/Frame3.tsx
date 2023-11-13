import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BikeForm1 from "../components/BikeForm1";
import styles from "./Frame3.module.css";

const Frame3: FunctionComponent = () => {
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
    <div className={styles.tabContainer4Parent}>
      <BikeForm1 />
    </div>
  );
};

export default Frame3;
