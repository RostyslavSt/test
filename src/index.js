require('./scss/index.scss');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';

render(
  <Router>
    <MainLayout>
    </MainLayout>
  </Router>,
  document.getElementById('root')
);
