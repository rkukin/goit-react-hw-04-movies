import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Layout from "./Layout";
import HomePage from "../views/HomePage"
import MovieDetailsPage from "../views/MovieDetailsPage"
import MoviesPage from "../views/MoviesPage"

export default class App extends Component {
  state = {
    films: [],
  };

  render() {
    const {films} = this.state;
    return (
      <>
        <Layout/>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage}/>
          <Route path={routes.DETAILS} component={MovieDetailsPage}/>
          <Route exact path={routes.MOVIES} component={MoviesPage}/>
        </Switch>
      </>
    );
  }
}