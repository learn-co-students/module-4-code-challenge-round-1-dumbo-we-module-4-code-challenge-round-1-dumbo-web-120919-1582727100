import React from 'react';

class SearchBar extends React.Component {

  helpWithChange = e => {
    // console.log(e.target.value)
    this.props.handleSearchTerm(e.target.value)
  }

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" value={this.props.searchTerm} onChange={this.helpWithChange}/>
      </div>
    );
  }

}

export default SearchBar;
