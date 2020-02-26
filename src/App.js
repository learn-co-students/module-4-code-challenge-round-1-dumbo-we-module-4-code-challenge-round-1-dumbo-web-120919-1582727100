import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    allPlaneteers: [],
    shownPlaneteers: [],
    searchTerm: ""
  }

  // initial fetch of all Planeteers from the back-end on initial App mount
  componentDidMount() {
    this.initialPlaneteerFetch()
  }
  initialPlaneteerFetch = () => {
    fetch('http://localhost:4000/planeteers')
    .then( r => r.json() )
    .then( planeteers => {
      this.setState({
        allPlaneteers: planeteers,
        shownPlaneteers: planeteers
      })
    })
  }
  // -----------------------------------------------------------

  // handles input given to the search bar, updating the state and filtering the shown Planeteers accordingly
  handleSearchInput = (e) => {
    let newSearchTerm = e.target.value.toLowerCase()
    let allPlaneteersArr = this.state.allPlaneteers.slice()
    
    let filteredByName = allPlaneteersArr.filter( planeteer => planeteer.name.toLowerCase().includes(newSearchTerm))
    let filteredByBio = allPlaneteersArr.filter( planeteer => planeteer.bio.toLowerCase().includes(newSearchTerm))

    // combines the two filtered arrays, then removes duplicates with Set
    let combinedPlaneteers = [...filteredByName, ...filteredByBio]
    combinedPlaneteers = [...new Set(combinedPlaneteers)]

    this.setState({
      shownPlaneteers: combinedPlaneteers,
      searchTerm: newSearchTerm
    })
  }
  // -----------------------------------------------------------

  // handles receiving a random Planeteer on RandomButton press, and updating the Planeteer arrays in state with the new entry
  handleRandomButtonPress = (newPlaneteerObj) => {
    this.setState({
      allPlaneteers: [...this.state.allPlaneteers, newPlaneteerObj],
      shownPlaneteers: [...this.state.shownPlaneteers, newPlaneteerObj]
    })
  }
  // -----------------------------------------------------------

  render(){
    return (
      <div>
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleSearchInput={this.handleSearchInput}
        />
        <RandomButton
          handleRandomButtonPress={this.handleRandomButtonPress}
        />
        <PlaneteersContainer
          shownPlaneteers={this.state.shownPlaneteers}
        />
      </div>
    );
  }

}

export default App;
