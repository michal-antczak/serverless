import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: undefined,
  firstname: "",
  lastname: "",
  photos: [],
  price: undefined,
  status: "",
  isLogged: false,
  permissions: "",
  title: "",
};

const currentUser = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload?.id) {
        return { ...state, ...action.payload, isLogged: true };
      }
    },
    logout() {
      return {
        id: undefined,
        firstname: "",
        lastname: "",
        photos: [],
        price: undefined,
        status: "",
        isLogged: false,
        permissions: "",
        title: "",
      };
    },
  },
});

export const { login, logout } = currentUser.actions;

export default currentUser.reducer;
