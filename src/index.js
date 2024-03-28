import { createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "./components/App.jsx";
import "./styles.css";

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
