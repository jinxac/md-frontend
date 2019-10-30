import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {GoogleApiWrapper} from "google-maps-react";
import {GOOGLE_API_KEY} from "wconstants";
import MapView from "./MapView";

const propTypes = {
  google: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired
};


const MapViewContainer = ({
  markers,
  google
}) => {
  return (
    <MapView
      google={google}
      markers={markers}
    />
  );
};

const withMap = GoogleApiWrapper({apiKey: GOOGLE_API_KEY});

MapViewContainer.propTypes = propTypes;

const mapStateToProps = (store) => ({
  markers: store.markers
});

const withStore = connect(mapStateToProps);

export default withStore(withMap(MapViewContainer));


