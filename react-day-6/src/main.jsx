import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./page/About.jsx";
import Home from "./page/Home.jsx";
import Layout from "../component/Layout";
import Product from "./page/product";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/product/:productID", element: <Product /> }, //
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
