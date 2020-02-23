///movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.

import React, {Component} from 'react';
import fetchMovies from "../services/GetMovies";
import styled from "styled-components";

const ActorPhoto = styled.img`
max-height: 150px;
width: auto;
`;

const Paragraph = styled.p`
margin: 0;
padding: 0;
`;

const ActorsListItem = styled.li`
margin-bottom: 10px;
`;

export default class Cast extends Component {
  state = {
    cast: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.fetchCasts(this.props.match.params.movieId);
  }

  fetchCasts = (id) => {
    fetchMovies.fetchMovieCast(id)
      .then(response => this.setState({cast: response.cast}))
      .catch(error => this.setState({error: error}))
      .finally(() => this.setState({isLoading: false}))
  };

  render() {
    return (
      <>
        <ul>
          {this.state.cast.map((cast) => {
            return <ActorsListItem key={cast.cast_id}>
              <ActorPhoto alt={cast.name} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>
              <Paragraph>{cast.name}</Paragraph>
              <Paragraph>{`Character: ${cast.character}`}</Paragraph>
            </ActorsListItem>
          })}
        </ul>
      </>
    )
  }
}