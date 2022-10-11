import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AddPollPage from "../pages/AddPollPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/addpoll",
    element: <AddPollPage />,
  },
]);
export default Routes;
