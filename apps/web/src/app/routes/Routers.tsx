import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "@/pages/Home";
import ResultPage from "@/pages/Result";
import Layout from "@/app/Layout";

import RedirectInterceptor from "./RedirectInterceptor";
import RouteError from "./RouterError";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouteError />,
    children: [
      {
        index: true,
        element: <RedirectInterceptor />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
    ],
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
