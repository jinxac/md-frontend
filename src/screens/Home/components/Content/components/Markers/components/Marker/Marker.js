import React from "react";
import PropTypes from "prop-types";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import styles from "./Marker.module.css";


const propTypes = {
  marker: PropTypes.object.isRequired
};


const Marker = ({marker}) => {
  return (
    <div className={styles.container}>
      <h3 className={`${styles.text} ${styles.heading}`}>
        {marker.description}
      </h3>
      <span className={`${styles.text} ${styles.description}`}>
        Latitude: {marker.lat}
      </span>
      <span className={`${styles.text} ${styles.description}`}>
        Longitude: {marker.lng}
      </span>
      <div className={styles.actions}>
        <Edit marker={marker} />
        &nbsp;
        <span>Or</span>
        &nbsp;
        <Delete marker={marker} />
      </div>
    </div>
  );
};

Marker.propTypes = propTypes;


export default Marker;
