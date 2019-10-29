import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Add from "./Add";
import {addMarker} from "data/markers/actions";

const propTypes = {
  addMarker: PropTypes.func.isRequired
};


class AddContainer extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }


  render () {
    const {showModal} = this.state;
    return (
      <Add
        showModal={showModal}
        toggleModal={this.toggleModal}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMarker: () => {
    dispatch(addMarker());
  }
});

AddContainer.propTypes = propTypes;

const withStore = connect(null, mapDispatchToProps);

export default withStore(AddContainer);

