import changeStatus from './changeStatus/changeStatus.reducer';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';
import deviceProto from './deviceProtoReducer';
import devices from './devicesReducer';

const rootReducer = combineReducers({
  filterReducer,
  changeStatus,
  searchReducer,
  deviceProto,
  devices
});

export default rootReducer;
