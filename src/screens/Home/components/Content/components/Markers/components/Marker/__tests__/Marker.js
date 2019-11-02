import React from "react";
import {shallow} from "enzyme";
import Marker from "../Marker";


describe("<Marker />", () => {
  it("should render without crashing", () => {
    const marker = {
      id: 1,
      name: "test-name-1",
      description: "test-description-1",
      placeId: "test-place-id-1",
      lat: -300.212,
      lng: 900.12321
    };
    const wrapper = shallow(
      <Marker
        marker={marker}
      />
    );
    expect(wrapper.length).toEqual(1);
  });
  it("should render children correctly", () => {
    const marker = {
      id: 1,
      name: "test-name-1",
      description: "test-description-1",
      placeId: "test-place-id-1",
      lat: -300.212,
      lng: 900.12321
    };
    const wrapper = shallow(
      <Marker
        marker={marker}
      />
    );
    expect(wrapper.children().length).toEqual(5);
    expect(wrapper.children().contains(marker.name));
    expect(wrapper.children().contains(marker.description));
    expect(wrapper.children().contains(marker.lat));
    expect(wrapper.children().contains(marker.lng));
  });
});
