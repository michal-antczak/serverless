import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./reducers/currentUserReducer";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export default store;
