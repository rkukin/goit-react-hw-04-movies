//'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.

import React, {Component} from "react";
import fetchMovies from "../services/GetMovies"
import {Link} from "react-router-dom";

export default class MovieDetailsPage extends Component {

  state = {
    movie: {},
    error: null,
    isLoading: true,
    casts: [],
    reviews: []
  };

  componentDidMount() {
    fetchMovies.fetchDetailsAboutMovie(this.props.match.params.movieId)
      .then(response => this.setState({movie: response}))
      .catch(error => this.setState(error))
      .finally(() => this.setState({isLoading: false}))
  }

  onCastClick() {
    this.fetchCasts(this.props.match.params.movieId)
  }

  onReviewsClick() {
    this.fetchReviews(this.props.match.params.movieId)
  }

  fetchCasts = (id) => {
    fetchMovies.fetchMovieCast(id)
      .then(response => this.setState({casts: response.cast}))
  };

  fetchReviews = (id) => {
    fetchMovies.fetchMovieReviews(id)
      .then(response => this.setState({reviews: response.results}))
  };

  render() {
    return (
      <>
        <button>Back</button>
        {/*<div>MovieDetailsPage</div>*/}

        <ul>
          <li><Link to={`${this.props.match.url}/cast`} onClick={() => this.onCastClick()}>Cast</Link></li>
          <li><Link to={`${this.props.match.url}/review`} onClick={() => this.onReviewsClick()}>Reviews</Link></li>
        </ul>
      </>
    )
  }
};