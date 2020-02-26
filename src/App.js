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
    fetch (`http://localhost:4000/planeteers`)
    .then(r => r.json())
    .then( resp => this.setState({
      planeteers: resp }))
  }

  handleSearchTerm = (string) => {
    this.setState({
      searchTerm: string
    })
  }

  filteredArray = () => {
    let filtArray = this.state.planeteers.filter(planeteer => {
      return planeteer.name.toLowerCase().includes(this.state.searchTerm)
    })
    return filtArray
  }

  addOnePlaneteer = (planeteer) => {
    let newCard = {
      name: planeteer.name,
      fromUSA: planeteer.fromUSA,
      born: planeteer.born,
      quote: planeteer.quote,
      bio: planeteer.bio,
      pictureUrl: planeteer.pictureUrl,
      twitter: planeteer.twitter
    }
    console.log(newCard)

    fetch(`http://localhost:4000/planeteers`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCard)
    })
    .then(r => r.json())
    .then(newPlaneteer => {let newArray = [...this.state.planeteers, newPlaneteer]
      this.setState({ planeteers: newArray})
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearchTerm={this.handleSearchTerm}/>
        <RandomButton addOnePlaneteer={this.addOnePlaneteer}/>
        <PlaneteersContainer planeteers={this.filteredArray()}/>
      </div>
    );
  }

}

export default App;
