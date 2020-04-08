import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
