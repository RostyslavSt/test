import searchAndFilter from './searchAndFilter.reducer';
import { combineReducers } from 'redux';
import deviceProto from './deviceProtoReducer';
import devices from './devicesReducer';
import devicesList from './devicesList.reducer';

const rootReducer = combineReducers({
  searchAndFilter,
  deviceProto,
  devices,
  devicesList
});

export default rootReducer;
