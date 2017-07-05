import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

export default class Navigation extends Component {
  render () {
    return (
      <ul className="navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/builder">Device Builder</Link></li>
        <li><Link to="/devices">Device List</Link></li>
      </ul>
    );
  }
}
