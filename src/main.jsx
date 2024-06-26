/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./Components/MainRoot/MainRoot";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Applied from "./Components/Applied/Applied";
import Blogs from "./Components/Blogs/Blogs";
import Statistics from "./Components/Statistics/Statistics";
import JobDetails from "./Components/JobDetails/JobDetails";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </React.StrictMode>
);
