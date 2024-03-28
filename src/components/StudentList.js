import React, { useEffect, useState } from "react";
import { getStudents } from "../student-helpers";
import { StudentCard } from "./StudentCard";
import { useDispatch, useSelector } from "react-redux";
import { studentsFetched } from "../redux/slices/studentsSlice";

export const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  useEffect(() => {
    students.length ||
      getStudents().then((data) => {
        dispatch(studentsFetched(data));
      });
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
