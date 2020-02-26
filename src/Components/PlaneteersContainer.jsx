import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  console.log(props)
  return (
    <ul className="cards">
      {
        props.shownPlaneteers.map(planeteer => {
          return <Planeteer key={planeteer.id} planeteer={planeteer}/>
        })
      }
    </ul>
  )

};

export default PlaneteersContainer;
