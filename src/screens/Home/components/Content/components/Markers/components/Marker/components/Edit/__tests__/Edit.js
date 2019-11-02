import React from "react";
import {shallow} from "enzyme";
import Edit from "../Edit";

describe("<Edit />", () => {
  it("should render without crash", () => {
    const toggleModal = jest.fn();
    const wrapper = shallow(
      <Edit
        marker={{}}
        showModal={false}
        toggleModal={toggleModal}
      />
    );
    expect(wrapper.children().length).toEqual(1);
  });

  it("should call toggle modal", () => {
    const toggleModal = jest.fn();
    const wrapper = shallow(
      <Edit
        marker={{}}
        showModal={false}
        toggleModal={toggleModal}
      />
    );
    const firstButton = wrapper.find("Button");
    firstButton.simulate("click");
    expect(toggleModal).toHaveBeenCalledTimes(1);
  });

  it("should render with modal", () => {
    const toggleModal = jest.fn();
    const wrapper = shallow(
      <Edit
        marker={{}}
        showModal
        toggleModal={toggleModal}
      />
    );
    expect(wrapper.children().length).toEqual(2);
  });
});
