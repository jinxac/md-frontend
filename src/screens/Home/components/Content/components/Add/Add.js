import React from "react";
import PropTypes from "prop-types";
import {Button} from "reactstrap";
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
    <>
      <Button
        color="primary"
        onClick={toggleModal}
      >
        Add Marker
      </Button>
      {
        showModal ? (
          <AddEditMarker
            showModal={showModal}
            toggleModal={toggleModal}
          />
        ) : null
      }
    </>
  );
};

Add.propTypes = propTypes;

export default Add;
