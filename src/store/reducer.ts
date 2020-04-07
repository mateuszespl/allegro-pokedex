import * as actionTypes from "./actions";

const initialState = {
  initial: true,
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.INITIAL_ACTION:
      return {
        initial: false,
      };
    default:
      return state;
  }
};
