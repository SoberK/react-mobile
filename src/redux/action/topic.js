import { GET_TOPICDATA_REQUES } from './anctionType';

export const TOPICDATA_REQUES = (pageNow, pageSize) => ({
  type: GET_TOPICDATA_REQUES,
  payload: { pageNow, pageSize },
});
