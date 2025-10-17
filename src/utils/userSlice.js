import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    adduser: "",
    toggleToOverview: false,
    toggleToSelect: false,
    toggleToFlight: false,
    toggleToHotel: false,
    toggleToCab: false,
    toggleToActivities: false,
    toggleToPayments: false,
    toggleToThankYou: false,
    toggleToPage: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.adduser = action.payload;
    },
    toggleToOverview: (state) => {
      state.toggleToOverview = !state.toggleToOverview;
    },
    toggleToSelect: (state) => {
      state.toggleToSelect = !state.toggleToSelect;
    },
    toggleToFlight: (state) => {
      state.toggleToFlight = !state.toggleToFlight;
    },
    toggleToHotel: (state) => {
      state.toggleToHotel = !state.toggleToHotel;
    },
    toggleToCab: (state) => {
      state.toggleToCab = !state.toggleToCab;
    },
    toggleToActivities: (state) => {
      state.toggleToActivities = !state.toggleToActivities;
    },
    toggleToPayments: (state) => {
      state.toggleToPayments = !state.toggleToPayments;
    },
    toggleToThankYou: (state) => {
      state.toggleToThankYou = !state.toggleToThankYou;
    },
    toggleToPage: (state) => {
      state.toggleToPage = !state.toggleToPage;
    },
  },
});

export const {
  addUser,
  toggleToOverview,
  toggleToSelect,
  toggleToFlight,
  toggleToHotel,
  toggleToCab,
  toggleToActivities,
  toggleToPayments,
  toggleToThankYou,
  toggleToPage,
} = userSlice.actions;
export default userSlice.reducer;
