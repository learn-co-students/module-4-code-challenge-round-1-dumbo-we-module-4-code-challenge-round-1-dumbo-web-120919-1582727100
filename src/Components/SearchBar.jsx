import React from 'react';

class SearchBar extends React.Component {

  helpWithChange = (e) => {
    this.props.handleSearchTerm(e.target.value)
  }

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" onChange={this.helpWithChange} value={this.props.searchTerm} />
      </div>
    );
  }

}

export default SearchBar;
