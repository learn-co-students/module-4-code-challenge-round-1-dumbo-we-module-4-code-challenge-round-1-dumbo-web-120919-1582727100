import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  // enumerates through Planeteer data in props and renders <Planeteer /> components
  renderPlaneteers = () => {
    return this.props.shownPlaneteers.map( planeteer => {
      return (
        <Planeteer
          key={(planeteer.id ? planeteer.id : Math.floor(Math.random() * 5000) + 9)}
          thisPlaneteer={planeteer} 
        />
        )
    })
  }
  // -------------------------------------------------------
  render() {
    return (
      <ul className="cards">
        {this.renderPlaneteers()}
      </ul>
    )
  }

};

export default PlaneteersContainer;
