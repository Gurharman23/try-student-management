import React from "react";

export const StudentCard = ({ id, name }) => {
  return (
    <div>
      <span style={{ margin: "20px" }}>ID: {id}</span>
      <span>Name: {name}</span>
    </div>
  );
};
