import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input onChange={this.props.onChange} type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
      </div>
    );
  }

}

export default SearchBar;
