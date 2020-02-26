import React from 'react';

class SearchBar extends React.Component {

  render() {


// console.log(this.props)


    return (
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Who would you like to search for?" 
          onChange={this.props.changeSearchTerm}
          value={this.props.termValue}
        />
      </div>
    );
  }

}

export default SearchBar;
