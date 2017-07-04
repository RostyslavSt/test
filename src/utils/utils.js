import data from '../data/data.json';

export const searchItem = (item, searchValue) => {
  if (item.name.toLowerCase().includes(searchValue)) {
    return true;
  }
  return false;
};

// export const filterItems = (items, filterOption) => {
//   if (filterOption === 'all') {
//     return items;
//   } else if (filterOption === 'on') {
//     return items.filter(item => item.status === true);
//   } else if (filterOption === 'off') {
//     return items.filter(item => item.status === false);
//   }
// };

export const fetchDevices = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
};
