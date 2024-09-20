import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tareas from "./components/Tareas";
import { Usuarios } from "./components/Usuarios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Tareas></Tareas>
  </React.StrictMode>
);
