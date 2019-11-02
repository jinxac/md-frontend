import React from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import configureStore from "redux-mock-store";
import MarkersContainer from "../Markers.container";



describe("<MarkersContainer />", () => {
  const initialState = {
    markers: [
      {
        id: 1,
        name: "test-name-1",
        placeId: "test-place-id-1",
        description: "test-description-1",
        lat: -300.212,
        lng: 900.12321
      }
    ]
  };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><MarkersContainer /></Provider>);
  });


  it("Should render without crash", () => {
    expect(
      wrapper
        .find(MarkersContainer)
        .children()
        .prop("markers")
    )
      .toEqual(initialState.markers);
  });
});
