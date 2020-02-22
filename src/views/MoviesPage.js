//'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.

import React, {Component} from "react";
import Search from "../components/Search";
import {Link} from "react-router-dom";
import qetSearchQuery from "../utils/getSearchQuery";
import fetchMovies from "../services/GetMovies";

export default class MoviesPage extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    const {query} = qetSearchQuery(this.props.location.search);

    if (query) {
      this.fetchMoviesByQuery(query)
    }
  }

  fetchMoviesByQuery = query => {
    fetchMovies.fetchMovieByQuery(query)
      .then(response => this.setState({movies: response.results}))
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {

    const {movies} = this.state;
    const {match} = this.props;

    return (
      <>
        <Search onSubmit={this.handleChangeQuery}/>

        {movies.length > 0 && (
          <ul>
            {movies.map (movie => (
              <li key={movie.id}>
                <Link to={{
                  pathname: `${match.url}/${movie.id}`,
                  state: { from: this.props.location },
                }}>
                  {movie.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}

      </>
    )
  }
}
