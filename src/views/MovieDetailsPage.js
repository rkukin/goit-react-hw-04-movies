//'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.

import React, {Component} from "react";
import fetchMovies from "../services/GetMovies"

export default class MovieDetailsPage extends Component {

  state = {
    movie: {}
  };

  componentDidMount() {
    fetchMovies.fetchDetailsAboutMovie(this.props.match.params.movieId)
      .then(response => this.setState({movie: response}) )
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