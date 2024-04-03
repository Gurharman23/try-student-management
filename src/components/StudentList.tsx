import * as React from "react";
import * as PropTypes from "prop-types";
import { Student } from "../types";
import { StudentCard } from "./StudentCard";

export const StudentList = ({ students } : {students: Student[]}) => {
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
