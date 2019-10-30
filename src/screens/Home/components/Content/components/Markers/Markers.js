import React from "react";
import PropTypes from "prop-types";

import Marker from "./components/Marker";
import styles from "./Markers.module.css";


const propTypes = {
  markers: PropTypes.array.isRequired
};

const Markers = ({markers}) => {
  const content = [];

  for (const marker of markers) {
    content.push(
      <Marker
        key={marker.placeId}
        marker={marker}
      />
    );
  }

  return (
    <div className={styles.container}>
      {content}
    </div>
  );
};

Markers.propTypes = propTypes;

export default Markers;
