import { SEARCH_ITEM } from '../data/constants';

export const searchAction = (searchValue) => ({
  type: SEARCH_ITEM,
  searchValue
});
