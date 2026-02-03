import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RedirectInterceptor from "./RedirectInterceptor";
import RouteError from "./RouterError";

import Layout from "@/app/Layout";
import Result from "@/pages/result/ui/Result";

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
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
