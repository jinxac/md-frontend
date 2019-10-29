import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";


const propTypes = {
  address: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // searchResults: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const AddEditMarker = ({
  address,
  lat,
  lng,
  onLocationChange,
  onNameChange,
  showModal,
  toggleModal,
  // searchResults,
  onSubmit
}) => {
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={toggleModal}
    >
      <div>
        <form onSubmit={onSubmit}>
          Name: <input type="text" onChange={onNameChange} />
          Address: <input type="text" onChange={onLocationChange} value={address} />
          Latitude: <input disabled type="text" value={lat} />
          Longitude: <input disabled type="text" value={lng} />
        </form>
      </div>
    </ReactModal>
  );
};

AddEditMarker.propTypes = propTypes;

export default AddEditMarker;
