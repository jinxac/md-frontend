import React from "react";
import {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import MockAdapter from "axios-mock-adapter";
import {deleteMarker} from "data/markers/actions";
import axios from "api/axios";
import DeleteContainer from "../Delete.container";


describe("<DeleteContainer />", () => {
  const mockStore = configureStore();
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore([
      {
        id: 1
      }
    ]);
    wrapper = mount(<Provider store={store}><DeleteContainer showModal marker={{id: 22}} /></Provider>);
  });

  it("Should render without crash", () => {
    expect(wrapper.length).toEqual(1);
    expect(typeof wrapper.find("DeleteContainer").prop("deleteMarker")).toEqual("function");
  });

  it("Should have delete marker function", () => {
    expect(typeof wrapper.find("DeleteContainer").prop("deleteMarker")).toEqual("function");
  });

  it("Should toggle Modal", () => {
    // const wrapper = mount(<DeleteContainer marker={ .{}} />);
    const instance = wrapper.find("DeleteContainer").instance();
    expect(instance.state.showModal).toBe(false);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(true);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(false);
  });

  it("Should delete", () => {
    const mockAdapter = new MockAdapter(axios);
    mockAdapter.onDelete("http://localhost:8080/api/v0/markers/22").reply(() => {
      const payload = {
        id: 1
      };
      store.dispatch(deleteMarker(payload));
      const actions = store.getActions();
      const expectedPayload = {type: "DELETE_MARKER", payload};
      expect(actions).toEqual([expectedPayload]);
      return [200, {
        message: "success!!!"
      }];
    });
    const instance = wrapper.find("DeleteContainer").instance();
    instance.onDelete();
  });
});
