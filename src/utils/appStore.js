import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import flightReducer from "./flightSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    flight: flightReducer,
  },
});
export default appStore;
