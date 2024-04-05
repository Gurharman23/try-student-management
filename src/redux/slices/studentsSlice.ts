import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteStudent, fetchStudents, updateStudent } from "../../student-api";
import { Student, UpdateStudent } from "../../types";

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
export const updateStudentThunk = createAsyncThunk(
  "students/updateStudent",
  async (data: UpdateStudent) => {
    const updatedData = await updateStudent(data);
    return updatedData;
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
    builder.addCase(
      updateStudentThunk.fulfilled,
      (state, { payload: { id, ...rest } }) => {
        const studentIndex = state.findIndex((student) => id === student.id);
        if (studentIndex === -1) return;
        state[studentIndex] = { id, ...rest };
      }
    );
  },
});

export const { studentCreated, studentUpdated } = students.actions;
export default students.reducer;
