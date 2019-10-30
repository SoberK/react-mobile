import { CHANGE_COUNT, GET_DATA_REQUEST } from './anctionType';

export const CHANGE_COUNT_ACTION = () => ({ type: CHANGE_COUNT, payload: { count: 1 } });

export const GET_DATA_REQUEST_ACTION = () => (
  { type: GET_DATA_REQUEST }
);
