import { call, takeLatest, all, put } from 'redux-saga/effects';
import api from '../../http/api';
import { GET_TOPICDATA_SUCCESS, GET_TOPICDATA_FAILE, GET_TOPICDATA_REQUES } from '../action/anctionType';

function* getData(action) {
  try {
    const data = yield call(api.getTopicData,
      { page: action.payload.pageNow, size: action.payload.pageSize });
    yield put({ type: GET_TOPICDATA_SUCCESS, payload: { ...data } });
  } catch (e) {
    yield put({ type: GET_TOPICDATA_FAILE });
  }
}
export default function* root() {
  yield all([
    takeLatest(GET_TOPICDATA_REQUES, getData),
  ]);
}
