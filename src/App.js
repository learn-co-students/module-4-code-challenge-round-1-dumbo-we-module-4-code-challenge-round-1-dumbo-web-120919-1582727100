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
        'accept': 'application/json',
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
  //delete planeteer from front and back
  deletePlaneteer = planeteer => {
    this.deletePlaneteerFromBack(planeteer)
    .then(this.deletePlaneteerFromFront(planeteer))
  }
  //delete planeteer from backend
  deletePlaneteerFromBack = planeteer => {
    return fetch(`http://localhost:4000/planeteers/${planeteer.id}`, {
      'method': 'DELETE'
    })
    .then(res => res.json())
    .then(res=>console.log(res))
  }
  //delete planeteer from front end
  deletePlaneteerFromFront = planeteer => {
    let tempPlaneteers = this.state.planeteers.filter(eachPlan =>{
      return !(eachPlan.id === planeteer.id)
    })
    this.setState({
      planeteers: tempPlaneteers,
      displayPlaneteers: tempPlaneteers,
      searchTerm: ""
    })
  }
  //sort planeteers by age
  sort = () => {
    let tempDisplay = this.state.displayPlaneteers
    tempDisplay = tempDisplay.sort(function(a,b){
      return b.born - a.born
    })
    console.log(tempDisplay)
    this.setState({
      displayPlaneteers: tempDisplay
    })
  }
  //unsort planeteers
  unsort = () => {
    let tempDisplay = this.state.displayPlaneteers
    tempDisplay = tempDisplay.sort(function(a,b){
      return a.id - b.id
    })
    console.log(tempDisplay)
    this.setState({
      displayPlaneteers: tempDisplay
    })
  }


  render() {
    return (
      <div>
        <Header />
        <SearchBar onSearchChange={this.onSearchChange} searchTerm={this.state.searchTerm} sort={this.sort} unsort={this.unsort}/>
        <RandomButton addPlaneteer={this.addPlaneteer} />
        <PlaneteersContainer displayPlaneteers={this.state.displayPlaneteers} deletePlaneteer={this.deletePlaneteer}/>
      </div>
    );
  }

}

export default App;
