import { combineReducers } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

const rootReducer = combineReducers({
  items: itemReducer,
});

export default rootReducer;
