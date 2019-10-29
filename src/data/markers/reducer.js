const initialState = [
  {
    formattedAddress: "Test address 1",
    geometry: {
      location: {
        lat: 37.4267861,
        lng: -122.0806032
      }
    },
    placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE"
  }
];

const markers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MARKER":
      return [
        ...state,
        {
          formattedAddress: "Winnetka, IL, USA",
          geometry: {
            location: {
              lat: 42.10808340000001,
              lng: -87.735895
            }
          },
          placeId: "ChIJW8Va5TnED4gRY91Ng47qy3Q"
        }
        // action.payload
      ];
    case "DELETE_MARKER":
      // TODO: Handle delete
      return state;
    case "EDIT_MARKER":
      // TODO: Handle edit
      return state;
    default:
      return state;
  }
};

export default markers;
