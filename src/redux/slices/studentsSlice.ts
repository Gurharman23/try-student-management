import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteStudent, fetchStudents } from "../../student-api";
import { Student } from "../../types";

const typePrefix = "students/fetchStudents";
export const fetchStudentsThunk = createAsyncThunk(typePrefix, async () => {
  return await fetchStudents();
});

export const deleteStudentThunk = createAsyncThunk(
  "students/deleteStudent",
  async (id: string | number) => {
    await deleteStudent(id);
    return { id };
  }
);

const students = createSlice({
  name: "students",
  initialState: [] as Student[],
  reducers: {
    studentCreated: (state, { payload }) => {
      state.push(payload);
    },
    studentUpdated: (state, { payload }) => {
      const studentIndex = state.findIndex(
        (student: Student) => student.id === payload.id
      );
      state[studentIndex] = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsThunk.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(
      deleteStudentThunk.fulfilled,
      (state, { payload: { id } }) => {
        const indexToRemove = state.findIndex((student) => id === student.id);
        if (indexToRemove !== -1) {
          state.splice(indexToRemove, 1);
        }
      }
    );
  },
});

export const { studentCreated, studentUpdated } = students.actions;
export default students.reducer;
