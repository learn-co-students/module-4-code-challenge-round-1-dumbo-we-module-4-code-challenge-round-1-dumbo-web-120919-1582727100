import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  const getPlaneteerComponents = () => {
    return props.planeteers.map((planeteer) => {
      return <Planeteer
        key={planeteer.id || planeteer.name} // random planeteers don't have an id
        planeteer={planeteer}
        handleDeletedPlaneteer={props.handleDeletedPlaneteer}
      />
    })
  }
  
  return (
    <ul className="cards">
      {
        getPlaneteerComponents()
      }
    </ul>
  )

};

export default PlaneteersContainer;
