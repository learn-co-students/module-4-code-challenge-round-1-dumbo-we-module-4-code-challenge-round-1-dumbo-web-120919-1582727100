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
    searchTerm: "",
    sorted: false
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

  // (***DEPRECATED***) handles receiving a random Planeteer on RandomButton press, and updating the Planeteer arrays in state with the new entry 

  // handleRandomButtonPress = (newPlaneteerObj) => {
  //   this.setState({
  //     allPlaneteers: [...this.state.allPlaneteers, newPlaneteerObj],
  //     shownPlaneteers: [...this.state.shownPlaneteers, newPlaneteerObj]
  //   })
  // }

  // -----------------------------------------------------------

  // a new version of the previous handleRandomButtonPress that also takes into account updating the back-end and rendering the new persisted entry on the page
  handleRandomButtonPress = (newPlaneteerObj) => {
    this.postNewPlaneteerFetch(newPlaneteerObj)
    .then( newPlaneteer => {
      this.setState({
        allPlaneteers: [...this.state.allPlaneteers, newPlaneteer],
        shownPlaneteers: [...this.state.shownPlaneteers, newPlaneteer]
      })
    })
  }
  postNewPlaneteerFetch = (newPlaneteerObj) => {
    return fetch('http://localhost:4000/planeteers', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(newPlaneteerObj)
    })
    .then( r => r.json() )
  }
  // -----------------------------------------------------------

  // handles deleting a Planeteer on dele button click, both in the back-end and on the page in one swoop
  handleDeletePlaneteer = (planeteerObj) => {

    this.deletePlaneteerFetch(planeteerObj.id)

    let allPlaneteersArr = this.state.allPlaneteers.slice()
    let newAllPlaneteersArr = allPlaneteersArr.filter( planeteer => planeteer.id !== planeteerObj.id )

    this.setState({
      allPlaneteers: newAllPlaneteersArr,
      shownPlaneteers: newAllPlaneteersArr
    })
  }
  deletePlaneteerFetch = (planeteerID) => {
    fetch(`http://localhost:4000/planeteers/${planeteerID}`, {
      method: "DELETE",
    })
  }
  // -----------------------------------------------------------

  // handles sorting the displayed Planeteers by age
  handleSort = () => {
    if (this.state.sorted === false) {
    let planeteersToSort = this.state.shownPlaneteers.slice()
    let sortedPlaneteers = planeteersToSort.sort( (a, b) => b.born - a.born )
    this.setState({
      shownPlaneteers: sortedPlaneteers,
      sorted: !this.state.sorted 
    })
    } else if (this.state.sorted === true) {
      this.setState({
        shownPlaneteers: this.state.allPlaneteers,
        sorted: !this.state.sorted
      })
    }
      // I ran out of time here on cleaning up the sort so that I could make it switch back and forth without breaking what's being rendered by the sort functionality, although I know what the next steps would be. I can explain that in our meeting!
  }

  // *** RENDER *** 
  render(){
    return (
      <div>
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleSearchInput={this.handleSearchInput}
          checked={this.state.sorted}
          handleSort={this.handleSort}
        />
        <RandomButton
          handleRandomButtonPress={this.handleRandomButtonPress}
        />
        <PlaneteersContainer
          shownPlaneteers={this.state.shownPlaneteers}
          handleDeletePlaneteer={this.handleDeletePlaneteer}
        />
      </div>
    );
  }

}

export default App;
