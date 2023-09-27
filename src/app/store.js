import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userDetails/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
