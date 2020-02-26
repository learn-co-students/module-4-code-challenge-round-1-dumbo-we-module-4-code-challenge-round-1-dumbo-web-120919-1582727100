import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers: [],
    displayPlaneteers: [],
    searchTerm: ""
  }

  //on mount save planteers and displayPlanateers
  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
      .then(res => res.json())
      .then(planData => {
        this.setState({
          planeteers: planData,
          displayPlaneteers: planData
        })
      })
  }
  //change state when something is typed into search bar
  onSearchChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    this.filterPlaneteers(e.target.value)
  }
  //filter displayed planeteers based on the enetered search terms
  filterPlaneteers = searchTerm => {
    let tempDisplay = this.state.planeteers.filter(planeteer => {
      return (planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) || planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    this.setState({
      displayPlaneteers: tempDisplay
    })
  }
  //add Planeteer to frontend and backend
  addPlaneteer = planeteer => {
    this.addPlaneteerToBack(planeteer)
      .then(this.addPlaneteerToFront(planeteer))
  }
  //add Planeteer to backend
  addPlaneteerToBack = planeteer => {
    return fetch('http://localhost:4000/planeteers', {
      'method': 'POST',
      'headers': {
        'content-type': 'application/json'
      },
      'body': JSON.stringify(planeteer)
    })
    .then(res => res.json())
  }
  //add Planateer to frontend and display
  addPlaneteerToFront = planeteer => {
    this.setState({
      planeteers: [...this.state.planeteers, planeteer],
      displayPlaneteers: [...this.state.planeteers, planeteer],
      searchTerm: ""
    })
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar onSearchChange={this.onSearchChange} searchTerm={this.state.searchTerm} />
        <RandomButton addPlaneteer={this.addPlaneteer} />
        <PlaneteersContainer displayPlaneteers={this.state.displayPlaneteers} />
      </div>
    );
  }

}

export default App;
