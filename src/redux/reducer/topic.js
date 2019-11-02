import { GET_TOPICDATA_SUCCESS, GET_TOPICDATA_FAILE } from '../action/anctionType';

const initData = {
  topData: {
    data: [],
  },
};
export default (state = initData, action) => {
  switch (action.type) {
    case GET_TOPICDATA_SUCCESS:
      return {
        ...state,
        topData: action.payload,
      };
    case GET_TOPICDATA_FAILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
