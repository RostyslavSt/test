import { CHANGE_FILTER_OPTION } from '../constants/constants';

export const filterAction = (filterOption) => {
  return {
    type: CHANGE_FILTER_OPTION,
    filterOption
  };
};
