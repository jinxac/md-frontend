import React from "react";
import Add from "./components/Add";
import Markers from "./components/Markers";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
      <Add />
      <hr className={styles.hr} />
      <Markers />
    </div>
  );
};

export default Content;
