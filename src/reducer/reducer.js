import { CHANGE_STATUS } from '../data/constants';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';
import { combineReducers } from 'redux';
import jsonData from '../data/data.json';


const itemReducer = (state = jsonData, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      const devices = state.map((item) => (
        Object.assign({}, item)
      ));

      devices.map((item, i) => {
        if (item.id === action.id) {
          devices[i].status = !devices[i].status;
        }
      });
      return devices;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filterReducer,
  itemReducer,
  searchReducer
});

export default rootReducer;
