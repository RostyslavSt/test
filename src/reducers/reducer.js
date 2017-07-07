import changeStatus from './changeStatus/changeStatus.reducer';
import searchAndFilter from './searchAndFilter/searchAndFilter.reducer';
import { combineReducers } from 'redux';
import deviceProto from './deviceProtoReducer';
import devices from './devicesReducer';

const rootReducer = combineReducers({
  searchAndFilter,
  changeStatus,
  deviceProto,
  devices
});

export default rootReducer;
