import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import {Button} from "reactstrap";
// import Button from "components/Button";
import styles from "./Delete.module.css";


const propTypes = {
  marker: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const Delete = ({
  marker,
  showModal,
  onDelete,
  toggleModal
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#9E9E9E"
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "500px",
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  };
  return (
    <div>
      <Button
        className={styles.buttonContainer}
        onClick={toggleModal}
      >
        Delete
      </Button>
      {
        showModal ? (
          <ReactModal
            isOpen={showModal}
            style={customStyles}
            onRequestClose={toggleModal}
          >
            <div>
              <div className={styles.descriptionContainer}>
                <span className={styles.description}>
                  Are you sure you want to delete location{" "}
                  <b><i>{marker.name}</i></b>?
                </span>
              </div>
              <Button
                color="danger"
                onClick={onDelete}
              >
                Yes
              </Button>{" "}
              <Button
                color="secondary"
                onClick={toggleModal}
              >
                No
              </Button>
            </div>
          </ReactModal>
        ) : null
      }

    </div>
  );
};

Delete.propTypes = propTypes;

export default Delete;
