import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "./storage";
import RootReducer from "../reducers/RootReducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["tracking"],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [
            "persist/FLUSH",
            "persist/REHYDRATE",
            "persist/PAUSE",
            "persist/PERSIST",
            "persist/PURGE",
            "persist/REGISTER",
          ],
        },
      }),
  });
};

;
