import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./pages/LandingPage";
import { SignUp } from "./pages/SignUp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);
