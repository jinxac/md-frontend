import React from "react";
import {shallow} from "enzyme";
import {EditContainer} from "../Edit.container";

describe("<EditContainer />", () => {
  it("should render without crash", () => {
    const wrapper = shallow(<EditContainer marker={{}} />);
    expect(wrapper.prop("showModal")).toEqual(false);
  });
  it("Should toggle Modal", () => {
    const wrapper = shallow(<EditContainer marker={{}} />);
    const instance = wrapper.instance();
    expect(instance.state.showModal).toBe(false);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(true);
    instance.toggleModal();
    expect(instance.state.showModal).toBe(false);
  });
});
