import React from 'react';

class Planeteer extends React.Component {

  state = {
    showBio: true
  }

  handleClick = () => {
    this.setState({
      showBio: !this.state.showBio
    })
  }

  render() {
    let planeteer = this.props.planeteer
    let currentYear = new Date().getFullYear()
    

    return (
      <li className="cards__item" onClick={this.handleClick}>
        <div className="card">
          <img src={ planeteer.pictureUrl } alt={ planeteer.name } className="card__image" />
          <div className="card__content">
            <div className="card__title">{ planeteer.name }</div>
            <p className="card__text">{ this.state.showBio ? planeteer.bio : planeteer.quote }</p>
            <div className="card__detail">
              <p>{ planeteer.twitter }</p>
              <p>Age: { currentYear - planeteer.born }</p>
              <p>{ planeteer.fromUSA ? "USA-based" : "Working Overseas" }</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
