import React, { useEffect } from "react";
import { StudentList } from "./StudentList";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsThunk } from "../redux/slices/studentsSlice";
import { Link } from "react-router-dom";
import { UnknownAction } from "@reduxjs/toolkit";

export const Home = () => {
  const students = useSelector((state: any) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    students.length || dispatch(fetchStudentsThunk() as unknown as UnknownAction);
  }, []);
  return (
    <div className="">
      <br />
      <Link to={"/create"}>
        <button className="mb-3 w-100 btn btn-dark">Create New</button>
      </Link>
      <StudentList students={students} />
    </div>
  );
};

Home.propTypes = {};
