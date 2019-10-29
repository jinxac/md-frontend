import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import AddEditMarker from "components/AddEditMarker";

const propTypes = {
  marker: PropTypes.object.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const Edit = ({
  marker,
  showModal,
  toggleModal
}) => {
  console.log("***", marker);
  return (
    <div>
      <Button
        description={"Edit"}
        onClick={toggleModal}
      />
      {
        showModal ? (
          <AddEditMarker
            isEdit
            marker={marker}
            showModal={showModal}
            toggleModal={toggleModal}
          />
        ) : null
      }
    </div>
  );
};

Edit.propTypes = propTypes;

export default Edit;
