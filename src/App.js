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


  handleSearch = (e) => {
    let filteredPeeps = this.state.shownPlaneteers.includes(e => e.name || e.bio === e.target.value).toLowerCase()
    this.setState({
      searchTerm: e.target.value,
      shownPlaneteers: filteredPeeps
    })
  }


  componentDidMount = () => {
    fetch('http://localhost:4000/planeteers')
    .then(r => r.json())
    .then(planeteers => 
      this.setState({
        allPlaneteers: planeteers,
        shownPlaneteers: planeteers
      }))
  }


  addRandomPlaneteer(randomPlaneteer){

    fetch(`http://localhost:4000/planeteers`, {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(randomPlaneteer)
    })
    .then(r => r.json())
    .then(newPlaneteer =>
      this.setState({
        shownPlaneteers: [...this.state.shownPlaneteers, newPlaneteer]
      }))
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar onChange={this.handleSearch} searchTerm={this.state.searchTerm}/>
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer}/>
        <PlaneteersContainer shownPlaneteers={this.state.shownPlaneteers} />
      </div>
    );
  }

}

export default App;
