import React from "react";
import PropTypes from "prop-types";
import {
  Map,
  Marker
} from "google-maps-react";


const propTypes = {
  google: PropTypes.object.isRequired
};

const MapView = ({google}) => {
  return (
    <Map
      google={google}
      style={{width: "50%"}}
      zoom={14}
    >
      <Marker
        name={"SOMA"}
        position={{lat: 37.778519, lng: -122.405640}}
        title={"The marker`s title will appear as a tooltip."}
      />
      <Marker
        name={"Dolores park"}
        position={{lat: 37.759703, lng: -122.428093}}
      />
      <Marker />
    </Map>
  );
};

MapView.propTypes = propTypes;

export default (MapView);
