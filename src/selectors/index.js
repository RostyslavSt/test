import { createSelector } from 'reselect';

const getFilterOption = state => state.searchAndFilter.filterOption;
const getSearchValue = state => state.searchAndFilter.searchValue;
const getDevices = state => state.changeStatus;

function searchItem (item, searchValue) {
  const result = item.name.toLowerCase().includes(searchValue);

  return result;
}

export const filterItems = createSelector(
  [getFilterOption, getSearchValue, getDevices],
  (filterOption, searchValue, items) => {
    let newArr = [];

    if (filterOption === 'all') {
      newArr = items;
    } else if (filterOption === 'on') {
      newArr = items.filter(item => item.status === true);
    } else if (filterOption === 'off') {
      newArr = items.filter(item => item.status === false);
    }
    return newArr.filter(item => searchItem(item, searchValue));
  }
);


