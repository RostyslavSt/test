export const searchItem = (item, searchValue) => {
  if (item.name.toLowerCase().includes(searchValue)) {
    return true;
  }
};

export const filterItems = (item, filterOption) => {
  if (filterOption === 'all') {
    return true;
  } else if (filterOption === 'on') {
    return item.status === true;
  } else if (filterOption === 'off') {
    return item.status === false;
  }
};
