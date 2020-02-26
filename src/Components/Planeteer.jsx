import React from 'react';

class Planeteer extends React.Component {

  state = {
    flipped: false
  }

  handleFlip = (e) => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    const planeteerName = this.props.planeteer.name 
    const planeteerImage = this.props.planeteer.pictureUrl 
    const planeteerTwitter = this.props.planeteer.twitter
    const bio = this.props.planeteer.bio
    const quote = this.props.planeteer.quote
    const birthYear = this.props.planeteer.born 
    const fromUsa = this.props.planeteer.fromUSA

    const currentYear = new Date().getFullYear()
    const age = currentYear - birthYear
    
    
    
    return (
      <li className="cards__item" onClick={this.handleFlip} >
        <div className="card">
          <img src={planeteerImage} alt={planeteerName} className="card__image" />
          <div className="card__content">
            <div className="card__title">{planeteerName}</div>
            <p className="card__text">{this.state.flipped ? bio : quote }</p>
            <div className="card__detail">
              <p>{planeteerTwitter}</p>
              <p>Age: {age}</p>
              <p>{fromUsa ? "USA-based" : "Working Overseas" }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
