import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { WorkoutContextProvider } from "./context/WorkoutContext";
import "./index.css";

ReactDOM.render(
  <WorkoutContextProvider>
    <App />
  </WorkoutContextProvider>,
  document.getElementById("root")
);
