import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const students = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    studentsFetched: (state, { payload }) => {
      return payload;
    },
    studentCreated: (state, { payload }) => {
      state.push(payload);
    },
    studentUpdated: (state, { payload }) => {
      const studentIndex = state.findIndex(
        (student) => student.id === payload.id
      );
      state[studentIndex] = payload;
    },
  },
});

export const { studentsFetched, studentCreated, studentUpdated } =
  students.actions;
export default students.reducer;
