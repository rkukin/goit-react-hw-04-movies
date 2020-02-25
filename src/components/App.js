import React, {Component, Suspense, lazy} from 'react';
import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom';
import routes from '../routes';
import Layout from "./Layout";

const HomePage = lazy(() => import("../views/HomePage"));
const MovieDetailsPage = lazy(() => import("../views/MovieDetailsPage"));
const MoviesPage = lazy(() => import('../views/MoviesPage'));

export default class App extends Component {

  render() {
    return (
      <Router>
        <Layout/>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path={routes.HOME} component={HomePage}/>
            <Route path={routes.DETAILS} component={MovieDetailsPage}/>
            <Route exact path={routes.MOVIES} component={MoviesPage}/>
            <Redirect to="/"/>
          </Switch>
        </Suspense>
      </Router>
    );
  }
}