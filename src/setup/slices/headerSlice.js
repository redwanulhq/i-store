import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartOpen: false,
  authOpen: false,
};
const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartOpen = !state.cartOpen;
    },
    toggleAuth: (state) => {
      state.authOpen = !state.authOpen;
    },
  },
});

export const { toggleCart, toggleAuth } = headerSlice.actions;
export default headerSlice.reducer;
