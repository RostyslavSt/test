import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => (
  <nav className='mob-hide'>
    <ul className="navigation">
      <li className="navigation-item">
        <NavLink
          to="/"
          activeClassName="active">
          Home
        </NavLink>
      </li>
      <li className="navigation-item">
        <NavLink
          to="/builder"
          activeClassName="active">
          Device Builder
        </NavLink>
      </li>
      <li className="navigation-item">
        <NavLink
          to="/devices"
          activeClassName="active">
          Device List
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

