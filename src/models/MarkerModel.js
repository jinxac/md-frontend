import proxyHandler from "./proxy";
import CustomString from "./CustomString";
import CustomNumber from "./CustomNumber";

class MarkerModel {
  constructor (marker) {
    if (!marker) {
      console.warn("Please pass marker object");
      marker = {};
    }

    const {
      id,
      name,
      description,
      placeId,
      formattedAddress,
      lng,
      lat
    } = marker;

    this._lat = CustomNumber.init(lat);
    this._lng = CustomNumber.init(lng);

    this._id = CustomNumber.init(id);
    this._name = CustomString.init(name);
    this._description = CustomString.init(description);
    if (formattedAddress) {
      this._description = CustomString.init(formattedAddress);
    }
    this._placeId = CustomString.init(placeId);
  }

  static init (marker) {
    return new Proxy(new MarkerModel(marker), proxyHandler());
  }

  initPlace (geometry) {
    if (!geometry) {
      geometry = {};
    }
    let {location} = geometry;
    if (!location) {
      location = {};
    }

    const {
      lat,
      lng
    } = location;

    this._lat = CustomNumber.init(lat);
    this._lng = CustomNumber.init(lng);
  }
}

export default MarkerModel;
