import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
      .then(r => r.json())
      .then(planeteerObj => this.setState({planeteers: planeteerObj}))
  }

  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  addOnePlaneteer = (randomPlaneteer) => {
    let newPlaneteer = [...this.state.planeteers, randomPlaneteer]
    this.setState({
      planeteers: newPlaneteer
    })
  }

  render(){

    let filteredArray = this.state.planeteers.filter(planeteer => {
      return planeteer.name.includes(this.state.searchTerm)
    })
    
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm} />
        <RandomButton addOnePlaneteer={this.addOnePlaneteer} />
        <PlaneteersContainer planeteers={filteredArray} />
      </div>
    );
  }

}

export default App;
