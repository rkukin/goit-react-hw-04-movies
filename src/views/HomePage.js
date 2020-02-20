import React, {Component} from "react";
import styled from "styled-components";
import fetchTrending from "../services/GetMovies"

const PopularList = styled.ul``;

const PopularListItem = styled.li``;

export default class Homepage extends Component {

  state = {
    popular: []
      };

  componentDidMount() {
    fetchTrending.fetchMostPopularMovies()
      .then(console.log);
  };


  render() {
    return (
      <>
      <div>Homepage</div>
        <PopularList>

        </PopularList>
        </>
    )
  }
};