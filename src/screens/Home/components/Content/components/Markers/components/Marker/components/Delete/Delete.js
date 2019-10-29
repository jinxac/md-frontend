import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import Button from "components/Button";


const propTypes = {
  onDelete: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const Delete = ({
  showModal,
  onDelete,
  toggleModal
}) => {
  return (
    <div>
      <Button
        description={"Delete"}
        onClick={toggleModal}
      />
      <ReactModal
        isOpen={showModal}
        onRequestClose={toggleModal}
      >
        <div>
          <p> Are you sure</p>
          <Button
            description="Yes"
            onClick={onDelete}
          />
          <Button
            description="No"
            onClick={toggleModal}
          />
        </div>
      </ReactModal>
    </div>
  );
};

Delete.propTypes = propTypes;

export default Delete;
