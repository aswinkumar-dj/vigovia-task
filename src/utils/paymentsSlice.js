import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  installmentCount: 1,
  dueDates: [],
};

const paymentsSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    setInstallmentCount: (state, action) => {
      state.installmentCount = action.payload;
      state.dueDates = Array.from({ length: action.payload }, () => "");
    },
    setDueDate: (state, action) => {
      const { index, date } = action.payload;
      state.dueDates[index] = date;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export const { setInstallmentCount, setDueDate, setTotalAmount } =
  paymentsSlice.actions;
export default paymentsSlice.reducer;
