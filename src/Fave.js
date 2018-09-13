import React, { Component } from 'react';

export default class Fave extends Component {
  // NOTE add this to the outermost div inside the return
  handleClick = (e) => {
    console.log('handing fave click');
  }
  render() {
    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
