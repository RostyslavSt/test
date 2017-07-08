import { LOAD_DEVICES } from '../constants/constants';
import DeviceListApi from '../api/deviceListApi';

export const loadDevicesSuccess = (devices) => {
  return {
    type: LOAD_DEVICES,
    devices
  };
};

export function loadDevices () {
  return function (dispatch) {
    return DeviceListApi.getDevices().then(devices => {
      dispatch(loadDevicesSuccess(devices));
    })
    .catch(error => {
      throw (error);
    });
  };
}

export function loadDevice (id) {
  return function (dispatch) {
    return DeviceListApi.getDevice(id).then(device => {
      dispatch(loadDevicesSuccess([device]));
    })
    .catch(error => {
      throw (error);
    });
  };
}
