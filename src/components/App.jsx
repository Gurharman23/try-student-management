import React from "react";
import { Link } from "react-router-dom";
import { StudentList } from "./StudentList.jsx";
export const App = () => {
  return (
    <div>
      <div className="create-btn">
        <Link to={"/create"}>
          <button>Create New</button>
        </Link>
      </div>
      <StudentList />
    </div>
  );
};
