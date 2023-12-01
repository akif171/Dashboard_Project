import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true,
  userName: "Babu Vasa",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
