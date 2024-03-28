import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsThunk } from "../redux/slices/studentsSlice";
import { StudentCard } from "./StudentCard.jsx";

export const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    students.length || dispatch(fetchStudentsThunk());
  }, []);
  return (
    <div>
      <h1>STUDENTS LIST</h1>
      {students.map(({ id, name }) => (
        <div key={id}>
          <StudentCard id={id} name={name} />
        </div>
      ))}
    </div>
  );
};
