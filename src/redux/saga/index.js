import { all, fork } from 'redux-saga/effects';
import demos from './demo';

export default function* root() {
  yield all([
    fork(demos),
  ]);
}
