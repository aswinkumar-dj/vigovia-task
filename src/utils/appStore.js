import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import flightReducer from "./flightSlice";
import hotelReducer from "./hotelSlice";
import cabReducer from "./cabSlice";
import itineraryReducer from "./itinerarySlice";
import paymentsReducer from "./paymentsSlice";
import tripReducer from "./tripSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    flight: flightReducer,
    hotel: hotelReducer,
    cab: cabReducer,
    itinerary: itineraryReducer,
    payments: paymentsReducer,
    trip: tripReducer,
  },
});
export default appStore;
