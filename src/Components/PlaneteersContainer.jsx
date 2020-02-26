import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  const mappedArray = props.planeteers.map(planeteer => {
    return <Planeteer
      key={planeteer.id}
      planeteer={planeteer}
    />
  })

  return (
    <ul className="cards">
      {
        mappedArray
      }
    </ul>
  )

};

export default PlaneteersContainer;
