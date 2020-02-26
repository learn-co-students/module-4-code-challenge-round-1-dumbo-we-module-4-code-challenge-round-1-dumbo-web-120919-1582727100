import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(props)

  return (
    <ul className="cards">
      {
       props.planeteers.map(planeteer => <Planeteer planeteer={planeteer} 
                                                    key={planeteer.name + "-" + planeteer.id} 
                                                    handleCardDelete={props.handleCardDelete}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
