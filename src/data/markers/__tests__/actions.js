import {
  ADD_MARKER,
  DELETE_MARKER,
  EDIT_MARKER,
  addMarker,
  deleteMarker,
  editMarker
} from "../actions";
import { edit } from "external-editor";

describe("actions", () => {
  it("should create an action to add a marker", () => {
    const payload =   {
      description: "Test address 1",
      placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
      lat: 37.4267861,
      lng: -122.0806032
    };
    const expectedAction = {
      type: ADD_MARKER,
      payload
    };
    expect(addMarker(payload)).toEqual(expectedAction);
  });

  it("should create an action to edit a marker", () => {
    const payload =   {
      description: "Test address 2",
      placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
      lat: 37.4267861,
      lng: -122.0806032
    };
    const initialPlaceId = "test-12";
    const expectedAction = {
      type: EDIT_MARKER,
      payload,
      initialPlaceId
    };
    expect(editMarker(payload, initialPlaceId)).toEqual(expectedAction);
  });

  it("should create an action to delete a marker", () => {
    const payload =   {
      placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE"
    };
    const expectedAction = {
      type: DELETE_MARKER,
      payload
    };
    expect(deleteMarker(payload)).toEqual(expectedAction);
  });
});
