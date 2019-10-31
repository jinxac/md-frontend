import React from "react";
import {shallow} from "enzyme";
import Button from "../Button";

describe("<Button />", () => {
  it("should render with crashing", () => {
    const description = "test";
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        description={description}
        onClick={onClick}
      />
    );
    expect(wrapper.contains(description)).toEqual(true);
  });

  it("should render primary button", () => {
    const description = "test";
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        isPrimary
        description={description}
        onClick={onClick}
      />
    );
    expect(wrapper.prop("className")).toEqual("button primary");
  });

  it("should render default button", () => {
    const description = "test";
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        description={description}
        onClick={onClick}
      />
    );
    expect(wrapper.prop("className")).toEqual("button");
  });

  it("should render default button", () => {
    const description = "test";
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        description={description}
        onClick={onClick}
      />
    );
    expect(wrapper.prop("className")).toEqual("button");
  });

  it("should click", () => {
    const description = "test";
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button
        description={description}
        onClick={onClick}
      />
    );
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

