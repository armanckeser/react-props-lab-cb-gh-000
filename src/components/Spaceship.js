import React from 'react';
import ReactDOM from 'react-dom';


export default class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <p>{this.name}</p><br/>
        <p>{this.speed}</p>
        <p>{this.hasRockets} </p>
        <p>{this.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
