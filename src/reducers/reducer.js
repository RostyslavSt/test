import searchAndFilter from './searchAndFilter.reducer';
import { combineReducers } from 'redux';
import settings from './builder.reducer';
import devices from './addDevice.reducer';
import devicesList from './devicesList.reducer';
import loadUsersReducer from './loadUsersReducer';
const rootReducer = combineReducers({
  searchAndFilter,
  settings,
  devices,
  devicesList,
  loadUsersReducer
});

export default rootReducer;
