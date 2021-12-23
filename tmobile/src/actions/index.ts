import * as actionTypes from './types';

export const toggleMenu = () => (dispatch: any, getState: any) => {
  const open = getState().main.open;
  dispatch({
    type: actionTypes.OPEN_MENU,
    payload: !open,
  });
};
