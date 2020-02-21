//'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
import React, {Component} from "react";
import styled from "styled-components";
import fetchTrending from "../services/GetMovies"
import {Link} from "react-router-dom";
import routes from "../routes";

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

      .then(response => this.setState({popular:response.results}))
      .catch(error => console.log(error))
      .finally(() => this.setState({isLoading: false}))
  };

  render() {
    const { popular, error } = this.state;
    console.log(this.state);
    return (
      <>
      <div>Homepage</div>
        {popular && !error && <PopularList>
          {popular.map((movie) => {
            return <PopularListItem key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.original_title}</Link></PopularListItem>
          })}
        </PopularList>}
        {error && <p>error</p>}
        </>
    )
  }
};