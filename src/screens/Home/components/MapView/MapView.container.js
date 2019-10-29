import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {GoogleApiWrapper} from "google-maps-react";
import MapView from "./MapView";

const propTypes = {
  google: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired
};


// TODO: Read from redux store later on
const MapViewContainer = ({
  markers,
  google
}) => {
  return (
    <MapView
      google={google}
      initialCenter={markers[0].geometry.location}
      markers={markers}
    />
  );
};

const withMap = GoogleApiWrapper({
  apiKey: "AIzaSyCGSqfC1AC1UgsvgZl2uH3QyQBZ8uFOu38"
});

MapViewContainer.propTypes = propTypes;

const mapStateToProps = (store) => ({
  markers: store.markers
});

const withStore = connect(mapStateToProps);

export default withStore(withMap(MapViewContainer));


