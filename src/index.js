require('./scss/index.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {itemReducer} from './reducer/reducer';
import jsonData from './data/data.json';
import DeviceList from './pages/DeviceList/DeviceList';
import DevicePage from './pages/DevicePage/DevicePage';

let store = createStore(itemReducer, jsonData);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={DeviceList}></Route>
        <Route path='/device' component={DevicePage}></Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
