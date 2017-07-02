require('./scss/index.scss');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DeviceList from './pages/DeviceList/DeviceList';

ReactDOM.render(
  <DeviceList />,
  document.getElementById('root')
);
