import React, { Component } from 'react';

export default class FilmPoster extends Component {
  render() {
    const url
      =`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`;
    return (
      <img src={url} />
    );
  }
}
