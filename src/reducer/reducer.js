import { CHANGE_FILTER_OPTION,
  CHANGE_STATUS,
  SEARCH_ITEM } from '../data/constants';
import { combineReducers } from 'redux';
import jsonData from '../data/data.json';

const filterOption = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_FILTER_OPTION:
      return action.filterOption;
    default:
      return state;
  }
};

const itemReducer = (state = jsonData, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      const devices = state.slice();
      let index = 0;

      devices.map((item, i) => {
        if (item.id === action.id) {
          index = i;
        }
      });
      devices[index].status = !devices[index].status;
      return devices;
    default:
      return state;
  }
};

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.searchValue;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filterOption,
  itemReducer,
  searchReducer 
});

export default rootReducer;
