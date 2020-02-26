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
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then(planeteers => {
      this.setState({
        planeteers
      })
    })
  }

  handleSearchChange = (e) => {
    let newSearchTerm = (e.target.value)
    // console.log(newSearchTerm)
    // let filteredArray = this.state.planeteers.filter(planeteer => planeteer.name.includes(newSearchTerm))
    // console.log(filteredArray)
    this.setState({
      // planeteers: filteredArray,
      searchTerm: newSearchTerm
    })
  }

  modifiedPlaneteers = () => {
    let newPlaneteers = this.state.planeteers.filter(planeteer => planeteer.name.includes(this.state.searchTerm) || planeteer.bio.includes(this.state.searchTerm))
    return newPlaneteers
  }

  handleRandomlyAddedBtn = (newPlaneteer) => {
    this.setState({
      planeteers: [...this.state.planeteers, newPlaneteer]
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} 
                   handleSearchChange={(e) => this.handleSearchChange(e)}/>
        <RandomButton handleRandomlyAddedBtn={this.handleRandomlyAddedBtn}/>
        <PlaneteersContainer planeteers={this.modifiedPlaneteers()} />
      </div>
    );
  }

}

export default App;
