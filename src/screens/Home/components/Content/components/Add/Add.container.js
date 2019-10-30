import React from "react";
import Add from "./Add";


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



export default AddContainer;

