import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import axios from "api/axios";
import {GET_MARKERS} from "api/endPoints";
import {addMarker} from "data/markers/actions";
import CustomArray from "models/CustomArray";
import MarkerModel from "models/MarkerModel";
import CustomToast from "wutils/toast";
import Home from "./Home";

const propTypes = {
  addMarker: PropTypes.func.isRequired
};


class HomeContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount () {
    const {addMarker} = this.props;
    axios.get(GET_MARKERS)
      .then(({data}) => {
        data = CustomArray.init(data);
        for (const datum of data) {
          const markerModel = MarkerModel.init(datum);
          addMarker(markerModel);
        }
        this.setState({
          loading: false
        });
      })
      .catch((error) => {
        if (!error.response) {
          CustomToast.errorByMessage("Server is not responding.");
        }
      });
  }

  render () {
    const {loading} = this.state;
    if (loading) {
      return null;
    }
    return (
      <Home />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMarker: (payload) => {
    dispatch(addMarker(payload));
  }
});

HomeContainer.propTypes = propTypes;

const withStore = connect(null, mapDispatchToProps);

export default withStore(HomeContainer);


