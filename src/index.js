require('./scss/index.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/reducer';
import DeviceList from './pages/DeviceList/DeviceList';
import DevicePage from './pages/DevicePage/DevicePage';
import { deviceProto } from './redusers/deviceProtoReduser';
import { devices } from './redusers/devicesReduser';
import DeviceForm from './components/DeviceForm/deviceForm.js';
import DeviceProto from './components/DeviceProto/DeviceProto.js';

const commonReducer = combineReducers({
  deviceProto: deviceProto,
  devices: devices
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' exact component={DeviceList}></Route>
        <Route path='/device' component={DevicePage}></Route>
      </Switch>
      <div className='flex'>
        <DeviceProto />
        <DeviceForm />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
