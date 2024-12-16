import { combineReducers } from "@reduxjs/toolkit";
// Import your individual slice reducers

//import trackingReducer from "./trackingSlice"; // This one will be blacklisted

// Combine them into a single root reducer
const RootReducers = combineReducers({
//   user: userReducer,
//   settings: settingsReducer,
//   tracking: trackingReducer, // Example reducer that might be blacklisted
});

export default RootReducers;
