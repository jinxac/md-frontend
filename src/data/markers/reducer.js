const initialState = [
  {
    description: "Test address 1",
    placeId: "ChIJtYuu0V25j4ARwu5e4wwRYgE",
    lat: 37.4267861,
    lng: -122.0806032
  }
];

const markers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MARKER":
      return [
        ...state,
        action.payload
      ];
    case "DELETE_MARKER":
      return state.filter((el) => {
        return el.placeId !== action.payload.placeId;
      });
    case "EDIT_MARKER":
      const nextState = [];
      for (const [index, datum] of state.entries()) {
        if (datum.placeId === action.initialPlaceId) {
          nextState[index] = action.payload;
        } else {
          nextState.push(datum);
        }
      }
      return nextState;
    default:
      return state;
  }
};

export default markers;
