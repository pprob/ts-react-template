import {delay, takeEvery} from 'redux-saga/effects';

export function* testSaga() {
  yield delay(1000);
}

export function* test() {
  yield takeEvery('TEST', testSaga);
}
