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
      .catch(error => this.setState({error}))
      .finally(() => this.setState({isLoading: false}))
  };

  onClick(id) {

  }

  render() {
    const { popular } = this.state;
    console.log(this.state);
    return (
      <>
      <div>Homepage</div>
        <PopularList>
          {popular.map((movie) => {
            return <PopularListItem key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.original_title}</Link></PopularListItem>
          })}
          {/*{popular.map(({id, original_title}) =>*/}
          {/*  <PopularListItem key={{id}}>{original_title}</PopularListItem>*/}
          {/*)}*/}
        </PopularList>
        </>
    )
  }
};