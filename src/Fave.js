import React, { Component } from 'react';

export default class Fave extends Component {
  // NOTE add this to the outermost div inside the return
handleClick(e) {
  e.stopPropagation();
  console.log('Handling Fave click!');
  // this.props.onFaveToggle();
}

  render() {
    return (
      <div className={this.props.isFave ? 'film-row-fave remove_from_queue' :
          'film-row-fave add_to_queue'} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
