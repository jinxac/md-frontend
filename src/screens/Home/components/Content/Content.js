import React from "react";
import Add from "./components/Add";
import Markers from "./components/Markers";
import styles from "./styles.css";

const Content = () => {
  return (
    <div>
      <Add />
      <hr className={"hr"} />
      <Markers />
    </div>
  );
};

export default Content;
