import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripTitle: "",
  travelers: "",
  duration: "",
  departureCity: "",
  arrivalCity: "",
  startDate: "",
  endDate: "",
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

export const { setTripField } = tripSlice.actions;
export default tripSlice.reducer;
