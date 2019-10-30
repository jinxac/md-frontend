import proxyHandler from "./proxy";
import CustomString from "./CustomString";

class AutoCompleteModel {
  constructor (marker) {
    if (!marker) {
      console.warn("Please pass marker object");
      marker = {};
    }

    this._description = CustomString.init(marker.description);
    this._placeId = CustomString.init(marker.placeId);
  }

  static init (marker) {
    return new Proxy(new AutoCompleteModel(marker), proxyHandler());
  }
}

export default AutoCompleteModel;
