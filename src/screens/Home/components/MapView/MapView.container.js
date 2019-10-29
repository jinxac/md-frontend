import React from "react";
import PropTypes from "prop-types";
import {GoogleApiWrapper} from "google-maps-react";
import MapView from "./MapView";

const propTypes = {
  google: PropTypes.object.isRequired
};


// TODO: Read from redux store later on
const MapViewContainer = ({google}) => {
  return <MapView google={google} />;
};

const withMap = GoogleApiWrapper({
  apiKey: "AIzaSyCGSqfC1AC1UgsvgZl2uH3QyQBZ8uFOu38"
});

MapViewContainer.propTypes = propTypes;

export default withMap(MapViewContainer);


