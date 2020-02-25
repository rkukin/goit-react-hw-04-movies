//'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
import React, {Component} from "react";
import styled from "styled-components";
import fetchTrending from "../services/GetMovies"
import {Link} from "react-router-dom";

const PopularList = styled.ul`
padding-top: 20px;
`;

const PopularListItem = styled.li``;

export default class Homepage extends Component {

  state = {
    popular: [],
    error: null,
    isLoading: true
  };

  componentDidMount() {
    fetchTrending.fetchMostPopularMovies()

      .then(response => this.setState({popular: response.results}))
      .catch(error => console.log(error))
      .finally(() => this.setState({isLoading: false}))
  };

  render() {
    const {popular, error, isLoading} = this.state;

    return (
      <>
        {isLoading === true && <h2>Loading...</h2>}
        {popular.length > 0 && !error && isLoading === false && <PopularList>
          <h3>Most popular</h3>
          {popular.map((movie) => {
            return <PopularListItem key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </PopularListItem>
          })}
        </PopularList>}
        {error && isLoading === false && <h2>Something went wrong, please reload the page</h2>}
        {popular.length === 0 && !error && isLoading === false && <h2>No popular movies yet</h2>}
      </>
    )
  }
};