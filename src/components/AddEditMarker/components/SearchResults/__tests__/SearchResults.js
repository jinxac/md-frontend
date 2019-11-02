import React from "react";
import {shallow} from "enzyme";
import SearchResults from "../SearchResults";

describe("<SearchResults />", () => {
  it("should render with crashing", () => {
    const onLocationSelect = jest.fn();
    const closeSearchResults = jest.fn();
    const props = {
      searchResults: [],
      onLocationSelect,
      closeSearchResults
    };
    const wrapper = shallow(<SearchResults {...props} />);
    expect(wrapper.length).toEqual(1);
  });
  it("should render content", () => {
    const onLocationSelect = jest.fn();
    const closeSearchResults = jest.fn();
    const searchResults = [
      {
        id: 1,
        description: "test-1",
        placeId: "place-1"
      },
      {
        id: 2,
        description: "test-2",
        placeId: "place-2"
      }
    ];
    const props = {
      searchResults,
      onLocationSelect,
      closeSearchResults
    };
    const wrapper = shallow(<SearchResults {...props} />);
    expect(wrapper.children().length).toEqual(2);
  });
  it("should call execute callbacks", () => {
    const onLocationSelect = jest.fn();
    const closeSearchResults = jest.fn();
    const searchResults = [
      {
        id: 1,
        description: "test-1",
        placeId: "place-1"
      },
      {
        id: 2,
        description: "test-2",
        placeId: "place-2"
      }
    ];
    const props = {
      searchResults,
      onLocationSelect,
      closeSearchResults
    };
    const wrapper = shallow(<SearchResults {...props} />);
    expect(wrapper.children().length).toEqual(2);
    const firstChild = wrapper.children().at(0);
    firstChild.simulate("click");
    expect(onLocationSelect).toHaveBeenCalledTimes(1);
    expect(closeSearchResults).toHaveBeenCalledTimes(1);
  });
});

