// Redux Toolkit Imports
import { configureStore } from "@reduxjs/toolkit";
// Custom Imports
import authReducer from "./auth/authSlice";
import alertReducer from "./alertSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
