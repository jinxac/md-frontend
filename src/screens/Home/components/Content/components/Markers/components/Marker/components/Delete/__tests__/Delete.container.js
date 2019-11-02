import React from "react";
import {shallow} from "enzyme";
// import {Provider} from "react-redux";
// import configureStore from "redux-mock-store";

import MockAdapter from "axios-mock-adapter";
// import {deleteMarker} from "data/markers/actions";
import axios from "api/axios";
import {DeleteContainer} from "../Delete.container";


describe("<DeleteContainer />", () => {
  const deleteMarker = jest.fn();
  it("Should render without crash", () => {
    const wrapper = shallow(
      <DeleteContainer
        deleteMarker={deleteMarker}
        marker={{}}
      />
    );
    expect(wrapper.length).toEqual(1);
  });


  it("Should toggle Modal", () => {
    // const wrapper = mount(<DeleteContainer marker={ .{}} />);
    const wrapper = shallow(
      <DeleteContainer
        deleteMarker={deleteMarker}
        marker={{}}
      />
    );
    const instance = wrapper.instance();
    expect(instance.state.showModal).toBe(false);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(true);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(false);
  });

  it("Should delete", async () => {
    const mockAdapter = new MockAdapter(axios);
    const wrapper = shallow(
      <DeleteContainer
        deleteMarker={deleteMarker}
        marker={{id: 22}}
      />
    );

    const flushPromises = () => new Promise(resolve => setTimeout(resolve));
    mockAdapter.onDelete("http://localhost:8080/api/v0/markers/22").reply(() => {
      return [200, {
        message: "success!!!"
      }];
    });
    const instance = wrapper.instance();
    instance.onDelete();

    await flushPromises();

    expect(deleteMarker).toHaveBeenCalled();
  });
});
