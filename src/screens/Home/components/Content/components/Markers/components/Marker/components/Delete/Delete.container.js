import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteMarker} from "data/markers/actions";
import {DELETE_MARKER} from "api/endPoints";
import axios from "api/axios";
import Delete from "./Delete";


const propTypes = {
  deleteMarker: PropTypes.func.isRequired,
  marker: PropTypes.object.isRequired
};

class DeleteContainer extends React.Component {
  state = {
    showModal: false
  }

  onDelete = () => {
    const {
      deleteMarker,
      marker
    } = this.props;

    const {placeId} = marker;
    const payload = {
      placeId
    };
    const url = DELETE_MARKER.format(marker.id);
    axios.delete(url, payload)
      .then(() => {
        this.toggleModal();
        deleteMarker(payload);
      })
      .catch((error) => {
        this.toggleModal();
        console.log("error", error);
      });
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render () {
    const {marker} = this.props;
    const {showModal} = this.state;
    return (
      <Delete
        marker={marker}
        showModal={showModal}
        toggleModal={this.toggleModal}
        onDelete={this.onDelete}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteMarker: (payload) => {
    dispatch(deleteMarker(payload));
  }
});

const withStore = connect(null, mapDispatchToProps);


DeleteContainer.propTypes = propTypes;

export default withStore(DeleteContainer);
