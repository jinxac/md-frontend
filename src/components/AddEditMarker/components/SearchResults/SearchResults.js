import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onLocationSelect: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};


const SearchResults = ({
  searchResults,
  onLocationSelect
}) => {
  const content = [];
  for (const searchResult of searchResults) {
    const {
      description,
      placeId
    }  = searchResult;
    content.push(
      <div onClick={() => onLocationSelect(placeId)}>
        <span>{description}</span>
      </div>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

SearchResults.propTypes = propTypes;

export default SearchResults;

