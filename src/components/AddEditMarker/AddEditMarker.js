import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import SearchResults from "./components/SearchResults";
import styles from "./AddEditMarker.module.css";

import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
  Spinner
} from "reactstrap";


const defaultProps = {
  description: "",
  lat: 0,
  lng: 0,
  name: ""
};

const propTypes = {
  closeSearchResults: PropTypes.func.isRequired,
  description: PropTypes.string,
  hideInvalidAddress: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  isInvalidAddress: PropTypes.bool.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
  name: PropTypes.string,
  onLocationChange: PropTypes.func.isRequired,
  onLocationSelect: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  showAddressSpinner: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};


const AddEditMarker = ({
  closeSearchResults,
  description,
  isEdit,
  isInvalidAddress,
  isSubmitDisabled,
  lat,
  lng,
  name,
  onLocationChange,
  onLocationSelect,
  onNameChange,
  showModal,
  toggleModal,
  hideInvalidAddress,
  searchResults,
  showAddressSpinner,
  onSubmit
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#9E9E9E"
    },
    content: {
      top: "20%",
      left: "30%",
      right: "auto",
      bottom: "auto",
      minWidth: "600px"
    }
  };
  console.log("isInvalidAddress", isInvalidAddress);
  return (
    <ReactModal
      isOpen={showModal}
      style={customStyles}
      onRequestClose={toggleModal}
    >
      <div>
        <Form onSubmit={onSubmit}>
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                name={"name"}
                placeholder="My Location..."
                type="text"
                value={name}
                onChange={onNameChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Address</Label>
              <Input
                className={styles.input}
                name={"address"}
                placeholder="Search..."
                type="text"
                value={description}
                onChange={onLocationChange}
              />
              {
                showAddressSpinner ? (
                  <div className={styles.addressLoadingIndicatorContainer}>
                    <Spinner className={styles.spinner} />
                  </div>
                ) : null
              }
              {
                isInvalidAddress ? (
                  <div className={styles.invalidAddressContainer}>
                    <span className={styles.invalidAddressSpan}>No Result Found</span>
                    <div
                      className={styles.invalidAddressButton}
                      onClick={hideInvalidAddress}
                    >
                      <span className={styles.invalidAddressButtonText}>Try Again</span>
                    </div>
                  </div>
                ) : null
              }
              <FormText>Enter 3 characters for search to work...</FormText>
            </FormGroup>
            {
              searchResults.length > 0 ? (
                <div className={styles.searchResultContainer}>
                  <SearchResults
                    closeSearchResults={closeSearchResults}
                    searchResults={searchResults}
                    onLocationSelect={onLocationSelect}
                  />
                </div>

              ) : null
            }
          </Col>

          <Col>
            <FormGroup>
              <Label>Latitude</Label>
              <Input
                disabled
                className={styles.input}
                type="text"
                value={lat}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Longitude</Label>
              <Input
                disabled
                className={styles.input}
                type="text"
                value={lng}
              />
            </FormGroup>
          </Col>
          <Col className={styles.action}>
            <Button
              className={styles.submitButton}
              color="primary"
              disabled={isSubmitDisabled}
              type="submit"
            >
              {isEdit ? "SAVE" : "ADD"}
            </Button>
            <div className={styles.cancelButtonContainer}>
              <Button
                color="secondary"
                onClick={toggleModal}
              >
                CANCEL
              </Button>
            </div>

          </Col>
        </Form>
      </div>
    </ReactModal>
  );
};

AddEditMarker.defaultProps = defaultProps;
AddEditMarker.propTypes = propTypes;

export default AddEditMarker;
