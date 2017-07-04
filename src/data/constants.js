import Range from '../components/Range/Range';

export const CHANGE_FILTER_OPTION = 'CHANGE_FILTER_OPTION';
export const CHANGE_STATUS = 'CHANGE_STATUS';

export const options = [
  {
    value: 'all',
    innerText: 'All'
  },
  {
    value: 'on',
    innerText: 'Show On'
  },
  {
    value: 'off',
    innerText: 'Show OFF'
  }
];


export const components = {
  Range: Range
};
