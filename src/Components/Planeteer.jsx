import React from 'react';

class Planeteer extends React.Component {

  state = {
    showQuote: false
  }

  handleClick = () => {
    this.setState({
      showQuote: !this.state.showQuote
    })
  }

  render() {
    return (
      <li className="cards__item">
        <div onClick={this.handleClick} className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.showQuote ? this.props.planeteer.quote : null}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>Age: {new Date().getFullYear() - this.props.planeteer.born}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
