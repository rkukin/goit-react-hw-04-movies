///movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.

import React, {Component} from 'react';
import fetchMovies from "../services/GetMovies";

export default class Cast extends Component {
  state = {
    cast: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.fetchCasts(this.props.match.params.movieId);
  }

  fetchCasts = (id) => {
    fetchMovies.fetchMovieCast(id)
      .then(response => this.setState({cast: response.cast}))
      .catch(error => this.setState({error: error}))
      .finally(() => this.setState({isLoading: false}))
  };

  render() {
    return (
      <>
        <ul>
          {this.state.cast.map((cast) => {
            return <li key={cast.cast_id}>
              <img alt={cast.name} src={"https://image.tmdb.org/t/p/w500/" + cast.profile_path}/>
              <p>{cast.name}</p>
              <p>{`Character: ${cast.character}`}</p>
            </li>
          })}
        </ul>
      </>
    )
  }
}