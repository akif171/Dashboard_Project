import { configureStore } from "@reduxjs/toolkit";
import personalReducer from "../features/candidate/personalSlice";
export const store = configureStore({
  reducer: {
    personal: personalReducer,
  },
});
