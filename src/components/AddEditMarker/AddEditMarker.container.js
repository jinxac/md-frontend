import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
  addMarker,
  editMarker
} from "data/markers/actions";
import AddEditMarker from "./AddEditMarker";
import axios from "api/axios";
import MarkerModel from "models/MarkerModel";
import {
  AUTOCOMPLETE_END_POINT,
  PLACE_END_POINT,
  POST_MARKER,
  UPDATE_MARKER
} from "api/endPoints";

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
    searchResults: [],
    name: "",
    lat: 0,
    lng: 0,
    description: "",
    placeId: ""
  }


  componentDidMount () {
    const {marker} = this.props;
    this.setState({
      name: marker.name,
      lat: marker.lat,
      lng: marker.lng,
      description: marker.description,
      placeId: marker.placeId
    });
  }

  onLocationChange  = (event) => {
    this.setState({description: event.target.value});
    const searchText = event.target.value;
    if (searchText.length < 3) {
      return;
    }

    const url = AUTOCOMPLETE_END_POINT.format(searchText);
    axios.get(url)
      .then((response) => {
        this.updateResults(response.data.predictions);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  onLocationSelect = (placeId) => {
    console.log("location selected", placeId);
    this.setState({
      placeId
    });
    const url = PLACE_END_POINT.format(placeId);
    axios.get(url)
      .then(({data}) => {
        const markerModel = MarkerModel.init(data.result);
        markerModel.initPlace(data.result.geometry);
        this.setState({
          lat: markerModel.lat,
          lng: markerModel.lng,
          description: markerModel.description,
          placeId: markerModel.placeId
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const {
      isEdit,
      editMarker,
      addMarker,
      marker
    } = this.props;

    const {
      name,
      lat,
      lng,
      description,
      placeId
    } = this.state;


    const payload = {
      name,
      lat,
      lng,
      description,
      placeId
    };


    if (isEdit) {
      const url = UPDATE_MARKER.format(marker.id);
      payload.id = marker.id;
      axios.put(url, payload)
        .then(({data}) => {
          const markerModel = MarkerModel.init(data);
          editMarker(markerModel, marker.placeId);
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      axios.post(POST_MARKER, payload)
        .then(({data}) => {
          const markerModel = MarkerModel.init(data);
          addMarker(markerModel);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    this.props.toggleModal();
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  closeSearchResults = () => {
    this.setState({
      searchResults: []
    });
  }

  updateResults = (data) => {
    const searchResults = [];
    for (const datum of data) {
      const markerModel = MarkerModel.init(datum);
      const {
        description,
        placeId
      } = markerModel;


      searchResults.push({
        description,
        placeId
      });
    }
    this.setState({searchResults});
  }

  render () {
    const {
      description,
      searchResults,
      lat,
      lng,
      name
    } = this.state;

    const {
      showModal,
      toggleModal
    } = this.props;

    return (
      <AddEditMarker
        closeSearchResults={this.closeSearchResults}
        description={description}
        lat={lat}
        lng={lng}
        name={name}
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
