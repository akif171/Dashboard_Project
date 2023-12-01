import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basic: {
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
  },
  professional: {
    jobTitle: "",
    salesPerson: "",
    technology: "",
    workPermitStatus: "",
    workPermitIssueDate: "",
    workPermitExpireDate: "",
    SSN: "",
    employmentStatus: "",
    referredBy: "",
  },
  profile: {
    totalInterviews: "",
    activeInterviews: "",
    passedInterviews: "",
    failedInterviews: "",
    holdInterviews: "",
    lastInterviewOn: "",
    rating: 0,
  },
  emergencyContacts: {
    contactInfo1: {
      contactName: "",
      contactPhoneNum: "",
      email: "",
      contactRelation: "",
    },
    contactInfo2: {
      contactName: "",
      contactPhoneNum: "",
      email: "",
      contactRelation: "",
    },
  },
};

const personalSlice = createSlice({
  name: "personal",
  initialState,
  reducers: {
    setBasicInfo: (state, action) => {
      state.basic.firstName = action.payload.firstName;
      state.basic.middleName = action.payload.middleName;
      state.basic.lastName = action.payload.lastName;
      state.basic.gender = action.payload.gender;
      state.basic.maritalStatus = action.payload.maritalStatus;
      state.basic.dateOfBirth = action.payload.dateOfBirth;
      state.basic.email = action.payload.email;
      state.basic.phoneNum = action.payload.phoneNum;
      state.basic.alternatePhoneNum = action.payload.alternatePhoneNum;
      state.basic.address1 = action.payload.address1;
      state.basic.address2 = action.payload.address2;
    },
    setProfessionalInfo: (state, action) => {
      state.professional.jobTitle = action.payload.jobTitle;
      state.professional.salesPerson = action.payload.salesPerson;
      state.professional.technology = action.payload.technology;
      state.professional.workPermitStatus = action.payload.workPermitStatus;
      state.professional.SSN = action.payload.SSN;
      state.professional.workPermitIssueDate =
        action.payload.workPermitIssueDate;
      state.professional.workPermitExpireDate =
        action.payload.workPermitExpireDate;
      state.professional.employmentStatus = action.payload.employmentStatus;
      state.professional.referredBy = action.payload.referredBy;
    },
    setProfileInfo: (state, action) => {
      state.profile.totalInterviews = action.payload.totalInterviews;
      state.profile.activeInterviews = action.payload.activeInterviews;
      state.profile.passedInterviews = action.payload.passedInterviews;
      state.profile.failedInterviews = action.payload.failedInterviews;
      state.profile.holdInterviews = action.payload.holdInterviews;
      state.profile.lastInterviewOn = action.payload.lastInterviewOn;
      state.profile.rating = action.payload.rating;
    },
    setEmergencyContacts: (state, action) => {
      // set contact1
      state.emergencyContacts.contactInfo1.contactName =
        action.payload.contact1.contactName;
      state.emergencyContacts.contactInfo1.contactPhoneNum =
        action.payload.contact1.contactPhoneNum;
      state.emergencyContacts.contactInfo1.email =
        action.payload.contact1.email;
      state.emergencyContacts.contactInfo1.contactRelation =
        action.payload.contact1.contactRelation;

      // set contact2
      state.emergencyContacts.contactInfo2.contactName =
        action.payload.contact2.contactName;
      state.emergencyContacts.contactInfo2.contactPhoneNum =
        action.payload.contact2.contactPhoneNum;
      state.emergencyContacts.contactInfo2.email =
        action.payload.contact2.email;
      state.emergencyContacts.contactInfo2.contactRelation =
        action.payload.contact2.contactRelation;
    },
  },
});

export const {
  setBasicInfo,
  setProfessionalInfo,
  setProfileInfo,
  setEmergencyContacts,
} = personalSlice.actions;

export default personalSlice.reducer;
