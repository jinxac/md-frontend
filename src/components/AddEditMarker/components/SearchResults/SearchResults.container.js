import React from "react";
import PropTypes from "prop-types";
import SearchResults from "./SearchResults";


const propTypes = {
  closeSearchResults: PropTypes.func.isRequired,
  onLocationSelect: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
};

class SearchResultsContainer extends React.Component {
  constructor (props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount () {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef (node) {
    this.wrapperRef = node;
  }

  handleClickOutside (event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeSearchResults();
      // alert('You clicked outside of me!');
    }
  }

  render () {
    const {
      closeSearchResults,
      searchResults,
      onLocationSelect
    } = this.props;
    return (
      <div ref={this.setWrapperRef}>
        <SearchResults
          closeSearchResults={closeSearchResults}
          searchResults={searchResults}
          onLocationSelect={onLocationSelect}
        />
      </div>
    );
  }
}

SearchResultsContainer.propTypes = propTypes;

export default SearchResultsContainer;

