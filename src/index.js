require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { deviceProto } from './redusers/deviceProtoReduser';
import DeviceForm from './components/DeviceForm/deviceForm.js';


const commonReducer = combineReducers({
  deviceProto: deviceProto
});
const store = createStore(commonReducer);

render(
    <Provider store={store}>
      <DeviceForm />
    </Provider>,
  document.getElementById('root')
);
