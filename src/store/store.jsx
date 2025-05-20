import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
