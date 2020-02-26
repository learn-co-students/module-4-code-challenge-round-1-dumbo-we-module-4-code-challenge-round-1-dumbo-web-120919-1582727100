import React from 'react';

class SearchBar extends React.Component {

  state = {
    sortAgeChecked: false
  }

  handleCheckBoxChange = (e) => {
    
    this.setState({
      sortAgeChecked: !this.state.sortAgeChecked
    })
    
    
    this.props.sortByAge() 
    
    // if (this.state.sortAgeChecked) {
    //   this.props.sortByAge() 
    // }
    
    console.log(e.target.value)
  }

  render() {
    return (
      <div className="search">
       <input type="text" 
              className="searchTerm" 
              placeholder="Who would you like to search for?"
              value={this.props.searchTerm}
              onChange={this.props.handleSearchChange}/>
      <label htmlFor="age">Sort By Age:</label>
        <input type="checkbox" 
               id="age" 
               name="sortAgeChecked" 
               checked={this.state.sortAgeChecked} 
               onChange={this.handleCheckBoxChange}/>
      </div>
    );
  }

}

export default SearchBar;
