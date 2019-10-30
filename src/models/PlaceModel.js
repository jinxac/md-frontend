import proxyHandler from "./proxy";
import CustomString from "./CustomString";
import CustomNumber from "./CustomNumber";

class PlaceModel {
  constructor (marker) {
    if (!marker) {
      console.warn("Please pass marker object");
      marker = {};
    }

    console.log("data", marker);

    const {
      description,
      placeId,
      formattedAddress
    } = marker;

    this._description = CustomString.init(description);
    if (formattedAddress) {
      this._description = CustomString.init(formattedAddress);
    }
    this._placeId = CustomString.init(placeId);

    let {geometry} = marker;


    if (!geometry) {
      console.warn("Please pass geometry object");
      geometry = {};
    }

    let {location} = geometry;
    if (!location) {
      console.warn("Please pass location object");
      location = {};
    }

    const {
      lat,
      lng
    } = location;

    this._lat = CustomNumber.init(lat);
    this._lng = CustomNumber.init(lng);
  }

  static init (marker) {
    return new Proxy(new PlaceModel(marker), proxyHandler());
  }
}

export default PlaceModel;
