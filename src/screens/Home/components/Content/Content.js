import React from "react";
import Button from "components/Button";
import Markers from "./components/Markers";
import styles from "./styles.css";

const Content = () => {
  return (
    <div>
      <Button
        description={"Add Marker"}
        onClick={() => {}}
      />
      <hr className={"hr"} />
      <Markers />
    </div>
  );
};

export default Content;
