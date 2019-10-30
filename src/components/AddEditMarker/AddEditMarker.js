import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import SearchResults from "./components/SearchResults";


const propTypes = {
  description: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onLocationSelect: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};

const AddEditMarker = ({
  description,
  lat,
  lng,
  onLocationChange,
  onLocationSelect,
  onNameChange,
  showModal,
  toggleModal,
  searchResults,
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
          Address: <input type="text" onChange={onLocationChange} value={description} />
          {
            searchResults.length > 0 ? (
              <SearchResults
                searchResults={searchResults}
                onLocationSelect={onLocationSelect}
              />
            ) : null
          }
          <label>
            Latitude:
            <input disabled type="text" value={lat} />
          </label>
          <label>
            Longitude:
            <input disabled type="text" value={lat} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </ReactModal>
  );
};

AddEditMarker.propTypes = propTypes;

export default AddEditMarker;
