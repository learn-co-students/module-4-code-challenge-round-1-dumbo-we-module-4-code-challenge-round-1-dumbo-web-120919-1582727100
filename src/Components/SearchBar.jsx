import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
        <input type="text" 
          name="searchTerm" 
          value = {this.props.searchTerm}
          className="searchTerm" 
          placeholder="Who would you like to search for?" 
          onChange={this.props.onSearchChange}/>
      </div>
    );
  }

}

export default SearchBar;
