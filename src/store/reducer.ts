import * as actionTypes from "./actions";

const initialState = {
  searchInputValue: "",
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        searchInputValue: action.searchInputValue,
      };
    default:
      return state;
  }
};
