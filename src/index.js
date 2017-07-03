require('./scss/index.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DeviceList from './pages/DeviceList/DeviceList';
import DevicePage from './pages/DevicePage/DevicePage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={DeviceList}></Route>
      <Route path='/device' component={DevicePage}></Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
