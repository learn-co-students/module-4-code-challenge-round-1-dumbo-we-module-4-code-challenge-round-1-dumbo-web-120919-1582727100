import React from 'react';

class Planeteer extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      clicked: false
    }
  }

  DisplayQuoteOrBio= () => {
    this.setState({clicked: !this.state.clicked})
  }
  

  
  render() {
    let {planetee} = this.props
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = planetee
    let d = new Date().getFullYear()
    let age = d-born

    
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={() => this.DisplayQuoteOrBio()} />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.clicked ? bio : quote }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{ fromUSA? "USA Based" : "Working Overseas" }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
