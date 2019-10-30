import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import AddEditMarker from "components/AddEditMarker";

const propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const Add = ({
  showModal,
  toggleModal
}) => {
  return (
    <div>
      <Button
        isPrimary
        description={"Add Marker"}
        onClick={toggleModal}
      />
      {
        showModal ? (
          <AddEditMarker
            showModal={showModal}
            toggleModal={toggleModal}
          />
        ) : null
      }
    </div>
  );
};

Add.propTypes = propTypes;

export default Add;
