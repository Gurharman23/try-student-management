import React from "react";

export const StudentCard = ({ id, name, alias }) => {
  return (
    <div>
      <span>ID: {id}</span>
      <span>Name: {name}</span>
      <span>Alias: {alias}</span>
    </div>
  );
};
