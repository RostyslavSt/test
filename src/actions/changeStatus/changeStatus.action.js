import { CHANGE_STATUS } from '../../constants/constants';

export const changeStatus = (id) => ({
  type: CHANGE_STATUS,
  id
});
