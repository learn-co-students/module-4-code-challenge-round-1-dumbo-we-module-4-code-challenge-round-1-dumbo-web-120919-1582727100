import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  state = {
    planeteers: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      planeteers: myJson
    });
  });
    
  }

    render() {
      return (
        <ul className="cards">
          {
            this.state.planeteers.map(planeteer => {
              if ((planeteer.name.toLowerCase().includes(this.props.filter)) || (planeteer.bio.toLowerCase().includes(this.props.filter)))
              return <Planeteer planeteer={planeteer} key={planeteer.id}/>
            })
          }
        </ul>
      )
  }

};

export default PlaneteersContainer;
