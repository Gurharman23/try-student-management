import React from "react";
import { createStudent } from "../student-api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { studentCreated } from "../redux/slices/studentsSlice";

export const CreateForm = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    createStudent(formProps).then((val) => {
      dispatch(studentCreated(val));
      navigator("/");
    });
    e.preventDefault();
  };
  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      <h1 className="text-center">CreateForm</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" id="name" />
        </div>
        <div>
          <label className="form-label" htmlFor="alias">
            Alias
          </label>
          <input className="form-control" type="text" name="alias" id="alias" />
        </div>
        <button className="btn btn-primary mt-3 w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

CreateForm.propTypes = {};
