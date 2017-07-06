import { CHANGE_STATUS } from '../data/constants';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';
import jsonData from '../data/data.json';
import deviceProto from './deviceProtoReducer';
import devices from './devicesReducer';

const itemReducer = (state = jsonData, action) => {
  switch (action.type) {
    case CHANGE_STATUS: {
      const newState = state.map((item) => (
        Object.assign({}, item)
      ));

      newState.map((item, i) => {
        if (item.id === action.id) {
          newState[i].status = !newState[i].status;
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filterReducer,
  itemReducer,
  searchReducer,
  deviceProto,
  devices
});

export default rootReducer;
