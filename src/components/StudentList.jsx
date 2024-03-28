import React from "react";
import { StudentCard } from "./StudentCard.jsx";

export const StudentList = ({ students }) => {
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
