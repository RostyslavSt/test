import searchAndFilter from './searchAndFilter.reducer';
import { combineReducers } from 'redux';
import settings from './builder.reducer';
import devices from './addDevice.reducer';
import devicesList from './devicesList.reducer';
import loadUsersReducer from './loadUsersReducer';
import loadDevicesReducer from './devicesDashList.js';
const rootReducer = combineReducers({
  searchAndFilter,
  settings,
  devices,
  devicesList,
  loadUsersReducer,
  loadDevicesReducer
});

export default rootReducer;
