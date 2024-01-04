import { SET_SEARCH_INPUT } from "./actionTypes";

const initstate = {
  searchInput: {
    array: [],
    key: null,
  },
};

export const reducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_INPUT: {
      return {
        ...state,
        searchInput: payload,
      };
    }
    default: {
      return state;
    }
  }
};
