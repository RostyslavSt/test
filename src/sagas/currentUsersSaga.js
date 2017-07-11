import { UPDATE_CURRENT_USERS } from '../actions/loadPersons.action.js';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Api from '../api/personsApi.js';
require('babel-polyfill');
import 'regenerator-runtime/runtime';

function *getPersonsStatus () {
  const currentPersons = yield call(Api.personsList);

  yield put({ type: 'UPDATE_STATUS_PERSONS', currentPersons });
}
export default function *currentPersonStatusSaga () {
  yield takeEvery('UPDATE_STATUS_PERSONS', getPersonsStatus);
}

