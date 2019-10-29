import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from "axios";
import {
  addMarker,
  editMarker
} from "data/markers/actions";
import AddEditMarker from "./AddEditMarker";

const defaultProps = {
  isEdit: false,
  marker: {}
};

const propTypes = {
  addMarker: PropTypes.func.isRequired,
  editMarker: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  marker: PropTypes.object,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired
};


class AddEditMarkerContainer extends React.Component {
  state = {
    searchResults: "",
    name: "",
    lat: 0,
    lng: 0,
    address: ""
  }


  componentDidMount () {
    const {marker} = this.props;
    // console.log("marker", marker);
    // if (!marker) {
    //   return null;
    // }
    this.setState({
      lat: marker.geometry.location.lat,
      lng: marker.geometry.location.lng,
      address: marker.formattedAddress
    });
  }

  onLocationChange  = (event) => {
    this.setState({address: event.target.value});
    const searchText = event.target.value;
    if (searchText.length < 3) {
      return;
    }
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&key="AIzaSyCGSqfC1AC1UgsvgZl2uH3QyQBZ8uFOu38"`;
    axios.get(url)
      .then(response => this.updateResults(response.data.predictions))
      .catch(err => console.log(err));
  }

  onSubmit = () => {
    const {
      isEdit,
      addMarker,
      editMarker
    } = this.props;
    return null;
    if (isEdit) {
      editMarker();
      return null;
    }

    addMarker();
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateResults = (data) => {
    const results = [];
    data.map((datum) => {
      results.push({
        description: datum.description,
        placeId: datum.place_id,
        terms: datum.terms
      });
    });
    this.setState({results});
  }

  render () {
    const {
      address,
      searchResults,
      lat,
      lng
    } = this.state;

    const {
      showModal,
      toggleModal
    } = this.props;

    return (
      <AddEditMarker
        address={address}
        lat={lat}
        lng={lng}
        searchResults={searchResults}
        showModal={showModal}
        toggleModal={toggleModal}
        onLocationChange={this.onLocationChange}
        onNameChange={this.onNameChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMarker: () => {
    dispatch(addMarker());
  },
  editMarker: () => {
    dispatch(editMarker());
  }
});


AddEditMarkerContainer.defaultProps = defaultProps;
AddEditMarkerContainer.propTypes = propTypes;

const withStore = connect(null, mapDispatchToProps);


export default withStore(AddEditMarkerContainer);
