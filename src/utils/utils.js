import data from '../data/data.json';

export const searchItem = (item, searchValue) => {
  console.log(searchValue);
  if (item.name.toLowerCase().includes(searchValue) || searchValue === '') {
    return true;
  }
  return false;
};

export const fetchDevices = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 1000);
  });
};
