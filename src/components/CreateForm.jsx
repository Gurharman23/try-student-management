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
    <div>
      <h1>CreateForm</h1>
      <form onSubmit={submitHandler}>
        <div>
          Name: <input type="text" name={"name"} />
          Alias: <input type="text" name={"alias"} />
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};
