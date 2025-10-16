import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickup: "",
  drop: "",
  startDate: "",
  endDate: "",
  vehicleType: "",
  estimatedPrice: 0,
};

const vehicleRates = {
  SUV: 5000,
  Sedan: 4000,
  "Tempo Traveller": 10000,
  "Volvo Bus": 25000,
};

const cabSlice = createSlice({
  name: "cab",
  initialState,
  reducers: {
    setPickup: (state, action) => {
      state.pickup = action.payload;
    },
    setDrop: (state, action) => {
      state.drop = action.payload;
    },
    setStartDate: (state, action) => {
      state.startDate = action.payload;
      updateEstimatedPrice(state);
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
      updateEstimatedPrice(state);
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
      updateEstimatedPrice(state);
    },
  },
});

function updateEstimatedPrice(state) {
  if (state.startDate && state.endDate && state.vehicleType) {
    const start = new Date(state.startDate);
    const end = new Date(state.endDate);
    const diffDays = Math.max(
      1,
      Math.ceil((end - start) / (1000 * 60 * 60 * 24))
    );
    const rate = vehicleRates[state.vehicleType] || 0;
    state.estimatedPrice = diffDays * rate;
  }
}

export const { setPickup, setDrop, setStartDate, setEndDate, setVehicleType } =
  cabSlice.actions;

export default cabSlice.reducer;
