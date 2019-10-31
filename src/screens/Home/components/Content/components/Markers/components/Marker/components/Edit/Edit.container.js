import React from "react";
import PropTypes from "prop-types";
import Edit from "./Edit";

const propTypes = {
  marker: PropTypes.object.isRequired
};

class EditContainer extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render () {
    const {marker} = this.props;
    const {showModal} = this.state;
    console.log("marker in edit", marker);
    return (
      <Edit
        marker={marker}
        showModal={showModal}
        toggleModal={this.toggleModal}
      />
    );
  }
}

EditContainer.propTypes = propTypes;

export default EditContainer;
