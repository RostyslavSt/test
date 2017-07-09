import { DELETE_DEVICE } from '../constants/constants';
import DeviceListApi from '../api/deviceListApi';

export const deleteDeviceSuccess = (id) => ({
  type: DELETE_DEVICE,
  id
});

export function deleteDevice (id) {
  return function (dispatch) {
    return DeviceListApi.deleteDevice(id).then(deviceId => {
      dispatch(deleteDeviceSuccess(deviceId));
    }).catch(error =>{
      throw (error);
    });
  };
}
