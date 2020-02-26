import React from 'react';

class SearchBar extends React.Component {
  state ={
    checked: false
  }

  handleCheck = () => {
    (this.state.checked ?
    this.props.unsort() :
    this.props.sort())
    console.log(this.state.checked)
    this.setState(prevState => ({
      checked: !prevState.checked
    }))
  }

  render() {
    return (
      <div className="search">
        <input type="text"
          name="searchTerm"
          value={this.props.searchTerm}
          className="searchTerm"
          placeholder="Who would you like to search for?"
          onChange={this.props.onSearchChange} />
        <label htmlFor="age">Sort By Age:</label>
        <input type="checkbox" id="age" name="age" onClick={this.handleCheck}/>
      </div>
    );
  }

}

export default SearchBar;
