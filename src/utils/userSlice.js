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
  },
});

export const {
  addUser,
  toggleToOverview,
  toggleToSelect,
  toggleToFlight,
  toggleToHotel,
  toggleToCab,
} = userSlice.actions;
export default userSlice.reducer;
