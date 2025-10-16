import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: "",
  to: "",
  departureDate: "",
  returnDate: "",
  passengers: 1,
  flightClass: "Economy",
  estimatedPrice: 6000, // base price for 1 economy
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setFlightDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    updatePrice: (state) => {
      const basePrice =
        state.flightClass.toLowerCase() === "business" ? 15000 : 6000;
      state.estimatedPrice = basePrice * state.passengers;
    },
  },
});

export const { setFlightDetails, updatePrice } = flightSlice.actions;
export default flightSlice.reducer;
