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
    // update data on the front end
    this.setState({
      planeteers: [...this.state.planeteers, newPlaneteer]
    })

    // update data on the back end
    let config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlaneteer)
    }

    fetch("http://localhost:4000/planeteers", config)
    .then(r => r.json())
    .then(newObj => {
      console.log(newObj)
    })

  }

  handleCardDelete = (planeteerToDelete) => {
    // delete on the front end
    let planeteersAfterDelete = this.state.planeteers.filter(planeteer => planeteer.id !== planeteerToDelete.id)

    this.setState({
      planeteers: planeteersAfterDelete
    })

    // delete on the back end
    fetch(`http://localhost:4000/planeteers/${planeteerToDelete.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())

  }

  sortByAge = () => {
    let sortedByAge = this.state.planeteers.sort((a, b) => b.born - a.born)

    this.setState({
      planeteers: sortedByAge
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} 
                   handleSearchChange={(e) => this.handleSearchChange(e)}
                   sortByAge={this.sortByAge}/>
        <RandomButton handleRandomlyAddedBtn={this.handleRandomlyAddedBtn}/>
        <PlaneteersContainer planeteers={this.modifiedPlaneteers()} 
                             handleCardDelete={this.handleCardDelete}/>
      </div>
    );
  }

}

export default App;
