import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { StudentList } from "./StudentList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsThunk } from "../redux/slices/studentsSlice.js";
import { CreateForm } from "./CreateForm.jsx";
import { Home } from "./Home.jsx";
export const App = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
