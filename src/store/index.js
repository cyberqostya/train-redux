import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";

const rootReducer = combineReducers({
  cashReducer, customersReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
