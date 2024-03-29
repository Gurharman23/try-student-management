import React from "react";
import { StudentCard } from "./StudentCard.jsx";
import PropTypes from "prop-types";

export const StudentList = ({ students }) => {
  return (
    <>
      <h2 className="mb-0">STUDENTS LIST</h2>
      <div className="d-flex flex-column">
        {students.map((student) => (
          <div key={student.id} className="card m-1">
            <StudentCard student={student} />
          </div>
        ))}
      </div>
    </>
  );
};

StudentList.propTypes = {
  students: PropTypes.array,
};
