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
  reducers: {
    setBasicInfo: (state, action) => {
      state.firstName = action.payload.firstName;
      state.middleName = action.payload.middleName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.maritalStatus = action.payload.maritalStatus;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.email = action.payload.email;
      state.phoneNum = action.payload.phoneNum;
      state.alternatePhoneNum = action.payload.alternatePhoneNum;
      state.address1 = action.payload.address1;
      state.address2 = action.payload.address2;
    },
  },
});

export const { setBasicInfo } = personalSlice.actions;

export default personalSlice.reducer;
