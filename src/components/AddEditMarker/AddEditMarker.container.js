import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {GOOGLE_API_KEY} from "constants";
import {
  addMarker,
  editMarker
} from "data/markers/actions";
import AddEditMarker from "./AddEditMarker";
import axios from "api/axios";

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
    description: "",
    initialPlaceId: "",
    placeId: ""
  }


  componentDidMount () {
    const {marker} = this.props;
    this.setState({
      lat: marker.lat,
      lng: marker.lng,
      description: marker.description,
      initialPlaceId: marker.placeId
    });
  }

  onLocationChange  = (event) => {
    this.setState({description: event.target.value});
    const searchText = event.target.value;
    if (searchText.length < 3) {
      return;
    }
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&key=${GOOGLE_API_KEY}`;
    axios.get(url)
      .then((response) => {
        console.log("response", response.data);
        this.updateResults(response.data.predictions);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onLocationSelect = (placeId) => {
    this.setState({
      placeId
    });
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${GOOGLE_API_KEY}`;
    axios.get(url)
      .then(({data}) => {
        const {
          geometry,
          formattedAddress
        } = data.result;
        const {location} = geometry;
        this.setState({
          lat: location.lat,
          lng: location.lng,
          description: formattedAddress
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSubmit = (event) => {
    const {
      isEdit,
      editMarker,
      addMarker
    } = this.props;
    const {
      lat,
      lng,
      description,
      placeId,
      initialPlaceId
    } = this.state;
    const payload = {
      lat,
      lng,
      description,
      placeId
    };

    if (isEdit) {
      editMarker(payload, initialPlaceId);
    } else {
      addMarker(payload);
    }
    event.preventDefault();
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  updateResults = (data) => {
    const searchResults = [];
    data.map((datum) => {
      const {
        description,
        placeId
      } = datum;
      searchResults.push({
        description,
        placeId
      });
    });
    this.setState({searchResults});
  }

  render () {
    const {
      description,
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
        description={description}
        lat={lat}
        lng={lng}
        searchResults={searchResults}
        showModal={showModal}
        toggleModal={toggleModal}
        onLocationChange={this.onLocationChange}
        onLocationSelect={this.onLocationSelect}
        onNameChange={this.onNameChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMarker: (payload) => {
    dispatch(addMarker(payload));
  },
  editMarker: (payload, initialPlaceId) => {
    dispatch(editMarker(payload, initialPlaceId));
  }
});


AddEditMarkerContainer.defaultProps = defaultProps;
AddEditMarkerContainer.propTypes = propTypes;

const withStore = connect(null, mapDispatchToProps);


export default withStore(AddEditMarkerContainer);
