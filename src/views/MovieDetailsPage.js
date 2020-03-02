//'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.

import React, {Component, Suspense, lazy} from "react";
import fetchMovies from "../services/GetMovies"
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import routes from "../routes";
import styled from "styled-components";

const Reviews = lazy(() => import("../components/Reviews"));
const Cast = lazy(() => import("../components/Cast"));

const Poster = styled.img`
max-height: 400px;
width: auto;
margin-right: 20px;
`;

const SectionWrapper = styled.div`
display: flex;
`;

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

  handleGoBack = () => {
    const {state} = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.MOVIES);
  };

  getMovieYear = movie => {
    if (movie.release_date) {
      return movie.release_date.substring(0, 4)
    } else {
      return ''
    }
  };

  concatMovieGenres = movie => {
    const reducer = (accumulator, obj) => accumulator + ' ' + obj.name;
    if (movie.genres) {
      return movie.genres.reduce(reducer, "")
    } else {
      return ''
    }
  };

  render() {

    const {isLoading, error, movie} = this.state;

    return (
      <>
        {isLoading === true && <h2>Loading...</h2>}
        {isLoading === false && error && <h2>{error}</h2>}
        {movie && isLoading === false &&
        <>
          <button onClick={this.handleGoBack}>Go Back</button>
          <SectionWrapper>
            <Poster alt={movie.original_title}
                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <div>
              <h1>{movie.original_title} ({this.getMovieYear(movie)})</h1>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{this.concatMovieGenres(movie)}</p>
            </div>
          </SectionWrapper>
            <h3>Additional information</h3>
            <ul>
              <li><Link to={`${this.props.match.url}/cast`}>Cast</Link></li>
              <li><Link to={`${this.props.match.url}/review`}>Reviews</Link></li>
            </ul>
        </>
        }
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path={`${this.props.match.path}/cast`} component={Cast}/>
            <Route exact path={`${this.props.match.path}/review`} component={Reviews}/>
          </Switch>
        </Suspense>
      </>
    )
  }
};