import React, { Component } from 'react';

export default class Fave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFave: false
    };
  }
  // NOTE add this to the outermost div inside the return
  handleClick = (e) => {
    e.stopPropagation();
    this.setState({
      isFave: !this.state.isFave
    });
    console.log('toggling fav');
  }
  render() {
    return (
      <div className={this.state.isFave ? 'film-row-fave remove_from_queue'
          : 'film-row-fave add_to_queue'} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    );
  }
}
