import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  

  return (
    <ul className="cards">
      {
        props.planeteers.map(planeteer => {
          return <Planeteer key={planeteer.id} planeteer={planeteer} />
        })
      }
    </ul>
  )

};

export default PlaneteersContainer;
