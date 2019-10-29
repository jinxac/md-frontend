import React from "react";
import PropTypes from "prop-types";
import {
  Map,
  Marker
} from "google-maps-react";


const propTypes = {
  google: PropTypes.object.isRequired,
  markers: PropTypes.array.isRequired
};

const MapView = ({
  google,
  markers
}) => {
  const content = [];
  for (const marker of markers) {
    content.push(
      <Marker
        position={{
          lat: marker.geometry.location.lat,
          lng: marker.geometry.location.lng
        }}
      />
    );
  }
  return (
    <Map
      google={google}
      style={{width: "50%"}}
    >
      {content}
    </Map>
  );
};

MapView.propTypes = propTypes;

export default (MapView);
