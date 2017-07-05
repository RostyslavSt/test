import { SEARCH_ITEM } from '../data/constants';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_ITEM:
      return action.searchValue;
    default:
      return state;
  }
};

export default searchReducer;
