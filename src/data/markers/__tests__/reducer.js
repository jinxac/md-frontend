import markers from "../reducer";
import {
  ADD_MARKER, EDIT_MARKER, DELETE_MARKER
} from "../actions";

describe("markers reducer", () => {
  it("should return the initial state", () => {
    expect(markers(undefined, {})).toEqual([]);
  });

  it("should add marker", () => {
    expect(
      markers(undefined, {
        type: ADD_MARKER,
        payload: {
          description: "Test address 1",
          placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
          lat: 37.4267861,
          lng: -122.0806032
        }
      })
    ).toEqual([
      {
        description: "Test address 1",
        placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
        lat: 37.4267861,
        lng: -122.0806032
      }
    ]);
  });


  it("should edit marker", () => {
    expect(
      markers([
        {
          description: "Test address 1",
          placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
          lat: 37.4267861,
          lng: -122.0806032
        }
      ], {
        type: EDIT_MARKER,
        payload: {
          description: "Test address 2",
          placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgG",
          lat: 37.4267862,
          lng: -122.0806032
        },
        initialPlaceId: "ChIJtYuu0V25j4ARwu5e4wwRYgE"
      })
    ).toEqual([
      {
        description: "Test address 2",
        placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgG",
        lat: 37.4267862,
        lng: -122.0806032
      }
    ]);
  });

  it("should delete marker", () => {
    expect(
      markers([
        {
          description: "Test address 1",
          placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
          lat: 37.4267861,
          lng: -122.0806032
        }
      ], {
        type: DELETE_MARKER,
        payload: {
          description: "Test address 1",
          placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
          lat: 37.4267861,
          lng: -122.0806032
        }
      })
    ).toEqual([]);
  });
});
