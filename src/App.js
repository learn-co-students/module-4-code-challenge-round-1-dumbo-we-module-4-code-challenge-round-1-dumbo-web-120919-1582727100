import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const API = 'http://localhost:4000'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: '',
    randomPlaneteer: false
  }

  componentDidMount() {
    fetch(API + '/planeteers')
      .then((r) => r.json())
      .then((planeteersData) =>
        this.setState({
          planeteers: planeteersData
        })
      )
  }

  handleSearchInput = (input) => {
    this.setState({
      searchTerm: input
    })
  }

  handleRandomButtonClick = (randomPlaneteer) => {
    this.persistRandomPlaneteer(randomPlaneteer)
    this.setState({
      randomPlaneteer: randomPlaneteer
    })
  }

  persistRandomPlaneteer = (randomPlaneteer => {
    fetch(API + '/planeteers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(randomPlaneteer)
    })
  })

  // didn't finish this deliverable! but it doesn't break it! only console.logs the result
  handleDeletedPlaneteer = (deletedPlaneteer) => {
    let planeteers = this.state.planeteers.slice();
    const idx = planeteers.findIndex((planeteer) => planeteer === deletedPlaneteer)
    planeteers.splice(idx, 1)
    console.log(planeteers)
  }

  planeteersToRender = () => {
    const currentInput = this.state.searchTerm
    return this.state.planeteers.filter((planeteer) => {
      let name = planeteer.name.toLowerCase();
      let bio = planeteer.bio.toLowerCase();
      return name.includes(currentInput) || bio.includes(currentInput)})
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar 
        searchTerm={this.state.searchTerm} 
        handleSearchInput={this.handleSearchInput}
        />
        <RandomButton
        handleRandomButtonClick={this.handleRandomButtonClick}
        />
        <PlaneteersContainer 
        // if the random button is pressed, add the random planeteer to the planeteers array
        planeteers={this.state.randomPlaneteer ? [...this.planeteersToRender(), this.state.randomPlaneteer] : this.planeteersToRender()}
        handleDeletedPlaneteer={this.handleDeletedPlaneteer}
        />
      </div>
    );
  }

}

export default App;
