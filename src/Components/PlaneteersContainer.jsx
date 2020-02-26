import React from 'react';
import Planeteer from './Planeteer'


class PlaneteersContainer extends React.Component {

  render() {
  
  let arrayOfPlaneteers = this.props.planeteers.map(planeteer => {return
    <PlaneteerCard key={planetter.id} planetter={planetter}/>})


  return (
    
    <ul className="cards">
      {
        {arrayOfPlaneteers}
      }
    </ul>
  )

};

}

export default PlaneteersContainer;
