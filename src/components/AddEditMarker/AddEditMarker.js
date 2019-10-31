import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import SearchResults from "./components/SearchResults";
import styles from "./AddEditMarker.module.css";

import {
  // Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText
} from "reactstrap";


const propTypes = {
  closeSearchResults: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onLocationSelect: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};


const AddEditMarker = ({
  closeSearchResults,
  description,
  lat,
  lng,
  name,
  onLocationChange,
  onLocationSelect,
  onNameChange,
  showModal,
  toggleModal,
  searchResults,
  onSubmit
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "#9E9E9E"
    }
  };
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
                placeholder="Search..."
                type="text"
                value={description}
                onChange={onLocationChange}
              />
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
          <Button type="submit">Submit</Button>
        </Form>
        {/* <form onSubmit={onSubmit}>
          <label>
            Name:
            <input
              className={styles.input}
              type="text"
              onChange={onNameChange}
            />
          </label>
          <label>
          Address:
            <input
              className={styles.input}
              type="text"
              value={description}
              onChange={onLocationChange}
            />
          </label>
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
            <input
              disabled
              className={styles.input}
              type="text"
              value={lat}
            />
          </label>
          <label>
            Longitude:
            <input
              disabled
              className={styles.input}
              type="text"
              value={lng}
            />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
      </div>
    </ReactModal>
  );
};

AddEditMarker.propTypes = propTypes;

export default AddEditMarker;
