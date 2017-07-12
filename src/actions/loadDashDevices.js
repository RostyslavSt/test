import { LOAD_DASH_DEVICE, UPDATE_CURRENT_REQUEST }
from '../constants/constants';

export const loadDevicesSuccess = (payload) => {
  return {
    type: LOAD_DASH_DEVICE,
    payload
  };
};

export const loadDevicesRequest = () => {
  return {
    type: UPDATE_CURRENT_REQUEST
  };
};
