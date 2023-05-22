import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Configurando rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LandingPage } from "./pages/LandingPage";
import { SignUp } from "./pages/SignUp";
import { App } from "./pages/App/App";

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
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
