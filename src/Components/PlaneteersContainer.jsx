import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  return (
    <ul className="cards">
      {
        props.displayPlaneteers.map(planeteer =>{
          return <Planeteer planeteer={planeteer} key={planeteer.id} deletePlaneteer={props.deletePlaneteer}/>
        })
      }
    </ul>
  )

};

export default PlaneteersContainer;
