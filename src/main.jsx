import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./pages/LandingPage";
import { SignUpMotorista } from "./pages/SignUpMotorista";
import { SignUpClient } from "./pages/SingUpClient";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LandingPage />
    <SignUpMotorista /> */}
    <SignUpClient /> 
  </React.StrictMode>
);
