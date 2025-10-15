import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    adduser: "",
    toggleToOverview: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.adduser = action.payload;
    },
    toggleToOverview: (state) => {
      state.toggleToOverview = !state.toggleToOverview;
    },
  },
});

export const { addUser, toggleToOverview } = userSlice.actions;
export default userSlice.reducer;
