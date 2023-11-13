import React, { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BikeCard from "../components/BikeCard";
import styles from "./Frame4.module.css";

const Frame4: FunctionComponent = () => {
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

  const onTabs3Click = useCallback(() => {
    navigate("/frame-4");
  }, [navigate]);

  return (
    <div className={styles.tabContainer5Parent}>
      <BikeCard />
    </div>
  );
};

export default Frame4;
