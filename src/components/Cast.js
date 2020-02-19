///movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.

import React, { Component } from 'react';
import * as searchMovie from '../services/GetMovies';

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;
    searchMovie.casts(movieId).then(Res => {
      console.log('Res :', Res);
      this.setState({ cast: Res.data.cast });
    });
  }

  render() {
    const { cast } = this.state;
    const { match } = this.props;
    return (
      <ul>
        {cast.map(el => (
          <li className={st.list} key={el.id}>
            <img
              className={st.image}
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt=""
            />
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}