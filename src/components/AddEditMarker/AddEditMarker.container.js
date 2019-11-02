import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import CustomToast from "wutils/toast";

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
    placeId: "",
    showAddressSpinner: false,
    isInvalidAddress: false
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
    const searchText = event.target.value;
    if (searchText.length < 3) {
      this.setState({
        lat: 0,
        lng: 0,
        description: event.target.value
      });
      return null;
    } else {
      this.setState({description: event.target.value});
    }

    const url = AUTOCOMPLETE_END_POINT.format(searchText);
    this.setState({showAddressSpinner: true});
    axios.get(url)
      .then(({data}) => {
        if (data.status !== "OK") {
          CustomToast.errorMaps(data.errorMessage);
          return null;
        }
        this.updateSearchResults(data.predictions);
      })
      .catch((error) => {
        CustomToast.errorMaps(error.errorMessage);
      })
      .finally(() => {
        this.setState({showAddressSpinner: false});
      });
  }

  onLocationSelect = (placeId) => {
    const url = PLACE_END_POINT.format(placeId);
    axios.get(url)
      .then(({data}) => {
        if (data.status !== "OK") {
          CustomToast.errorMaps(data.errorMessage);
          return null;
        }
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
        CustomToast.errorMaps(error.errorMessage);
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
          CustomToast.success("Marker edited successfully");
          editMarker(markerModel, marker.placeId);
        })
        .catch((error) => {
          CustomToast.error(error);
        });
    } else {
      axios.post(POST_MARKER, payload)
        .then(({data}) => {
          const markerModel = MarkerModel.init(data);
          CustomToast.success("Marker added successfully");
          addMarker(markerModel);
        })
        .catch((error) => {
          CustomToast.error(error);
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

  updateSearchResults = (data) => {
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
    if (searchResults.length === 0) {
      this.setState({isInvalidAddress: true});
    }
    this.setState({searchResults});
  }

  hideInvalidAddress = () => {
    this.setState({
      isInvalidAddress: false,
      description: ""
    });
  }

  isButtonSubmitDisabled = () => {
    const {
      name,
      description,
      lat,
      lng,
      placeId
    } = this.state;
    if (!name || !description || !lat || !lng || !placeId) {
      return true;
    }
    return false;
  }

  render () {
    const {
      description,
      searchResults,
      lat,
      lng,
      name,
      showAddressSpinner,
      isInvalidAddress
    } = this.state;

    const {
      showModal,
      toggleModal,
      isEdit
    } = this.props;

    const isSubmitDisabled = this.isButtonSubmitDisabled();

    return (
      <div>
        <AddEditMarker
          closeSearchResults={this.closeSearchResults}
          description={description}
          hideInvalidAddress={this.hideInvalidAddress}
          isEdit={isEdit}
          isInvalidAddress={isInvalidAddress}
          isSubmitDisabled={isSubmitDisabled}
          lat={lat}
          lng={lng}
          name={name}
          searchResults={searchResults}
          showAddressSpinner={showAddressSpinner}
          showModal={showModal}
          toggleModal={toggleModal}
          onLocationChange={this.onLocationChange}
          onLocationSelect={this.onLocationSelect}
          onNameChange={this.onNameChange}
          onSubmit={this.onSubmit}
        />
        <ToastContainer />
      </div>

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

export {AddEditMarkerContainer};

export default withStore(AddEditMarkerContainer);
