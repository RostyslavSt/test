import { CHANGE_FILTER_OPTION } from '../data/constants';

export const filterAction = (filterOption) => {
  return {
    type: CHANGE_FILTER_OPTION,
    filterOption
  };
};
