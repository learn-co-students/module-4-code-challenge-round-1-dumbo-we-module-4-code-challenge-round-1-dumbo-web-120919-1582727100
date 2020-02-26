import React from 'react';

class Planeteer extends React.Component {
  state = {
    isClicked: true
  }
  //onclick switch value of isClicked
  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }))
  }
  //call delete function
  handleDelete = () => {
    this.props.deletePlaneteer(this.props.planeteer)
  }

  render() {
    let { name, fromUSA, born, bio, quote, pictureUrl, twitter } = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleClick}>
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.isClicked ?
              bio :
              quote
            }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {2020 - born}</p>
              <p>{fromUSA ? "USA-based" : "working overseas"}</p>
            </div>
            <button onClick={this.handleDelete}>
              Delete {name}
            </button>
          </div>
        </div>
      </li>
    );
  }

}


export default Planeteer;
