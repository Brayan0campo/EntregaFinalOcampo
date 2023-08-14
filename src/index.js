import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/layout/navbar.scss";
import "./styles/layout/items.scss";
import "./styles/base/global.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
