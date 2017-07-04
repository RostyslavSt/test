import { CHANGE_FILTER_OPTION, CHANGE_STATUS} from '../data/constants';
import { combineReducers } from 'redux';
import jsonData from '../data/data.json';

function items (state = jsonData, action) {
  return state;
}

const filterOption = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_FILTER_OPTION:
      return action.filterOption;
    default:
      return state;
  }
};

export function itemReducer (state = jsonData, action) {
  switch (action.type) {
    case CHANGE_STATUS:
      let device = state[action.index];
      device.status = !device.status;
      // return [state, Object.assign({},state[action.index])];
      return state.slice();
    default:
      return state;
  }
}

const rootReducer = combineReducers({filterOption, itemReducer});

export default rootReducer;

// в itemReducer перезаписывается стейт 
// нужно создать новій єлемент массива, перезаписав в нем статус на основе старого стейта