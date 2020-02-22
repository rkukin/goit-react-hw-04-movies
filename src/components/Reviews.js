///movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

import React, {Component} from "react";
import fetchMovies from "../services/GetMovies";

export default class Reviews extends Component {

  state = {
    reviews: [],
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
      <h2>Reviews</h2>
    )
  }
}