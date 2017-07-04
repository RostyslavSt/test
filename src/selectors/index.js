import { createSelector } from 'reselect';

const getFilterOption = state => state.filterOption;
const getDevices = state => state.itemReducer;

export const filterItems = createSelector(
  [getFilterOption, getDevices],
  (filterOption, items) => {
    if (filterOption === 'all') {
      return items;
    } else if (filterOption === 'on') {
      return items.filter(item => item.status === true);
    } else if (filterOption === 'off') {
      return items.filter(item => item.status === false);
    }
  }
);