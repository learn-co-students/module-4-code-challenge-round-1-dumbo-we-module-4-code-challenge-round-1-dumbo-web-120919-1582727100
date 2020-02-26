import React from 'react';

class Planeteer extends React.Component {
  
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  
  render() {
    const {name, pictureUrl, bio, quote, twitter, born, fromUSA} = this.props.planeteer
    let age = 2020 - born

    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleClick}>
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.clicked ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
