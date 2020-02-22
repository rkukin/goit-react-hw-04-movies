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
    error: null,
    noSearches: true
  };

  componentDidMount() {
    const {query} = qetSearchQuery(this.props.location.search);

    if (query) {
      this.fetchMoviesByQuery(query)
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { query: prevQuery } = qetSearchQuery(prevProps.location.search);
    const { query: nextQuery } = qetSearchQuery(this.props.location.search);

    if (prevQuery !== nextQuery && nextQuery) {
      this.fetchMoviesByQuery(nextQuery);
    }
  }

  fetchMoviesByQuery = query => {
    this.setState({noSearches: false, isLoading: true});
    fetchMovies.fetchMovieByQuery(query)
      .then(response => this.setState({movies: response.results}))
      .catch(error => this.setState({error: error}))
      .finally(() => this.setState({isLoading: false}))
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
        {this.state.isLoading && !this.state.noSearches && <p>Loading...</p>}
        {!this.state.isLoading && this.state.error && !this.state.noSearches && <p>{this.state.error}</p>}
        {!this.state.isLoading && !this.state.error && movies.length === 0 && !this.state.noSearches && <p>No results found</p>}
        {!this.state.isLoading && !this.state.error && movies.length > 0 && !this.state.noSearches && (
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
