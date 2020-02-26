import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
// console.log(props)
  let arrayOfPlaneteers = props.planeteers.map(planetee => {
    return <Planeteer
      planetee={planetee}
      key={planetee.id}
    />
  })

  return (
    <ul className="cards">
      {
        arrayOfPlaneteers
      }
    </ul>
  )

};

export default PlaneteersContainer;
