import { CHANGE_FILTER_OPTION } from '../data/constants';

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_FILTER_OPTION:
      return action.filterOption;
    default:
      return state;
  }
};

export default filterReducer;
