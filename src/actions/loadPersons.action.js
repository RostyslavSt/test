import { UPDATE_CURRENT_USERS } from '../constants/constants';

export const loadUsersSuccess = (payload) => {
  return {
    type: UPDATE_CURRENT_USERS,
    payload
  };
};
