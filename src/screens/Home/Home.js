import React from "react";
import MapView from "./components/MapView";
import Content from "./components/Content";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.mapContainer}>
        <MapView />
      </div>
      <div className={styles.contentContainer}>
        <Content />
      </div>
    </>
  );
};

export default Home;
