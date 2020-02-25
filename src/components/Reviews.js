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
    const { isLoading, error, reviews} = this.state;
    return (
      <>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading && error && <h2>{error}</h2>}
        {!isLoading && !error && reviews.length === 0 &&
        <h2>No reviews for this movie</h2>}
        {!isLoading && !error && reviews.length > 0 &&
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