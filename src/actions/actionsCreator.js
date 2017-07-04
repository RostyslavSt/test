import { CHANGE_STATUS } from '../data/constants';

export const ChangeStatus = (index) => ({
  type: CHANGE_STATUS,
  index
});