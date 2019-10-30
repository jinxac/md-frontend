export const ADD_MARKER = "ADD_MARKER";
export const EDIT_MARKER = "EDIT_MARKER";
export const DELETE_MARKER = "DELETE_MARKER";

export const addMarker = (payload) => ({
  type: ADD_MARKER,
  payload
});

export const editMarker = (payload, initialPlaceId) => ({
  type: EDIT_MARKER,
  payload,
  initialPlaceId
});

export const deleteMarker = (payload) => ({
  type: DELETE_MARKER,
  payload
});
