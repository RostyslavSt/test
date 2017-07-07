import { CHANGE_FILTER_OPTION } from '../../constants/constants';
import { SEARCH_ITEM } from '../../constants/constants';

export const searchAction = (searchValue) => ({
  type: SEARCH_ITEM,
  searchValue
});

export const filterAction = (filterOption) => {
  return {
    type: CHANGE_FILTER_OPTION,
    filterOption
  };
};
