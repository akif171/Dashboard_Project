import { configureStore } from "@reduxjs/toolkit";
import personalReducer from "../features/candidate/personalSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    personal: personalReducer,
    user: userReducer,
  },
});
