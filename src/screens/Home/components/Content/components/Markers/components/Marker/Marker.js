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
      <p>{marker.description}</p>
      <p>{marker.lat}</p>
      <p>{marker.lng}</p>
      <Edit marker={marker} />
      <Delete marker={marker} />
    </div>
  );
};

Marker.propTypes = propTypes;


export default Marker;
