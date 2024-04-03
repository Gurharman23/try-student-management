import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateForm } from "./CreateForm";
import { Home } from "./Home";
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
