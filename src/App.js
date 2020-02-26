import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    filter: ""
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar onChange={(e) => this.setState({ filter: e.target.value })} />
        <RandomButton/>
        <PlaneteersContainer filter={this.state.filter}/>
      </div>
    );
  }

}

export default App;
