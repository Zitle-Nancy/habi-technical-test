import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./layout";
import { DataForm } from "./pages/dataForm";
import { AmenitiesForm } from "./pages/amenitiesForm";
import { Details } from "./pages/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "fullName",
        element: <DataForm />,
      },
      {
        path: "email",
        element: <DataForm />,
      },
      {
        path: "address",
        element: <DataForm />,
      },
      {
        path: "floor-number",
        element: <DataForm />,
      },
      {
        path: "amenities",
        element: <AmenitiesForm />,
      },
      { path: "details", element: <Details /> },
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
