import { ADD_DEVICE } from '../constants/constants';

export const addDevice = (device) => {
  return {
    type: ADD_DEVICE,
    device
  };
};

