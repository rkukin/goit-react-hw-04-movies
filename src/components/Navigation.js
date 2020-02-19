import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {

  return(
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={styles.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" activeClassName={styles.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
    );
};