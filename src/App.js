import React from "react";
import PropTypes from "prop-types";
import {
  GoogleApiWrapper,
  Map
} from "google-maps-react";

const propTypes = {
  google: PropTypes.object.isRequired
};



function App ({google}) {
  return (
    <Map google={google} zoom={14} />
  );
}

App.propTypes = propTypes;

export default GoogleApiWrapper({
  apiKey: "AIzaSyCGSqfC1AC1UgsvgZl2uH3QyQBZ8uFOu38"
})(App);
