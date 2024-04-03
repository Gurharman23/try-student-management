import * as React from "react"
import { useDispatch } from "react-redux";
import { deleteStudentThunk } from "../redux/slices/studentsSlice";
import * as PropTypes from "prop-types";
import { Student } from "../types";
import { UnknownAction } from "@reduxjs/toolkit";

export const StudentCard = ({ student: { id, name, alias }  }: { student: Student} ) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card-body">
        <div className="d-flex justify-content-center">{id}</div>
        <div className="min-font-height">{name}</div>
        <div className="min-font-height">{alias}</div>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <button
          className="btn btn-primary w-100"
          onClick={() => {
            dispatch(deleteStudentThunk(id) as unknown as UnknownAction);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    alias: PropTypes.string,
  }).isRequired,
};
