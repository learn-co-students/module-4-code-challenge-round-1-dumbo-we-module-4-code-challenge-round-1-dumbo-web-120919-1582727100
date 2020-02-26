import React from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends React.Component {

  // enumerates through Planeteer data in props and renders <Planeteer /> components
  renderPlaneteers = () => {
    return this.props.shownPlaneteers.map( planeteer => {
      return (
        <Planeteer
          // this first key line was used to generate a random key when not persisting random Planeteers to the back-end, since they didn't have an ID associated with them
          // key={(planeteer.id ? planeteer.id : Math.floor(Math.random() * 5000) + 9)}

          key={planeteer.id}
          thisPlaneteer={planeteer} 
          handleDeletePlaneteer={this.props.handleDeletePlaneteer}
        />
        )
    })
  }
  // -------------------------------------------------------

  // *** RENDER *** 
  render() {
    return (
      <ul className="cards">
        {this.renderPlaneteers()}
      </ul>
    )
  }

};

export default PlaneteersContainer;
