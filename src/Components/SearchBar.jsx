import React from 'react';

class SearchBar extends React.Component {

  // *** RENDER *** 
  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Who would you like to search for?"
          value={this.props.searchTerm}
          onChange={(e) => this.props.handleSearchInput(e)} />
        <label htmlFor="age">Sort By Age:</label>
        <input type="checkbox" id="age" name="age" checked={this.props.checked} onChange={this.props.handleSort} />
      </div>
    );
  }

}

export default SearchBar;
