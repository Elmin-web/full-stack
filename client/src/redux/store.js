import { configureStore } from "@reduxjs/toolkit";
import { coinsSlice } from "./slicers/coinsSlicer";
export const store = configureStore({
  reducer: {
    coins: coinsSlice,
  },
});
