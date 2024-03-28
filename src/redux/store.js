import { configureStore } from "@reduxjs/toolkit";
import students from "./slices/studentsSlice";

export const store = configureStore({
  reducer: {
    students,
  },
});
