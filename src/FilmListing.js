import React, { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      faves: []
    };
  }

  handleFilterClick = (filter) => {
    this.setState({
      filter
    });
    console.log('setting filter to', filter);
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);
    // if it is not favorited, add it
    if (filmIndex === -1) {
      console.log('adding fav:', film);
      faves.splice(filmIndex);
    }
    // else it is favorited and should be removed
    else {
      console.log('removing fav:', film);
      faves.push(film);
    }
  }

  render() {
    const allFilms = this.props.films.map( film => {
      return (
        <FilmRow film={film} />
      );
    });

    const isActive = 'is-active';
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={this.state.filter === 'all' ?
              `film-list-filter ${isActive}` : 'film-list-filter'}
            onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={this.state.filter === 'faves' ?
              `film-list-filter ${isActive}` : 'film-list-filter'}
            onClick={() =>
              this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}
