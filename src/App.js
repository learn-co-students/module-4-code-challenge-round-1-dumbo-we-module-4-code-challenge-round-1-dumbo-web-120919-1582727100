import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteersArray: [],
    searchTerm: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then(data => {
        this.setState({
          planeteersArray: data
        })
      })
  }

  
  
  handleSearch = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  addNewPlaneteer = (newPlaneteer) => {
    // take in array object from generated random planeteer
    // pass the action up to app from random button component after click event on random button
    // this data needs to be passed down from APP to render on the page
    fetch("http://localhost:4000/planeteers", {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(newPlaneteer)
    })
      .then(r => r.json())
      .then(newPlaneteer => {
        this.setState({
          planeteersArray: [...this.state.planeteersArray, newPlaneteer]
        })
      })
    // running out of time to complete!!! I could've figured this out, got stuck on an earlier bug :(
  }

  handleClick = (id) => {
    let updatedArray = this.state.planeteersArray.filter(planObj => (planObj.id !== id))

      this.setState({
        planeteersArray: updatedArray
      })
    
  }
  
  
  render(){

    let filteredArray = this.state.planeteersArray.filter( planObj => {
      return planObj.name.toLowerCase().includes(this.state.searchTerm)
    })
    
    
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <RandomButton addNewPlaneteer={this.addNewPlaneteer} planeteersArray={this.state.planeteersArray}/>
        <PlaneteersContainer planeteersArray={filteredArray} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default App;
