import React from "react";
import { StudentList } from "./StudentList";
import { Link } from "react-router-dom";

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
