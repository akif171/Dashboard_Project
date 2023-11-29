import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  maritalStatus: "",
  dateOfBirth: "",
  email: "",
  phoneNum: "",
  alternatePhoneNum: "",
  address1: "",
  address2: "",
};

const personalSlice = createSlice({
  name: "personal",
  initialState,
  
});

export default personalSlice.reducer;
