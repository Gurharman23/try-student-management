import React from "react";
import { useDispatch } from "react-redux";
import { deleteStudentThunk } from "../redux/slices/studentsSlice";

export const StudentCard = ({ id, name, alias }) => {
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
            dispatch(deleteStudentThunk(id));
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
