import React from 'react';

class SearchBar extends React.Component {

  sendSearchInputToParent = (e) => {
    const input = e.target.value.toLowerCase();
    this.props.handleSearchInput(input);
  }

  render() {
    return (
      <div className="search">
       <input 
       type="text" 
       className="searchTerm" 
       placeholder="Who would you like to search for?"
       value={this.props.searchTerm}
       onChange={this.sendSearchInputToParent}
       />
      </div>
    );
  }

}

export default SearchBar;
