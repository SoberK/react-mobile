import { CHANGE_COUNT, GET_DATA_SUCCESS, GET_DATA_FAILE } from '../action/anctionType';

const initData = {
  count: 0,
  data: {},
};

export default (state = initData, action) => {
  switch (action.type) {
    case CHANGE_COUNT:
      return {
        ...state,
        count: state.count + action.payload.count,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    case GET_DATA_FAILE:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
