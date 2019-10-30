import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Markers from "./Markers";


const propTypes = {
  markers: PropTypes.array.isRequired
};

const MarkersContainer = ({markers}) => {
  return (
    <Markers markers={markers} />
  );
};


const mapStateToProps = (store) => ({
  markers: store.markers
});

MarkersContainer.propTypes = propTypes;

const withStore = connect(mapStateToProps);

export default withStore(MarkersContainer);

