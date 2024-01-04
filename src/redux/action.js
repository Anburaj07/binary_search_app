import { SET_SEARCH_INPUT } from "./actionTypes";

export const setSearchInput = (input) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_INPUT,
    payload: input,
  });
};
