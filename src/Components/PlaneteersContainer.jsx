import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  // console.log(props.planeteers)

  let arrayOfComponents = props.planeteers.map( planeteer => {
    return <Planeteer key={planeteer.id} planeteer={planeteer} />
  })

  return (
    <ul className="cards">
      {
        arrayOfComponents
      }
    </ul>
  )

};

export default PlaneteersContainer;
