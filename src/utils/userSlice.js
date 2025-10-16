import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    adduser: "",
    toggleToOverview: false,
    toggleToSelect: false,
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
  },
});

export const { addUser, toggleToOverview, toggleToSelect } = userSlice.actions;
export default userSlice.reducer;
