import React, { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BikeForm from "../components/BikeForm";
import styles from "./Frame2.module.css";

const Frame2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTabsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTabs1Click = useCallback(() => {
    navigate("/frame-2");
  }, [navigate]);

  const onTabs3Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  const onTabs4Click = useCallback(() => {
    navigate("/frame-5");
  }, [navigate]);

  return (
    <div className={styles.tabContainer3Parent}>
      <BikeForm />
    </div>
  );
};

export default Frame2;
