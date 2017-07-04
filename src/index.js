require('./scss/index.scss');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import { deviceProto } from './redusers/deviceProtoReduser';
import DeviceForm from './components/DeviceForm/deviceForm.js';
import DeviceProto from './components/DeviceProto/DeviceProto.js';

const commonReducer = combineReducers({
  deviceProto: deviceProto
});
const store = createStore(
  commonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
      <div className='flex'>
        <DeviceProto />
        <DeviceForm />
      </div>
    </Provider>,
  document.getElementById('root')
);
