import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(props)

  return (
    <ul className="cards">
      {
       props.planeteers.map(planeteer => <Planeteer planeteer={planeteer} key={planeteer.id} />)
      }
    </ul>
  )

};

export default PlaneteersContainer;
