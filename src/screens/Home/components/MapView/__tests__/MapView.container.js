import React from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import MapViewContainer from "../MapView.container";
import configureStore from "redux-mock-store";



describe("Connected map component", () => {
  const initialState = {
    markers: [
      {
        id: 1,
        name: "test-name-1",
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
    wrapper = mount(<Provider store={store}><MapViewContainer /></Provider>);
  });


  it("Should render without crash", () => {
    expect(
      wrapper
        .find(MapViewContainer)
        .children()
        .prop("markers")
    )
      .toEqual(initialState.markers);
  });
});
