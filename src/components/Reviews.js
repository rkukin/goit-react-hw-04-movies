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
    this.fetchReviews(this.props.match.params.movieId);
  }

  fetchReviews = (id) => {
    fetchMovies.fetchMovieReviews(id)
      .then(response => this.setState({reviews: response.results}))
      .catch(error => this.setState({error: error}))
      .finally(() => this.setState({isLoading: false}))
  };

  render() {
    return (
      <>
        {this.state.isLoading && <p>Loading...</p>}
        {!this.state.isLoading && this.state.error && <p>{this.state.error}</p>}
        {!this.state.isLoading && !this.state.error && this.state.reviews.length === 0 && <p>No reviews for this movie</p>}
        {!this.state.isLoading && !this.state.error && this.state.reviews.length > 0 &&
        <ul>
          {this.state.reviews.map((review) => {
            return <li key={review.id}>
              <p>{`AUTHOR: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          })}
        </ul>
        }
      </>
    )
  }
}