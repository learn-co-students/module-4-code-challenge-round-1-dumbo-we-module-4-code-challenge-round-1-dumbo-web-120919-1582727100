import React from 'react';

class Planeteer extends React.Component {

  state = {
    cardClicked: false
  }

  handleToggle = (e) => {
    this.setState({
      cardClicked: !this.state.cardClicked
    })
  }

  handleDelete = (planeteer) => {
    this.props.handleCardDelete(planeteer)
  }

  render() {

    const { planeteer } = this.props

    const newDate = new Date()
    const currYear = newDate.getFullYear()
    // console.log(currYear)

    return (
      <li className="cards__item">
        <div className="card">
          <img src={planeteer.pictureUrl} 
               alt={planeteer.name} 
               className="card__image" 
               onClick={this.handleToggle} />
          <div className="centered">
            <button onClick={(e) => this.handleDelete(planeteer)} id="random-planeteer">
              Click to Delete
            </button>
          </div>
          <div className="card__content">
            <div className="card__title">{planeteer.name}</div>
            <p className="card__text">{this.state.cardClicked ? planeteer.quote : planeteer.bio}</p>
            <div className="card__detail">
              <p>{planeteer.twitter}</p>
              <p>Age: {currYear - planeteer.born}</p>
              <p>{planeteer.fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
