import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";


const propTypes = {
  marker: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};


const Marker = ({
  onDelete,
  onEdit,
  marker
}) => {
  return (
    <div>
      <p>{marker.formattedAddress}</p>
      <p>{marker.geometry.location.lat}</p>
      <p>{marker.geometry.location.lng}</p>
      <Button
        description={"Delete"}
        onClick={onDelete}
      />
      <Button
        description={"Edit"}
        onClick={onEdit}
      />
    </div>
  );
};

Marker.propTypes = propTypes;


export default Marker;
