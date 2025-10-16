import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 35000,
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
  },
});

export const { setInstallmentCount, setDueDate } = paymentsSlice.actions;
export default paymentsSlice.reducer;
