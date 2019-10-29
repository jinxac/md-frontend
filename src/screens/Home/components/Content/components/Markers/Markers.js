import React from "react";
import PropTypes from "prop-types";

import Marker from "./components/Marker";


const propTypes = {
  markers: PropTypes.array.isRequired
};

const Markers = ({markers}) => {
  const content = [];

  markers.map((marker) => {
    content.push(
      <Marker marker={marker} />
    );
  });

  return (
    <div>
      {content}
    </div>
  );
};

Markers.propTypes = propTypes;

export default Markers;
