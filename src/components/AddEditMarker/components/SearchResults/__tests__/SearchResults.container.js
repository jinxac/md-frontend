import React from "react";
import {shallow} from "enzyme";
import SearchResultsContainer from "../SearchResults.container";

describe("<SearchResultsContainer />", () => {
  it("should render with crashing", () => {
    const onLocationSelect = jest.fn();
    const closeSearchResults = jest.fn();
    const props = {
      searchResults: [],
      onLocationSelect,
      closeSearchResults
    };
    const wrapper = shallow(<SearchResultsContainer {...props} />);
    expect(wrapper.length).toEqual(1);
  });

  it("should have props", () => {
    const onLocationSelect = jest.fn();
    const closeSearchResults = jest.fn();
    const searchResults = [];
    const props = {
      searchResults: [],
      onLocationSelect,
      closeSearchResults
    };
    const wrapper = shallow(<SearchResultsContainer {...props} />);
    expect(wrapper.children().prop("searchResults")).toEqual(searchResults);
    expect(wrapper.children().prop("onLocationSelect")).toEqual(onLocationSelect);
    expect(wrapper.children().prop("closeSearchResults")).toEqual(closeSearchResults);
  });
});

