import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import routes from '../routes';
import MoviesPage from '../views/MoviesPage';

export default class App extends Component {
  state = {
    films: [],
  };

  render() {
    const { films } = this.state;
    return (
      <>
        <header>
          <NavLink to={routes.HOME}>Home page</NavLink>
          <NavLink to={routes.MOVIES}> Movies page</NavLink>
        </header>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route path={routes.DETAILS} component={MovieDetailsPage} />
          <Route exact path={routes.MOVIES} component={MoviesPage} />
        </Switch>
      </>
    );
  }
}