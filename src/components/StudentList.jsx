/* eslint-disable react/prop-types */
import React from "react";
import { StudentCard } from "./StudentCard.jsx";

export const StudentList = ({ students }) => {
  return (
    <>
      <h2 className="mb-0">STUDENTS LIST</h2>
      <div className="d-flex flex-column">
        {students.map(({ id, name, alias }) => (
          <div key={id} className="card m-1">
            <StudentCard id={id} name={name} alias={alias} />
          </div>
        ))}
      </div>
    </>
  );
};
