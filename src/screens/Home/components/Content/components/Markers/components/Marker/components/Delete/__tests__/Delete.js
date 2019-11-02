import React from "react";
import {shallow} from "enzyme";
import Delete from "../Delete";


describe("<Delete />", () => {
  const onDelete = jest.fn();
  const toggleModal = jest.fn();
  it("should render without crashing", () => {
    const wrapper = shallow(
      <Delete
        marker={{}}
        showModal={false}
        toggleModal={toggleModal}
        onDelete={onDelete}
      />
    );
    expect(wrapper.length).toEqual(1);
  });
  it("should render modal", () => {
    const wrapper = shallow(
      <Delete
        showModal
        marker={{}}
        toggleModal={toggleModal}
        onDelete={onDelete}
      />
    );
    expect(wrapper.children().length).toEqual(2);
  });
  it("should check prop functions", () => {
    const wrapper = shallow(
      <Delete
        showModal
        marker={{}}
        toggleModal={toggleModal}
        onDelete={onDelete}
      />
    );
    expect(
      wrapper
        .find("Button")
        .first()
        .prop("onClick")
    ).toEqual(toggleModal);
    expect(
      wrapper
        .find("Button")
        .at(1)
        .prop("onClick")
    ).toEqual(onDelete);
    expect(
      wrapper
        .find("Button")
        .at(2)
        .prop("onClick")
    ).toEqual(toggleModal);
  });
});
