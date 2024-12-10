import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { productReducer } from "./productSlice";

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
    product:productReducer
  },
});

