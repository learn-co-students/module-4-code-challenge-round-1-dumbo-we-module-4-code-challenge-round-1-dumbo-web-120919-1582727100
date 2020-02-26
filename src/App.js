import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

const API = `http://localhost:4000/planeteers`
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      planeteers: [],
      searchTerm: "",
      filteredArray: []
    }
  }

  changeSearchTerm = (e) => {
    // console.log(this.state.searchTerm)
    this.setState({ searchTerm: e.target.value })
    // this.filterBasedOnSearch(this.state.searchTerm)
    
  }

  filterBasedOnSearch = (searchTerm) => {

    let jack = this.state.planeteers.forEach((product) => {
      if (product.name.indexOf(searchTerm) === -1) {
        return;
      }

    // searchTerm = this.state.searchTerm
    // console.log(searchTerm)
    // // let filter = this.state.searchTerm
    // let planeteers = this.state.planeteers
    // let filtered = planeteers.filter(term => {
    //   return console.log(term)
    //   // return term === searchTerm
    })
    console.log(jack)
    return this.setState({planeteers: jack})
  }

  



  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(r => this.setState({ planeteers: r }))
      // .then(console.log(this.filterBasedOnSearch()))
  }


  render() {
    console.log(this.state.planeteers)
    return (
      <div>
        <Header />
        <SearchBar changeSearchTerm={(e) => this.changeSearchTerm(e)} termValue={this.state.searchTerm} filterBasedOnSearch={this.filterBasedOnSearch} />
        <RandomButton />
        <PlaneteersContainer planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;
