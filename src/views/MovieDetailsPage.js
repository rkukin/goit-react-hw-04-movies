//'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.

import React, {Component} from "react";
import fetchMovies from "../services/GetMovies"

export default class MovieDetailsPage extends Component {

  state = {};

  componentDidMount() {
    fetchMovies.fetchDetailsAboutMovie(this.props.match.params.movieId)
      .then(response => { this.setState(response.result) })
  }

  render() {
    return (
      <>
      <button>Back</button>
      <div>MovieDetailsPage</div>
      </>
    )
  }
};