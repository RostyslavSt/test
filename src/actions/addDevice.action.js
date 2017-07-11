import { ADD_DEVICE } from '../constants/constants';
import DeviceListApi from '../api/deviceListApi';

export const addReduxDevice = (device) => {
  return {
    type: ADD_DEVICE,
    device
  };
};

export function addDevice (device) {
  return function (dispatch) {
    return DeviceListApi.addDevice(device).then(data => {
      dispatch(addReduxDevice(data));
    })
    .catch(error => {
      throw (error);
    });
  };
}
