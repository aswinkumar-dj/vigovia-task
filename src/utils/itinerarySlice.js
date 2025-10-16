import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: [
    {
      id: 1,
      morning: "",
      afternoon: "",
      evening: "",
    },
  ],
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    addDay: (state) => {
      const newId = state.days.length + 1;
      state.days.push({ id: newId, morning: "", afternoon: "", evening: "" });
    },
    removeDay: (state, action) => {
      if (state.days.length > 1) {
        state.days = state.days.filter((day) => day.id !== action.payload);
      }
    },
    updateDay: (state, action) => {
      const { id, field, value } = action.payload;
      const day = state.days.find((d) => d.id === id);
      if (day) {
        day[field] = value;
      }
    },
  },
});

export const { addDay, removeDay, updateDay } = itinerarySlice.actions;
export default itinerarySlice.reducer;
