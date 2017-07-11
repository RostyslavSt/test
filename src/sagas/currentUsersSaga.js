import { UPDATE_CURRENT_USERS } from '../actions/loadPersons.action.js';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../api/usersApi.js';
import 'regenerator-runtime/runtime';
require('babel-polyfill');

function *getUsersList () {
  const currentUsers = yield call(Api.usersList);

  yield put({ type: 'UPDATE_STATUS_PERSONS', currentUsers });
}
export default function *currentUsersSaga () {
  yield takeEvery('UPDATE_STATUS_PERSONS', getUsersList);
}

