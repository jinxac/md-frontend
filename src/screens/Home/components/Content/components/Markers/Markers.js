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
        key={marker.id}
        marker={marker}
      />
    );
  }

  return (
    <div className={styles.container}>
      {
        content.length === 0 ? (
          <div>
            <h3>No Markers Present!!</h3>
            <p>Please try adding markers using Add marker button</p>
          </div>
        ) : null
      }
      {content}
    </div>
  );
};

Markers.propTypes = propTypes;

export default Markers;
