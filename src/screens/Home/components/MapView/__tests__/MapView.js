import React from "react";
import {shallow} from "enzyme";
import MapView from "../MapView";


describe("<MapView />", () => {
  it("should render without crashing", () => {
    const markers = [
      {
        id: 1,
        name: "test-name-1",
        description: "test-description-1",
        placeId: "test-place-id-1",
        lat: -300.212,
        lng: 900.12321
      }
    ];
    const wrapper = shallow(
      <MapView
        google={{}}
        markers={markers}
      />
    );
    expect(wrapper.length).toEqual(1);
  });
  it("should render correct number of markers", () => {
    const markers = [
      {
        id: 1,
        name: "test-name-1",
        description: "test-description-1",
        placeId: "test-place-id-1",
        lat: -300.212,
        lng: 900.12321
      }
    ];
    const wrapper = shallow(
      <MapView
        google={{}}
        markers={markers}
      />
    );
    expect(wrapper.children().length).toEqual(1);
    const newMarker = {
      id: 2,
      name: "test-name-2",
      description: "test-description-2",
      placeId: "test-place-id-2",
      lat: -300.212,
      lng: 900.12321
    };
    markers.push(newMarker);
    const wrapper1 = shallow(
      <MapView
        google={{}}
        markers={markers}
      />
    );
    expect(wrapper1.children().length).toEqual(2);
  });
});
