import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./layout";
import { UserDataForm } from "./pages/userDataForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "fullName",
        element: <UserDataForm />,
      },
      {
        path: "email",
        element: <UserDataForm />,
      },
      {
        path: "address",
        element: <UserDataForm />,
      },
      {
        path: "floor-number",
      },
      {
        path: "amenities",
      },
      { path: "details" },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
