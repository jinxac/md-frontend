import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchResults.module.css";

const propTypes = {
  closeSearchResults: PropTypes.func.isRequired,
  onLocationSelect: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};


const SearchResults = ({
  closeSearchResults,
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
      <div
        className={styles.result}
        key={placeId}
        onClick={() => {
          onLocationSelect(placeId);
          closeSearchResults();
        }}
      >
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

