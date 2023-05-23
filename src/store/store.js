import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "./notification-slice";
import todoSlice from "./todo-slice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    notification: notificationSlice,
  },
});
