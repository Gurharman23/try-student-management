import { createRoot } from "react-dom/client";
import React from "react";
import { App } from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateForm } from "./components/CreateForm";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<CreateForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
