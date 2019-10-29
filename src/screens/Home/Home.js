import React from "react";
import MapView from "./components/MapView";
import Content from "./components/Content";

const Home = () => {
  return (
    <>
      <MapView />
      <div style={{marginLeft: "52%"}}>
        <Content />
      </div>
    </>
  );
};

export default Home;
