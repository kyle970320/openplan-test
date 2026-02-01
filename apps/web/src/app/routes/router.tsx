import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/Home";
import ResultPage from "../../pages/Result";
import NotFoundPage from "../NotFound";
import Layout from "../Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
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
