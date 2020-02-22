//'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.

import React, {Component} from "react";
import fetchMovies from "../services/GetMovies"
import {Link, Route} from "react-router-dom";
import Reviews from "../components/Reviews";
import Cast from "../components/Cast";
import routes from "../routes"

export default class MovieDetailsPage extends Component {

  state = {
    movie: {},
    error: null,
    isLoading: true
  };

  componentDidMount() {
    fetchMovies.fetchDetailsAboutMovie(this.props.match.params.movieId)
      .then(response => this.setState({movie: response}))
      .catch(error => this.setState(error))
      .finally(() => this.setState({isLoading: false}));
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

  handleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }

    this.props.history.push(routes.MOVIES);
  };

  render() {

    const year = this.state.movie.release_date ? this.state.movie.release_date.substring(0, 4) : '';
    const reducer = (accumulator, obj) => accumulator + ' ' + obj.name;
    const names = this.state.movie.genres ? this.state.movie.genres.reduce(reducer, "") : '';

    return (
      <>
        <button onClick={this.handleGoBack}>Go Back</button>
        {this.state.isLoading === true && <p>Loading...</p>}
        {this.state.isLoading === false && this.state.error && <p>Something went wrong please try again</p>}
        {this.state.movie && this.state.isLoading === false &&
        <div>
          <img alt={this.state.movie.original_title} src={`https://image.tmdb.org/t/p/w500/${this.state.movie.backdrop_path}`}/>
          <div>
            <h1>{this.state.movie.original_title} ({year})</h1>
            <p>User score: {this.state.movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{this.state.movie.overview}</p>
            <h3>Genres</h3>
            <p>{names}</p>
          </div>
        </div>
        }

        <h3>Additional information</h3>
        <ul>
          <li><Link to={`${this.props.match.url}/cast`} onClick={() => this.onCastClick()}>Cast</Link></li>
          <li><Link to={`${this.props.match.url}/review`} onClick={() => this.onReviewsClick()}>Reviews</Link></li>
        </ul>

        <Route path = {`${this.props.match.path}/cast`} component={Cast}/>
        <Route path = {`${this.props.match.path}/review`} component={Reviews}/>
      </>
    )
  }
};