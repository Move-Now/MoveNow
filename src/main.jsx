import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Configurando rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./pages/App/App";
import { LandingPage } from "./pages/LandingPage";
import { SignUpClient } from "./pages/SignUpClient";
import { SignUpDriver } from "./pages/SignUpDriver";

//Configurando o React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <SignUpClient />,
      },
      {
        path: "cadastroMotorista",
        element: <SignUpDriver />,
      },
      {
        path: "home",
        element: <LandingPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
