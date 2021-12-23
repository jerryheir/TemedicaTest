import * as actionTypes from '../actions/types';

interface Action {
  type: string;
  payload?: any;
}

const initalState = {
  open: false,
};

const mainReducers = (state = initalState, action: Action) => {
  const {type, payload} = action;
  switch (type) {
    case actionTypes.OPEN_MENU: {
      return {
        ...state,
        open: payload,
      };
    }
    default:
      return state;
  }
};

export default mainReducers;
