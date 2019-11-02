import { fork, all } from 'redux-saga/effects';
import home from './home';
import toppic from './toppic';

export default function* root() {
  yield all([
    fork(home),
    fork(toppic),
  ]);
}
