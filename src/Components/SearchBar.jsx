import React from 'react';

class SearchBar extends React.Component {

  inputHelper = (e) => {
    this.props.handleSearch(e.target.value)
  }

  render() {

    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" onChange={this.inputHelper} value={this.props.searchTerm}/>
      </div>
    );
  }

}

export default SearchBar;
