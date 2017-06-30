import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Header from '../../components/Header/Header.js';

export default class MainLayout extends Component {
  render () {
    return (
      <div>
        <Header />
        <Navigation />
      </div>
    );
  }
}

