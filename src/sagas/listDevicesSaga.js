import { LOAD_DEVICES_ASYNC } from '../actions/loadDashDevices';
import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api/dashListDeviceApi';
import { loadDevicesSuccess } from '../actions/loadDashDevices';

function *getDevicesList () {
  const devices = yield call(Api);

  yield put(loadDevicesSuccess(devices));
}
export default function *devicesSaga () {
  yield takeEvery('UPDATE_CURRENT_REQUEST', getDevicesList);
}

