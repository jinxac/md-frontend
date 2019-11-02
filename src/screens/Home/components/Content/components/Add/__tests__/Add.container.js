import React from "react";
import {shallow} from "enzyme";
import {AddContainer} from "../Add.container";

describe("<AddContainer />", () => {
  it("should render without crash", () => {
    const wrapper = shallow(<AddContainer />);
    expect(wrapper.prop("showModal")).toEqual(false);
  });
  it("Should toggle Modal", () => {
    const wrapper = shallow(<AddContainer />);
    const instance = wrapper.instance();
    expect(instance.state.showModal).toBe(false);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(true);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(false);
  });
});
