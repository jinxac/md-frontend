import React from "react";
import {shallow, mount} from "enzyme";
import MockAdapter from "axios-mock-adapter";
import axios from "api/axios";
import {AddEditMarkerContainer} from "../AddEditMarker.container";
import {
  AUTOCOMPLETE_END_POINT,
  PLACE_END_POINT,
  UPDATE_MARKER,
  POST_MARKER
} from "api/endPoints";

describe("<AddEditMarkerContainer />", () => {
  const toggleModal = jest.fn();
  const addMarker = jest.fn();
  const editMarker = jest.fn();
  it("should render with crashing", () => {
    const showModal = false;
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker
    };
    const wrapper = shallow(
      <AddEditMarkerContainer
        {...props}
      />
    );
    expect(wrapper.length).toEqual(1);
  });

  it("should get edit marker props in state", () => {
    const showModal = false;
    const marker = {
      name: "test-name",
      lat: -300.323,
      lng: 900.23,
      description: "Test-description",
      placeId: "test-place-id"
    };
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker,
      marker,
      isEdit: true
    };
    const wrapper = shallow(
      <AddEditMarkerContainer
        {...props}
      />
    );
    const instance = wrapper.instance();
    expect(instance.state.name).toEqual(marker.name);
    expect(instance.state.lat).toEqual(marker.lat);
    expect(instance.state.lng).toEqual(marker.lng);
    expect(instance.state.description).toEqual(marker.description);
    expect(instance.state.placeId).toEqual(marker.placeId);
  });

  it("should change name in state", () => {
    const showModal = true;
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker
    };
    const wrapper = mount(
      <AddEditMarkerContainer
        {...props}
      />
    );
    const nameElement = wrapper.find("Input").at(0);
    nameElement.childAt(0).simulate("change", {
      target: {
        value: "My jest name",
        name: "name"
      }
    });
    expect(wrapper.instance().state.name).toEqual("My jest name");
  });


  it("should change address in state", async () => {
    const showModal = true;
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker
    };

    const mockAdapter = new MockAdapter(axios);
    const url = AUTOCOMPLETE_END_POINT.format("Test location");
    const searchResults =  [
      {
        description: "test-description-1",
        placeId: "place-id-1"
      },
      {
        description: "test-description-2",
        placeId: "place-id-2"
      }
    ];
    mockAdapter.onGet(url).reply(() => {
      return [200, {
        predictions: searchResults
      }];
    });

    const wrapper = mount(
      <AddEditMarkerContainer
        {...props}
      />
    );

    const addressElement = wrapper.find("Input").at(1);
    addressElement.childAt(0).simulate("change", {
      target: {
        value: "Test location",
        name: "address"
      }
    });
    wrapper.update();

    const instance = wrapper.instance();
    instance.onLocationChange({
      target: {
        value: "Test location"
      }
    });

    const flushPromises = () => new Promise(resolve => setTimeout(resolve));

    await flushPromises();
    expect(instance.state.searchResults).toEqual(searchResults);
    wrapper.update();
  });

  it("should change location in state", async () => {
    const showModal = true;
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker
    };

    const mockAdapter = new MockAdapter(axios);

    const placeUrl = PLACE_END_POINT.format("place-id-1");

    const location =  {
      result: {
        description: "Test-description",
        placeId: "place-id-1",
        geometry: {
          location: {
            lat: 200.32,
            lng: -900.32
          }
        }
      }
    };

    mockAdapter.onGet(placeUrl).reply(() => {
      return [200, {
        ...location
      }];
    });

    const flushPromises = () => new Promise(resolve => setTimeout(resolve));


    const wrapper = mount(
      <AddEditMarkerContainer
        {...props}
      />
    );

    wrapper.setState({
      searchResults: [
        {
          description: "test-description-1",
          placeId: "place-id-1"
        },
        {
          description: "test-description-2",
          placeId: "place-id-2"
        }
      ]
    });


    const instance = wrapper.instance();
    wrapper.update();


    wrapper.find("SearchResults").prop("onLocationSelect")("place-id-1");
    await flushPromises();
    expect(instance.state.lat).toEqual(location.result.geometry.location.lat);
    expect(instance.state.lng).toEqual(location.result.geometry.location.lng);
    expect(instance.state.description).toEqual(location.result.description);
    expect(instance.state.placeId).toEqual(location.result.placeId);
  });

  it("should edit on submit", async () => {
    const showModal = true;
    const marker =  {
      name: "Test name 1",
      lat: 300,
      lng: 500,
      description: "Test Description 1",
      placeId: "test-place-id",
      id: 1
    };
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker,
      isEdit: true,
      marker
    };

    const mockAdapter = new MockAdapter(axios);
    const updateMarkerUrl = UPDATE_MARKER.format(marker.id);

    mockAdapter.onPut(updateMarkerUrl).reply(() => {
      return [204, {
        ...marker
      }];
    });

    const customState = {
      searchResults: [
        {
          description: "Test Description 1",
          placeId: "place-id-1"
        },
        {
          description: "Test Description 2",
          placeId: "place-id-2"
        }
      ],
      name: "Test name 1",
      placeId: "test-place-id",
      lat: 300,
      long: 500,
      description: "Test Description 1"
    };

    const wrapper = mount(
      <AddEditMarkerContainer
        {...props}
      />
    );

    wrapper.setState(customState);
    wrapper.update();

    const flushPromises = () => new Promise(resolve => setTimeout(resolve));
    const instance = wrapper.instance();
    instance.onSubmit({
      preventDefault: () => {}
    });

    await flushPromises();

    expect(editMarker).toHaveBeenCalled();
  });

  it("should add  on submit", async () => {
    const showModal = true;
    const props = {
      showModal,
      toggleModal,
      editMarker,
      addMarker
    };

    const marker =  {
      name: "Test name 1",
      lat: 300,
      lng: 500,
      description: "Test Description 1",
      placeId: "test-place-id",
      id: 1
    };

    const mockAdapter = new MockAdapter(axios);
    const postMarkerUrl = POST_MARKER;

    mockAdapter.onPost(postMarkerUrl).reply(() => {
      return [201, {
        ...marker
      }];
    });

    const customState = {
      searchResults: [
        {
          description: "Test Description 1",
          placeId: "place-id-1"
        },
        {
          description: "Test Description 2",
          placeId: "place-id-2"
        }
      ],
      name: "Test name 1",
      placeId: "test-place-id",
      lat: 300,
      long: 500,
      description: "Test Description 1"
    };

    const wrapper = mount(
      <AddEditMarkerContainer
        {...props}
      />
    );

    wrapper.setState(customState);
    wrapper.update();

    const flushPromises = () => new Promise(resolve => setTimeout(resolve));
    const instance = wrapper.instance();
    instance.onSubmit({
      preventDefault: () => {}
    });

    await flushPromises();

    expect(addMarker).toHaveBeenCalled();
  });
});

