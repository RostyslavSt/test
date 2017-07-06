import { SEARCH_ITEM } from '../constants/constants';

export const searchAction = (searchValue) => ({
  type: SEARCH_ITEM,
  searchValue
});
