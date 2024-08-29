import { combineReducers } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

const rootReducer = combineReducers({
  items: itemReducer,
  // Add other reducers here if needed
});

export default rootReducer;
