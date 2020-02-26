import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'
import { thisExpression } from '@babel/types';

class App extends React.Component {

  state = {
  planeteers: []
  //searchTerm: ""
  }

  componentDidMount(){

    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then((resp) => {
        this.setState({
          planeteers: resp
        })
      })
    }

  render(){
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers ={this.state} />
      </div>
    );
  }

}

export default App;
