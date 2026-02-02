import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/Home";
import ResultPage from "../../pages/Result";
import NotFoundPage from "../NotFound";
import Layout from "../Layout";
import RedirectInterceptor from "./RedirectInterceptor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
