import React from "react";
import {ToastContainer} from "react-toastify";
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
      <ToastContainer />
    </>
  );
};

export default Home;
