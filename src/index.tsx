import { Container, createRoot } from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "./components/App";
import "./styles.css";

const root = createRoot(document.getElementById("app") as Container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
