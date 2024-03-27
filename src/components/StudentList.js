import React, { useState, useEffect } from "react";
import { getStudents } from "../student-helpers";
import { StudentCard } from "./StudentCard";

export const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents().then((data) => setStudents(data));
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
