import React from "react";
import {shallow} from "enzyme";
import Home from "../Home";

describe("<Home />", () => {
  it("should render with crashing", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.children().length).toEqual(2);
  });
});

