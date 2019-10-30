import { takeEvery, all, call, put } from 'redux-saga/effects';
import api from '../../http/api';
import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILE } from '../action/anctionType';

function* home() {
  try {
    const data = yield call(api.getHomeData, {});
    console.log(data);
    yield put({ type: GET_DATA_SUCCESS, payload: { data } });
  } catch (e) {
    yield put({ type: GET_DATA_FAILE, payload: { e } });
  }
}


export default function* root() {
  yield all([
    takeEvery(GET_DATA_REQUEST, home),
  ]);
}
