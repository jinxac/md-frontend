import React from "react";
import PropTypes from "prop-types";
import Marker from "./Marker";

const propTypes = {
  marker: PropTypes.object.isRequired
};

const MarkerContainer = ({marker}) => {

  const onEdit = () => {
    // Edit marker
  };

  const onDelete = () => {
    // Delete marker
  };

  return (
    <Marker
      marker={marker}
      onDelete={onDelete}
      onEdit={onEdit}
    />
  );
};

MarkerContainer.propTypes = propTypes;

export default MarkerContainer;
