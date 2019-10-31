import env from "env";

const AUTOCOMPLETE_END_POINT = `${env.MAPS_END_POINT}autocomplete/json?input={}&key=${env.MAPS_API_KEY}`;
const PLACE_END_POINT = `${env.MAPS_END_POINT}details/json?placeid={}&key=${env.MAPS_API_KEY}`;
const GET_MARKERS = `${env.MARKERS_END_POINT}`;
const POST_MARKER = `${env.MARKERS_END_POINT}`;
const UPDATE_MARKER = `${env.MARKERS_END_POINT}/{}`;
const DELETE_MARKER = `${env.MARKERS_END_POINT}/{}`;


export {
  AUTOCOMPLETE_END_POINT,
  PLACE_END_POINT,
  GET_MARKERS,
  POST_MARKER,
  UPDATE_MARKER,
  DELETE_MARKER
};
