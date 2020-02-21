//'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.

import React, {Component} from "react";
import Search from "../components/Search";

export default class MoviesPage extends Component {
  render() {
    return (
      <Search/>
    )
  }
}
