import React from "react";
import PropTypes from "prop-types";
import Delete from "./Delete";

const propTypes = {
  marker: PropTypes.object.isRequired
};

class DeleteContainer extends React.Component {
  state = {
    showModal: false
  }

  onDelete = () => {

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

DeleteContainer.propTypes = propTypes;

export default DeleteContainer;
