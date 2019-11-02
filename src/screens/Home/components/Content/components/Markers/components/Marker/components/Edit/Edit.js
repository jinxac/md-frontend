import React from "react";
import PropTypes from "prop-types";
import {Button} from "reactstrap";
import AddEditMarker from "components/AddEditMarker";
import styles from "./Edit.module.css";

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
  return (
    <div>
      <Button
        className={styles.buttonContainer}
        onClick={toggleModal}
      >
        Edit
      </Button>
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
