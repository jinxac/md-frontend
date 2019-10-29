import React from "react";
import Markers from "./Markers";
import MOCK_MARKERS from "./__mocks__/markers";

// TODO: Read from store
const MarkersContainer = () => {
  return (
    <Markers markers={MOCK_MARKERS} />
  );
};

export default MarkersContainer;
