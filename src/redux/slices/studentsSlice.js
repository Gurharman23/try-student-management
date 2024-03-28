import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchStudents } from "../../student-api";

const typePrefix = "students/fetchStudents";
export const fetchStudentsThunk = createAsyncThunk(typePrefix, async () => {
  return fetchStudents();
});
const students = createSlice({
  name: "students",
  initialState: [],
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsThunk.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const { studentsFetched, studentCreated, studentUpdated } =
  students.actions;
export default students.reducer;
