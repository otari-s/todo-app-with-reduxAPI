import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {
    show: false,
    message: "",
    type: "",
    duration: 0,
  },
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, { payload }) => {
      state.notification = { show: true, ...payload };
    },
    clearNotification: (state, { payload }) => {
      state.notification = payload;
    },
  },
});

export const { showNotification, clearNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
