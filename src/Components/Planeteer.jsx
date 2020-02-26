import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

class Planeteer extends React.Component {

  state = {
    showBio: true
  }

  toggleBioOrQuote = () => {
    const current = this.state.showBio;
    this.setState({
      showBio: !current
    })
  }

  // didn't finish this deliverable!
  handleDeleteBtnClick = () => {
    this.props.handleDeletedPlaneteer(this.props.planeteer);
  }

  render() {
    const { name, fromUSA, born, bio, quote, pictureUrl, twitter } = this.props.planeteer;
  
    return (
      <li className="cards__item">
        <div className="card">
          <button className="delete-btn" onClick={this.handleDeleteBtnClick}>X</button>
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text" onClick={this.toggleBioOrQuote}>{this.state.showBio ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {(CURRENT_YEAR - born)}</p>
              <p>{fromUSA ? "USA-Based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
