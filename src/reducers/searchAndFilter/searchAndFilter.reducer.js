import { SEARCH_ITEM } from '../../constants/constants';
import { CHANGE_FILTER_OPTION } from '../../constants/constants';

const initialState = {
  filterOption: 'all',
  searchValue: ''
};

const searchAndFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_OPTION:
      return Object.assign({}, state, { filterOption: action.filterOption });
    case SEARCH_ITEM:
      return Object.assign({}, state, { searchValue: action.searchValue });
    default:
      return state;
  }
};

export default searchAndFilter;
