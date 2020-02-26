import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  
  let planeteers = props.planeteersArray.map( planObj => {
    return <Planeteer planeteer={planObj} key={planObj.id} />
  });

  return (
    <ul className="cards">
      
        { planeteers }
      
    </ul>
  )

};

export default PlaneteersContainer;
