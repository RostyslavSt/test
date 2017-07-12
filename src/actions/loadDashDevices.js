import { LOAD_DEVICES_ASYNC, UPDATE_CURRENT_REQUEST }
from '../constants/constants';

export const loadDevicesSuccess = (payload) => {
  return {
    type: LOAD_DEVICES_ASYNC,
    payload
  };
};

export const loadDevicesRequest = () => {
  return {
    type: UPDATE_CURRENT_REQUEST
  };
};
