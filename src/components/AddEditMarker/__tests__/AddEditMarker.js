import React from "react";
import {shallow} from "enzyme";
import AddEditMarker from "../AddEditMarker";

describe("<AddEditMarker />", () => {
  const closeSearchResults  = jest.fn();
  const onLocationChange = jest.fn();
  const onLocationSelect = jest.fn();
  const onNameChange = jest.fn();
  const onSubmit = jest.fn();
  const showModal = true;
  const toggleModal = jest.fn();

  it("should render with crashing", () => {
    const searchResults = [];
    const props = {
      showModal,
      toggleModal,
      closeSearchResults,
      onLocationChange,
      onLocationSelect,
      onNameChange,
      onSubmit,
      searchResults
    };
    const wrapper = shallow(
      <AddEditMarker
        {...props}
      />
    );
    expect(wrapper.length).toEqual(1);
  });

  it("should show search content", () => {
    const searchResults = [
      {
        id: 1,
        description: "Test description"
      }
    ];
    const props = {
      showModal,
      toggleModal,
      closeSearchResults,
      onLocationChange,
      onLocationSelect,
      onNameChange,
      onSubmit,
      searchResults
    };
    const wrapper = shallow(
      <AddEditMarker
        {...props}
      />
    );
    expect(wrapper.find("SearchResultsContainer").length).toEqual(1);
  });

  it("should hide search content", () => {
    const searchResults = [];
    const props = {
      showModal,
      toggleModal,
      closeSearchResults,
      onLocationChange,
      onLocationSelect,
      onNameChange,
      onSubmit,
      searchResults
    };
    const wrapper = shallow(
      <AddEditMarker
        {...props}
      />
    );
    expect(wrapper.find("SearchResultsContainer").length).toEqual(0);
  });
});
