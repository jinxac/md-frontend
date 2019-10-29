import React from "react";
import PropTypes from "prop-types";
import Edit from "./components/Edit";
import Delete from "./components/Delete";


const propTypes = {
  marker: PropTypes.object.isRequired
};


const Marker = ({marker}) => {
  return (
    <div>
      <p>{marker.formattedAddress}</p>
      <p>{marker.geometry.location.lat}</p>
      <p>{marker.geometry.location.lng}</p>
      <Edit marker={marker} />
      <Delete />
    </div>
  );
};

Marker.propTypes = propTypes;


export default Marker;
