import React from 'react';

class Planeteer extends React.Component {

  state = {
    isClicked: false
  }

  // calculates the Planeteer's age dynamically using the date functionalities of JavaScript
  calculatePlaneteerAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let planeteerBirthYear = this.props.thisPlaneteer.born
    let planeteerAge = (currentYear - planeteerBirthYear)

    return planeteerAge
  }
  // -------------------------------------------------------

  // changes the isClicked element of the Planeteer's state based off of a user clicking the card
  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }
  // -------------------------------------------------------

  // *** RENDER *** 
  render() {

    let thisPlaneteer = this.props.thisPlaneteer;

    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleClick}>
          <img src={thisPlaneteer.pictureUrl} alt={thisPlaneteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{thisPlaneteer.name}</div>
            <p className="card__text">
              { (this.state.isClicked ? thisPlaneteer.quote : thisPlaneteer.bio) }
            </p>
            <div className="card__detail">
              <p>{thisPlaneteer.twitter}</p>
              <p>Age: {this.calculatePlaneteerAge()}</p>
              <p>
                { (thisPlaneteer.fromUSA ? "USA-based" : "Working Overseas") }
              </p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
