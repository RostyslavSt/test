import searchAndFilter from './searchAndFilter.reducer';
import { combineReducers } from 'redux';
import deviceProto from './builder.reducer';
import devices from './addDevice.reducer';
import devicesList from './devicesList.reducer';

const rootReducer = combineReducers({
  searchAndFilter,
  deviceProto,
  devices,
  devicesList
});

export default rootReducer;
