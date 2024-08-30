"use client";

import { store } from "@/lib/store";
import { makeStore } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from  'redux-persist/integration/react'
import { persistStore } from 'redux-persist';
import { useRef } from 'react';

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<div className="text-center mt-8 text-green-500 font-bold bg-red-500">Loading...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}