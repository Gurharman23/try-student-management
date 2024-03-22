import React, { useState, useEffect } from "react";
import { getStudents } from "./student-helpers";

export const StudentList = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);

  return (
    <div>
      {students.map(({ id, name }) => (
        <div key={id}>
          {" "}
          id: {id} Name: {name}
        </div>
      ))}
    </div>
  );
};
