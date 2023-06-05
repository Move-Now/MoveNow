import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Configurando rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./pages/App/App";
import { LandingPage } from "./pages/LandingPage";
import { SignUpClient } from "./pages/SignUpClient";
import { SignUpDriver } from "./pages/SignUpDriver";
import { Login } from "./pages/Login";
import { Order } from "./pages/Order/Order";

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
        path: "cadastro",
        element: <SignUpClient />,
      },
      {
        path: "cadastroMotorista",
        element: <SignUpDriver />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "orcamento",
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
