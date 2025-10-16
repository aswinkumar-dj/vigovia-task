import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelName: "",
  city: "",
  nights: 0,
  checkInDate: "",
  checkOutDate: "",
  estimatedPrice: 0,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotelName: (state, action) => {
      state.hotelName = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setNights: (state, action) => {
      state.nights = action.payload;
      state.estimatedPrice = state.nights * 5500;
    },
    setCheckInDate: (state, action) => {
      state.checkInDate = action.payload;
    },
    setCheckOutDate: (state, action) => {
      state.checkOutDate = action.payload;
    },
  },
});

export const {
  setHotelName,
  setCity,
  setNights,
  setCheckInDate,
  setCheckOutDate,
} = hotelSlice.actions;

export default hotelSlice.reducer;
