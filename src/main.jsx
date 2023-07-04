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
import { About } from "./pages/About/About";
import { Faq } from "./pages/Faq/Faq";
import { WorkWithUs } from "./pages/WorkWithUs/WorkWithUs";
import { IndexDriver } from "./pages/indexDriver/indexDriver";
import { IndexDriverDetails } from "./pages/IndexDriverDetails/IndexDriverDetails";
import AddUsuario from "./pages/SignUpClient/AddUsuario";
import { LandingPageUser } from "./pages/LandingPageUser";
import { Ranqueamento } from "./pages/RankingDriver/Ranqueamento";
import { ProfileDriver } from "./pages/ProfileDriver/ProfileDriver";
import { OrdersReceived } from "./pages/OrdersReceived/OrdersReceived";
import { ProfileUser } from "./pages/ProfileUser/ProfileUser";
import { isLoggedin } from "./pages/App/App";

//Configurando o React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: isLoggedin ? <LandingPageUser/> : <LandingPage />
      },
      {
        path: "orcamento",
        element: <Order />,
      },
      {
        path: "sobreNos",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "trabalheConosco",
        element: <WorkWithUs />,
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
        path: "driver",
        element: <IndexDriver />,
      },
      {
        path: "orcamentos",
        element: <OrdersReceived />,
      },
      {
        path: "user",
        element: <LandingPageUser />,
      },
      {
        path: "orderDetails",
        element: <IndexDriverDetails />,
      },
      {
        path: "addUsuario",
        element: <AddUsuario />,
      },
      {
        path: "ranking",
        element: <Ranqueamento />,
      },
      {
        path: "profileDriver",
        element: <ProfileDriver />,
      },
      {
        path: "profileUser",
        element: <ProfileUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
