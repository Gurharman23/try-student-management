import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./components/App";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { CreateForm } from "./components/CreateForm";

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<CreateForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
