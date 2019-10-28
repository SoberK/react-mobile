import { call, put, all, takeLatest } from 'redux-saga/effects';
import actionType from '../action/actionType';
import demohttp from '../../http/demo';

export function* demo() {
  try {
    const data = yield call(demohttp.getdemo, {});
    yield put({
      type: actionType.DEMO,
    });
  } catch (e) {
    yield put({
      type: actionType.DEMO,
    });
  }
}


export default function* root() {
  yield all([
    takeLatest(actionType.GET_DATA, demo),
  ]);
}
