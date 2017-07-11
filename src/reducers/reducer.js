import searchAndFilter from './searchAndFilter.reducer';
import { combineReducers } from 'redux';
import deviceProto from './builder.reducer';
import devices from './addDevice.reducer';
import devicesList from './devicesList.reducer';
import loadUsersReducer from './loadUsersReducer';
const rootReducer = combineReducers({
  searchAndFilter,
  deviceProto,
  devices,
  devicesList,
  loadUsersReducer
});

export default rootReducer;
