import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" onChange={(e) => this.props.handleSearch(e)} value={this.props.searchTerm}/>
      </div>
    );
  }

}
// state is not changing from an empty string :( 

export default SearchBar;
 