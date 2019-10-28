import actionType from '../action/actionType';

const initState = {
  count: 1,
};

export const demo = (state = initState, action) => {
  if (action.type === actionType.DEMO) {
    return { ...state,
      count: 2 };
  }
  return state;
};
