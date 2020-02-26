import React from 'react';

class Planeteer extends React.Component {


  state = {
    showQuote: false 
  }

  handleClick = (e) => {
    this.setState({
      showQuote: !this.state.showQuote
    })
  }

  render() {
    let planet = this.props.planeteer
    let currentYear = 2020
    let birthYear = planet.born
    
    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleClick}>
          <img src={planet.pictureUrl} alt={planet.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{planet.name}</div>
            <p className="card__text">{(!planet.showQuote ? planet.bio : planet.quote)}</p>
            <div className="card__detail">
              <p>{planet.twitter}</p>
              <p>Age: {currentYear - birthYear}</p>
              <p>{(planet.fromUSA ? "USA-Based" : "Working Overseas")}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
