import {fork} from '@redux-saga/core/effects';
import {test} from './global/saga';

export default function* rootSaga() {
  yield fork(test);
}
